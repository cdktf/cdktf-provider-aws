# `vpcSecurityGroupVpcAssociation` Submodule <a name="`vpcSecurityGroupVpcAssociation` Submodule" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcSecurityGroupVpcAssociation <a name="VpcSecurityGroupVpcAssociation" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/vpc_security_group_vpc_association aws_vpc_security_group_vpc_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpcsecuritygroupvpcassociation"

vpcsecuritygroupvpcassociation.NewVpcSecurityGroupVpcAssociation(scope Construct, id *string, config VpcSecurityGroupVpcAssociationConfig) VpcSecurityGroupVpcAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig">VpcSecurityGroupVpcAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig">VpcSecurityGroupVpcAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.putTimeouts"></a>

```go
func PutTimeouts(value VpcSecurityGroupVpcAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeouts">VpcSecurityGroupVpcAssociationTimeouts</a>

---

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpcSecurityGroupVpcAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpcsecuritygroupvpcassociation"

vpcsecuritygroupvpcassociation.VpcSecurityGroupVpcAssociation_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpcsecuritygroupvpcassociation"

vpcsecuritygroupvpcassociation.VpcSecurityGroupVpcAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpcsecuritygroupvpcassociation"

vpcsecuritygroupvpcassociation.VpcSecurityGroupVpcAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpcsecuritygroupvpcassociation"

vpcsecuritygroupvpcassociation.VpcSecurityGroupVpcAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VpcSecurityGroupVpcAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VpcSecurityGroupVpcAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VpcSecurityGroupVpcAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/vpc_security_group_vpc_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VpcSecurityGroupVpcAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference">VpcSecurityGroupVpcAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.securityGroupIdInput">SecurityGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.securityGroupId">SecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.timeouts"></a>

```go
func Timeouts() VpcSecurityGroupVpcAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference">VpcSecurityGroupVpcAssociationTimeoutsOutputReference</a>

---

##### `SecurityGroupIdInput`<sup>Optional</sup> <a name="SecurityGroupIdInput" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.securityGroupIdInput"></a>

```go
func SecurityGroupIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.securityGroupId"></a>

```go
func SecurityGroupId() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcSecurityGroupVpcAssociationConfig <a name="VpcSecurityGroupVpcAssociationConfig" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpcsecuritygroupvpcassociation"

&vpcsecuritygroupvpcassociation.VpcSecurityGroupVpcAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SecurityGroupId: *string,
	VpcId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v19.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.securityGroupId">SecurityGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/vpc_security_group_vpc_association#security_group_id VpcSecurityGroupVpcAssociation#security_group_id}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/vpc_security_group_vpc_association#vpc_id VpcSecurityGroupVpcAssociation#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeouts">VpcSecurityGroupVpcAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.securityGroupId"></a>

```go
SecurityGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/vpc_security_group_vpc_association#security_group_id VpcSecurityGroupVpcAssociation#security_group_id}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/vpc_security_group_vpc_association#vpc_id VpcSecurityGroupVpcAssociation#vpc_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationConfig.property.timeouts"></a>

```go
Timeouts VpcSecurityGroupVpcAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeouts">VpcSecurityGroupVpcAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/vpc_security_group_vpc_association#timeouts VpcSecurityGroupVpcAssociation#timeouts}

---

### VpcSecurityGroupVpcAssociationTimeouts <a name="VpcSecurityGroupVpcAssociationTimeouts" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpcsecuritygroupvpcassociation"

&vpcsecuritygroupvpcassociation.VpcSecurityGroupVpcAssociationTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/vpc_security_group_vpc_association#create VpcSecurityGroupVpcAssociation#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/vpc_security_group_vpc_association#delete VpcSecurityGroupVpcAssociation#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### VpcSecurityGroupVpcAssociationTimeoutsOutputReference <a name="VpcSecurityGroupVpcAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpcsecuritygroupvpcassociation"

vpcsecuritygroupvpcassociation.NewVpcSecurityGroupVpcAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpcSecurityGroupVpcAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcSecurityGroupVpcAssociation.VpcSecurityGroupVpcAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



