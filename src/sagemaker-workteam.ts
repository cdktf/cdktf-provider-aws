// https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerWorkteamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#description SagemakerWorkteam#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#tags SagemakerWorkteam#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#tags_all SagemakerWorkteam#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#workforce_name SagemakerWorkteam#workforce_name}
  */
  readonly workforceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#workteam_name SagemakerWorkteam#workteam_name}
  */
  readonly workteamName: string;
  /**
  * member_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#member_definition SagemakerWorkteam#member_definition}
  */
  readonly memberDefinition: SagemakerWorkteamMemberDefinition[];
  /**
  * notification_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#notification_configuration SagemakerWorkteam#notification_configuration}
  */
  readonly notificationConfiguration?: SagemakerWorkteamNotificationConfiguration[];
}
export interface SagemakerWorkteamMemberDefinitionCognitoMemberDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#client_id SagemakerWorkteam#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#user_group SagemakerWorkteam#user_group}
  */
  readonly userGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#user_pool SagemakerWorkteam#user_pool}
  */
  readonly userPool: string;
}

function sagemakerWorkteamMemberDefinitionCognitoMemberDefinitionToTerraform(struct?: SagemakerWorkteamMemberDefinitionCognitoMemberDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    user_group: cdktf.stringToTerraform(struct!.userGroup),
    user_pool: cdktf.stringToTerraform(struct!.userPool),
  }
}

export interface SagemakerWorkteamMemberDefinitionOidcMemberDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#groups SagemakerWorkteam#groups}
  */
  readonly groups: string[];
}

function sagemakerWorkteamMemberDefinitionOidcMemberDefinitionToTerraform(struct?: SagemakerWorkteamMemberDefinitionOidcMemberDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.groups),
  }
}

export interface SagemakerWorkteamMemberDefinition {
  /**
  * cognito_member_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#cognito_member_definition SagemakerWorkteam#cognito_member_definition}
  */
  readonly cognitoMemberDefinition?: SagemakerWorkteamMemberDefinitionCognitoMemberDefinition[];
  /**
  * oidc_member_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#oidc_member_definition SagemakerWorkteam#oidc_member_definition}
  */
  readonly oidcMemberDefinition?: SagemakerWorkteamMemberDefinitionOidcMemberDefinition[];
}

function sagemakerWorkteamMemberDefinitionToTerraform(struct?: SagemakerWorkteamMemberDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cognito_member_definition: cdktf.listMapper(sagemakerWorkteamMemberDefinitionCognitoMemberDefinitionToTerraform)(struct!.cognitoMemberDefinition),
    oidc_member_definition: cdktf.listMapper(sagemakerWorkteamMemberDefinitionOidcMemberDefinitionToTerraform)(struct!.oidcMemberDefinition),
  }
}

export interface SagemakerWorkteamNotificationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#notification_topic_arn SagemakerWorkteam#notification_topic_arn}
  */
  readonly notificationTopicArn?: string;
}

function sagemakerWorkteamNotificationConfigurationToTerraform(struct?: SagemakerWorkteamNotificationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    notification_topic_arn: cdktf.stringToTerraform(struct!.notificationTopicArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html aws_sagemaker_workteam}
*/
export class SagemakerWorkteam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_sagemaker_workteam";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html aws_sagemaker_workteam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerWorkteamConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerWorkteamConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_workteam',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._workforceName = config.workforceName;
    this._workteamName = config.workteamName;
    this._memberDefinition = config.memberDefinition;
    this._notificationConfiguration = config.notificationConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: false, required: true
  private _description: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // workforce_name - computed: false, optional: false, required: true
  private _workforceName: string;
  public get workforceName() {
    return this.getStringAttribute('workforce_name');
  }
  public set workforceName(value: string) {
    this._workforceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workforceNameInput() {
    return this._workforceName
  }

  // workteam_name - computed: false, optional: false, required: true
  private _workteamName: string;
  public get workteamName() {
    return this.getStringAttribute('workteam_name');
  }
  public set workteamName(value: string) {
    this._workteamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workteamNameInput() {
    return this._workteamName
  }

  // member_definition - computed: false, optional: false, required: true
  private _memberDefinition: SagemakerWorkteamMemberDefinition[];
  public get memberDefinition() {
    return this.interpolationForAttribute('member_definition') as any;
  }
  public set memberDefinition(value: SagemakerWorkteamMemberDefinition[]) {
    this._memberDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberDefinitionInput() {
    return this._memberDefinition
  }

  // notification_configuration - computed: false, optional: true, required: false
  private _notificationConfiguration?: SagemakerWorkteamNotificationConfiguration[];
  public get notificationConfiguration() {
    return this.interpolationForAttribute('notification_configuration') as any;
  }
  public set notificationConfiguration(value: SagemakerWorkteamNotificationConfiguration[] ) {
    this._notificationConfiguration = value;
  }
  public resetNotificationConfiguration() {
    this._notificationConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigurationInput() {
    return this._notificationConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      workforce_name: cdktf.stringToTerraform(this._workforceName),
      workteam_name: cdktf.stringToTerraform(this._workteamName),
      member_definition: cdktf.listMapper(sagemakerWorkteamMemberDefinitionToTerraform)(this._memberDefinition),
      notification_configuration: cdktf.listMapper(sagemakerWorkteamNotificationConfigurationToTerraform)(this._notificationConfiguration),
    };
  }
}
