# `finspaceKxVolume` Submodule <a name="`finspaceKxVolume` Submodule" id="@cdktf/provider-aws.finspaceKxVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FinspaceKxVolume <a name="FinspaceKxVolume" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume aws_finspace_kx_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/finspacekxvolume"

finspacekxvolume.NewFinspaceKxVolume(scope Construct, id *string, config FinspaceKxVolumeConfig) FinspaceKxVolume
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig">FinspaceKxVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig">FinspaceKxVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.putNas1Configuration">PutNas1Configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetNas1Configuration">ResetNas1Configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNas1Configuration` <a name="PutNas1Configuration" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.putNas1Configuration"></a>

```go
func PutNas1Configuration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.putNas1Configuration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.putTimeouts"></a>

```go
func PutTimeouts(value FinspaceKxVolumeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts">FinspaceKxVolumeTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetId"></a>

```go
func ResetId()
```

##### `ResetNas1Configuration` <a name="ResetNas1Configuration" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetNas1Configuration"></a>

```go
func ResetNas1Configuration()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FinspaceKxVolume resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/finspacekxvolume"

finspacekxvolume.FinspaceKxVolume_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/finspacekxvolume"

finspacekxvolume.FinspaceKxVolume_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/finspacekxvolume"

finspacekxvolume.FinspaceKxVolume_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/finspacekxvolume"

finspacekxvolume.FinspaceKxVolume_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a FinspaceKxVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FinspaceKxVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FinspaceKxVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the FinspaceKxVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.attachedClusters">AttachedClusters</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList">FinspaceKxVolumeAttachedClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.createdTimestamp">CreatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.lastModifiedTimestamp">LastModifiedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.nas1Configuration">Nas1Configuration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList">FinspaceKxVolumeNas1ConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.statusReason">StatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference">FinspaceKxVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.availabilityZonesInput">AvailabilityZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.azModeInput">AzModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.environmentIdInput">EnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.nas1ConfigurationInput">Nas1ConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.azMode">AzMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.environmentId">EnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AttachedClusters`<sup>Required</sup> <a name="AttachedClusters" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.attachedClusters"></a>

```go
func AttachedClusters() FinspaceKxVolumeAttachedClustersList
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList">FinspaceKxVolumeAttachedClustersList</a>

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.createdTimestamp"></a>

```go
func CreatedTimestamp() *string
```

- *Type:* *string

---

##### `LastModifiedTimestamp`<sup>Required</sup> <a name="LastModifiedTimestamp" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.lastModifiedTimestamp"></a>

```go
func LastModifiedTimestamp() *string
```

- *Type:* *string

---

##### `Nas1Configuration`<sup>Required</sup> <a name="Nas1Configuration" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.nas1Configuration"></a>

```go
func Nas1Configuration() FinspaceKxVolumeNas1ConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList">FinspaceKxVolumeNas1ConfigurationList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.statusReason"></a>

```go
func StatusReason() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.timeouts"></a>

```go
func Timeouts() FinspaceKxVolumeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference">FinspaceKxVolumeTimeoutsOutputReference</a>

---

##### `AvailabilityZonesInput`<sup>Optional</sup> <a name="AvailabilityZonesInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.availabilityZonesInput"></a>

```go
func AvailabilityZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AzModeInput`<sup>Optional</sup> <a name="AzModeInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.azModeInput"></a>

```go
func AzModeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnvironmentIdInput`<sup>Optional</sup> <a name="EnvironmentIdInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.environmentIdInput"></a>

```go
func EnvironmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Nas1ConfigurationInput`<sup>Optional</sup> <a name="Nas1ConfigurationInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.nas1ConfigurationInput"></a>

```go
func Nas1ConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.availabilityZones"></a>

```go
func AvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `AzMode`<sup>Required</sup> <a name="AzMode" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.azMode"></a>

```go
func AzMode() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.environmentId"></a>

```go
func EnvironmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FinspaceKxVolumeAttachedClusters <a name="FinspaceKxVolumeAttachedClusters" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClusters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/finspacekxvolume"

&finspacekxvolume.FinspaceKxVolumeAttachedClusters {

}
```


### FinspaceKxVolumeConfig <a name="FinspaceKxVolumeConfig" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/finspacekxvolume"

