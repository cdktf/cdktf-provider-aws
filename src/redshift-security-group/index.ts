// https://www.terraform.io/docs/providers/aws/r/redshift_security_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedshiftSecurityGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_security_group#description RedshiftSecurityGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_security_group#id RedshiftSecurityGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_security_group#name RedshiftSecurityGroup#name}
  */
  readonly name: string;
  /**
  * ingress block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_security_group#ingress RedshiftSecurityGroup#ingress}
  */
  readonly ingress: RedshiftSecurityGroupIngress[] | cdktf.IResolvable;
}
export interface RedshiftSecurityGroupIngress {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_security_group#cidr RedshiftSecurityGroup#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_security_group#security_group_name RedshiftSecurityGroup#security_group_name}
  */
  readonly securityGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_security_group#security_group_owner_id RedshiftSecurityGroup#security_group_owner_id}
  */
  readonly securityGroupOwnerId?: string;
}

export function redshiftSecurityGroupIngressToTerraform(struct?: RedshiftSecurityGroupIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    security_group_name: cdktf.stringToTerraform(struct!.securityGroupName),
    security_group_owner_id: cdktf.stringToTerraform(struct!.securityGroupOwnerId),
  }
}

export class RedshiftSecurityGroupIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RedshiftSecurityGroupIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._securityGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupName = this._securityGroupName;
    }
    if (this._securityGroupOwnerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupOwnerId = this._securityGroupOwnerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedshiftSecurityGroupIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._securityGroupName = undefined;
      this._securityGroupOwnerId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._securityGroupName = value.securityGroupName;
      this._securityGroupOwnerId = value.securityGroupOwnerId;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // security_group_name - computed: true, optional: true, required: false
  private _securityGroupName?: string; 
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }
  public set securityGroupName(value: string) {
    this._securityGroupName = value;
  }
  public resetSecurityGroupName() {
    this._securityGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupNameInput() {
    return this._securityGroupName;
  }

  // security_group_owner_id - computed: true, optional: true, required: false
  private _securityGroupOwnerId?: string; 
  public get securityGroupOwnerId() {
    return this.getStringAttribute('security_group_owner_id');
  }
  public set securityGroupOwnerId(value: string) {
    this._securityGroupOwnerId = value;
  }
  public resetSecurityGroupOwnerId() {
    this._securityGroupOwnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupOwnerIdInput() {
    return this._securityGroupOwnerId;
  }
}

export class RedshiftSecurityGroupIngressList extends cdktf.ComplexList {
  public internalValue? : RedshiftSecurityGroupIngress[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RedshiftSecurityGroupIngressOutputReference {
    return new RedshiftSecurityGroupIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_security_group aws_redshift_security_group}
*/
export class RedshiftSecurityGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_redshift_security_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_security_group aws_redshift_security_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedshiftSecurityGroupConfig
  */
  public constructor(scope: Construct, id: string, config: RedshiftSecurityGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_security_group',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._ingress.internalValue = config.ingress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // ingress - computed: false, optional: false, required: true
  private _ingress = new RedshiftSecurityGroupIngressList(this, "ingress", true);
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: RedshiftSecurityGroupIngress[] | cdktf.IResolvable) {
    this._ingress.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      ingress: cdktf.listMapper(redshiftSecurityGroupIngressToTerraform, true)(this._ingress.internalValue),
    };
  }
}
