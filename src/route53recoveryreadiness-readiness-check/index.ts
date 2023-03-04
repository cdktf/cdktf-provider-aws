// https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53RecoveryreadinessReadinessCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#id Route53RecoveryreadinessReadinessCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#readiness_check_name Route53RecoveryreadinessReadinessCheck#readiness_check_name}
  */
  readonly readinessCheckName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#resource_set_name Route53RecoveryreadinessReadinessCheck#resource_set_name}
  */
  readonly resourceSetName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#tags Route53RecoveryreadinessReadinessCheck#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#tags_all Route53RecoveryreadinessReadinessCheck#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#timeouts Route53RecoveryreadinessReadinessCheck#timeouts}
  */
  readonly timeouts?: Route53RecoveryreadinessReadinessCheckTimeouts;
}
export interface Route53RecoveryreadinessReadinessCheckTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check#delete Route53RecoveryreadinessReadinessCheck#delete}
  */
  readonly delete?: string;
}

export function route53RecoveryreadinessReadinessCheckTimeoutsToTerraform(struct?: Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference | Route53RecoveryreadinessReadinessCheckTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Route53RecoveryreadinessReadinessCheckTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53RecoveryreadinessReadinessCheckTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delete = value.delete;
    }
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check aws_route53recoveryreadiness_readiness_check}
*/
export class Route53RecoveryreadinessReadinessCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_route53recoveryreadiness_readiness_check";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check aws_route53recoveryreadiness_readiness_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53RecoveryreadinessReadinessCheckConfig
  */
  public constructor(scope: Construct, id: string, config: Route53RecoveryreadinessReadinessCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53recoveryreadiness_readiness_check',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._readinessCheckName = config.readinessCheckName;
    this._resourceSetName = config.resourceSetName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // readiness_check_name - computed: false, optional: false, required: true
  private _readinessCheckName?: string; 
  public get readinessCheckName() {
    return this.getStringAttribute('readiness_check_name');
  }
  public set readinessCheckName(value: string) {
    this._readinessCheckName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessCheckNameInput() {
    return this._readinessCheckName;
  }

  // resource_set_name - computed: false, optional: false, required: true
  private _resourceSetName?: string; 
  public get resourceSetName() {
    return this.getStringAttribute('resource_set_name');
  }
  public set resourceSetName(value: string) {
    this._resourceSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetNameInput() {
    return this._resourceSetName;
  }

  // tags - computed: false, optional: true, required: false
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Route53RecoveryreadinessReadinessCheckTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      readiness_check_name: cdktf.stringToTerraform(this._readinessCheckName),
      resource_set_name: cdktf.stringToTerraform(this._resourceSetName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      timeouts: route53RecoveryreadinessReadinessCheckTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
