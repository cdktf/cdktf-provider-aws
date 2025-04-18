# `vpcBlockPublicAccessExclusion` Submodule <a name="`vpcBlockPublicAccessExclusion` Submodule" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcBlockPublicAccessExclusion <a name="VpcBlockPublicAccessExclusion" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpc_block_public_access_exclusion aws_vpc_block_public_access_exclusion}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpcblockpublicaccessexclusion"

vpcblockpublicaccessexclusion.NewVpcBlockPublicAccessExclusion(scope Construct, id *string, config VpcBlockPublicAccessExclusionConfig) VpcBlockPublicAccessExclusion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig">VpcBlockPublicAccessExclusionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig">VpcBlockPublicAccessExclusionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.putTimeouts"></a>

```go
func PutTimeouts(value VpcBlockPublicAccessExclusionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts">VpcBlockPublicAccessExclusionTimeouts</a>

---

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetVpcId"></a>

```go
func ResetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpcBlockPublicAccessExclusion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpcblockpublicaccessexclusion"

vpcblockpublicaccessexclusion.VpcBlockPublicAccessExclusion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpcblockpublicaccessexclusion"

vpcblockpublicaccessexclusion.VpcBlockPublicAccessExclusion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpcblockpublicaccessexclusion"

vpcblockpublicaccessexclusion.VpcBlockPublicAccessExclusion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpcblockpublicaccessexclusion"

vpcblockpublicaccessexclusion.VpcBlockPublicAccessExclusion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VpcBlockPublicAccessExclusion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VpcBlockPublicAccessExclusion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VpcBlockPublicAccessExclusion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpc_block_public_access_exclusion#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VpcBlockPublicAccessExclusion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference">VpcBlockPublicAccessExclusionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.internetGatewayExclusionModeInput">InternetGatewayExclusionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.internetGatewayExclusionMode">InternetGatewayExclusionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.timeouts"></a>

```go
func Timeouts() VpcBlockPublicAccessExclusionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference">VpcBlockPublicAccessExclusionTimeoutsOutputReference</a>

---

##### `InternetGatewayExclusionModeInput`<sup>Optional</sup> <a name="InternetGatewayExclusionModeInput" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.internetGatewayExclusionModeInput"></a>

```go
func InternetGatewayExclusionModeInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `InternetGatewayExclusionMode`<sup>Required</sup> <a name="InternetGatewayExclusionMode" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.internetGatewayExclusionMode"></a>

```go
func InternetGatewayExclusionMode() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcBlockPublicAccessExclusionConfig <a name="VpcBlockPublicAccessExclusionConfig" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpcblockpublicaccessexclusion"

&vpcblockpublicaccessexclusion.VpcBlockPublicAccessExclusionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InternetGatewayExclusionMode: *string,
	SubnetId: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v19.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts,
	VpcId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.internetGatewayExclusionMode">InternetGatewayExclusionMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpc_block_public_access_exclusion#internet_gateway_exclusion_mode VpcBlockPublicAccessExclusion#internet_gateway_exclusion_mode}. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpc_block_public_access_exclusion#subnet_id VpcBlockPublicAccessExclusion#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpc_block_public_access_exclusion#tags VpcBlockPublicAccessExclusion#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts">VpcBlockPublicAccessExclusionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpc_block_public_access_exclusion#vpc_id VpcBlockPublicAccessExclusion#vpc_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InternetGatewayExclusionMode`<sup>Required</sup> <a name="InternetGatewayExclusionMode" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.internetGatewayExclusionMode"></a>

```go
InternetGatewayExclusionMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpc_block_public_access_exclusion#internet_gateway_exclusion_mode VpcBlockPublicAccessExclusion#internet_gateway_exclusion_mode}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpc_block_public_access_exclusion#subnet_id VpcBlockPublicAccessExclusion#subnet_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpc_block_public_access_exclusion#tags VpcBlockPublicAccessExclusion#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.timeouts"></a>

```go
Timeouts VpcBlockPublicAccessExclusionTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts">VpcBlockPublicAccessExclusionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpc_block_public_access_exclusion#timeouts VpcBlockPublicAccessExclusion#timeouts}

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpc_block_public_access_exclusion#vpc_id VpcBlockPublicAccessExclusion#vpc_id}.

---

### VpcBlockPublicAccessExclusionTimeouts <a name="VpcBlockPublicAccessExclusionTimeouts" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpcblockpublicaccessexclusion"

&vpcblockpublicaccessexclusion.VpcBlockPublicAccessExclusionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpc_block_public_access_exclusion#create VpcBlockPublicAccessExclusion#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpc_block_public_access_exclusion#delete VpcBlockPublicAccessExclusion#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/vpc_block_public_access_exclusion#update VpcBlockPublicAccessExclusion#update}

---

## Classes <a name="Classes" id="Classes"></a>

### VpcBlockPublicAccessExclusionTimeoutsOutputReference <a name="VpcBlockPublicAccessExclusionTimeoutsOutputReference" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/vpcblockpublicaccessexclusion"

vpcblockpublicaccessexclusion.NewVpcBlockPublicAccessExclusionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpcBlockPublicAccessExclusionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



