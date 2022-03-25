// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Backup
*/
export interface DataAwsBackupFrameworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_framework#name DataAwsBackupFramework#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_framework#tags DataAwsBackupFramework#tags}
  */
  readonly tags?: { [key: string]: string };
}
export class DataAwsBackupFrameworkControlInputParameter extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataAwsBackupFrameworkControlScope extends cdktf.ComplexComputedList {

  // compliance_resource_ids - computed: true, optional: false, required: false
  public get complianceResourceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('compliance_resource_ids'));
  }

  // compliance_resource_types - computed: true, optional: false, required: false
  public get complianceResourceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('compliance_resource_types'));
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
}
export class DataAwsBackupFrameworkControl extends cdktf.ComplexComputedList {

  // input_parameter - computed: true, optional: false, required: false
  public get inputParameter() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('input_parameter')));
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('scope');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/backup_framework aws_backup_framework}
*/
export class DataAwsBackupFramework extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_backup_framework";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/backup_framework aws_backup_framework} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsBackupFrameworkConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsBackupFrameworkConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_backup_framework',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // control - computed: true, optional: false, required: false
  public control(index: string) {
    return new DataAwsBackupFrameworkControl(this, 'control', index, true);
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // deployment_status - computed: true, optional: false, required: false
  public get deploymentStatus() {
    return this.getStringAttribute('deployment_status');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }
}