&finspacekxvolume.FinspaceKxVolumeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AvailabilityZones: *[]*string,
	AzMode: *string,
	EnvironmentId: *string,
	Name: *string,
	Type: *string,
	Description: *string,
	Id: *string,
	Nas1Configuration: interface{},
	Region: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.finspaceKxVolume.FinspaceKxVolumeTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#availability_zones FinspaceKxVolume#availability_zones}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.azMode">AzMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#az_mode FinspaceKxVolume#az_mode}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.environmentId">EnvironmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#environment_id FinspaceKxVolume#environment_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#name FinspaceKxVolume#name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#type FinspaceKxVolume#type}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#description FinspaceKxVolume#description}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#id FinspaceKxVolume#id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.nas1Configuration">Nas1Configuration</a></code> | <code>interface{}</code> | nas1_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#tags FinspaceKxVolume#tags}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#tags_all FinspaceKxVolume#tags_all}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts">FinspaceKxVolumeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.availabilityZones"></a>

```go
AvailabilityZones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#availability_zones FinspaceKxVolume#availability_zones}.

---

##### `AzMode`<sup>Required</sup> <a name="AzMode" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.azMode"></a>

```go
AzMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#az_mode FinspaceKxVolume#az_mode}.

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.environmentId"></a>

```go
EnvironmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#environment_id FinspaceKxVolume#environment_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#name FinspaceKxVolume#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#type FinspaceKxVolume#type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#description FinspaceKxVolume#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#id FinspaceKxVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Nas1Configuration`<sup>Optional</sup> <a name="Nas1Configuration" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.nas1Configuration"></a>

```go
Nas1Configuration interface{}
```

- *Type:* interface{}

nas1_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#nas1_configuration FinspaceKxVolume#nas1_configuration}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#region FinspaceKxVolume#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#tags FinspaceKxVolume#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#tags_all FinspaceKxVolume#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.timeouts"></a>

```go
Timeouts FinspaceKxVolumeTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts">FinspaceKxVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#timeouts FinspaceKxVolume#timeouts}

---

### FinspaceKxVolumeNas1Configuration <a name="FinspaceKxVolumeNas1Configuration" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/finspacekxvolume"

&finspacekxvolume.FinspaceKxVolumeNas1Configuration {
	Size: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration.property.size">Size</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#size FinspaceKxVolume#size}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#type FinspaceKxVolume#type}. |

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#size FinspaceKxVolume#size}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#type FinspaceKxVolume#type}.

---

### FinspaceKxVolumeTimeouts <a name="FinspaceKxVolumeTimeouts" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/finspacekxvolume"

&finspacekxvolume.FinspaceKxVolumeTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#create FinspaceKxVolume#create}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#delete FinspaceKxVolume#delete}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#update FinspaceKxVolume#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#create FinspaceKxVolume#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#delete FinspaceKxVolume#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/finspace_kx_volume#update FinspaceKxVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FinspaceKxVolumeAttachedClustersList <a name="FinspaceKxVolumeAttachedClustersList" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/finspacekxvolume"

finspacekxvolume.NewFinspaceKxVolumeAttachedClustersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FinspaceKxVolumeAttachedClustersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.get"></a>

```go
func Get(index *f64) FinspaceKxVolumeAttachedClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FinspaceKxVolumeAttachedClustersOutputReference <a name="FinspaceKxVolumeAttachedClustersOutputReference" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/finspacekxvolume"

finspacekxvolume.NewFinspaceKxVolumeAttachedClustersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FinspaceKxVolumeAttachedClustersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.clusterStatus">ClusterStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.clusterType">ClusterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClusters">FinspaceKxVolumeAttachedClusters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `ClusterStatus`<sup>Required</sup> <a name="ClusterStatus" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.clusterStatus"></a>

```go
func ClusterStatus() *string
```

- *Type:* *string

---

##### `ClusterType`<sup>Required</sup> <a name="ClusterType" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.clusterType"></a>

```go
func ClusterType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.internalValue"></a>

```go
func InternalValue() FinspaceKxVolumeAttachedClusters
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClusters">FinspaceKxVolumeAttachedClusters</a>

---


### FinspaceKxVolumeNas1ConfigurationList <a name="FinspaceKxVolumeNas1ConfigurationList" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/finspacekxvolume"

finspacekxvolume.NewFinspaceKxVolumeNas1ConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FinspaceKxVolumeNas1ConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.get"></a>

```go
func Get(index *f64) FinspaceKxVolumeNas1ConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FinspaceKxVolumeNas1ConfigurationOutputReference <a name="FinspaceKxVolumeNas1ConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/finspacekxvolume"

finspacekxvolume.NewFinspaceKxVolumeNas1ConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FinspaceKxVolumeNas1ConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FinspaceKxVolumeTimeoutsOutputReference <a name="FinspaceKxVolumeTimeoutsOutputReference" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/finspacekxvolume"

finspacekxvolume.NewFinspaceKxVolumeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FinspaceKxVolumeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



