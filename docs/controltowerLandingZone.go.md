# `controltowerLandingZone` Submodule <a name="`controltowerLandingZone` Submodule" id="@cdktf/provider-aws.controltowerLandingZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ControltowerLandingZone <a name="ControltowerLandingZone" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/controltower_landing_zone aws_controltower_landing_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/controltowerlandingzone"

controltowerlandingzone.NewControltowerLandingZone(scope Construct, id *string, config ControltowerLandingZoneConfig) ControltowerLandingZone
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig">ControltowerLandingZoneConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig">ControltowerLandingZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.putTimeouts"></a>

```go
func PutTimeouts(value ControltowerLandingZoneTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeouts">ControltowerLandingZoneTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ControltowerLandingZone resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/controltowerlandingzone"

controltowerlandingzone.ControltowerLandingZone_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/controltowerlandingzone"

controltowerlandingzone.ControltowerLandingZone_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/controltowerlandingzone"

controltowerlandingzone.ControltowerLandingZone_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/controltowerlandingzone"

controltowerlandingzone.ControltowerLandingZone_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ControltowerLandingZone resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ControltowerLandingZone to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ControltowerLandingZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/controltower_landing_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ControltowerLandingZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.driftStatus">DriftStatus</a></code> | <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList">ControltowerLandingZoneDriftStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.latestAvailableVersion">LatestAvailableVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference">ControltowerLandingZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.manifestJsonInput">ManifestJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.manifestJson">ManifestJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DriftStatus`<sup>Required</sup> <a name="DriftStatus" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.driftStatus"></a>

```go
func DriftStatus() ControltowerLandingZoneDriftStatusList
```

- *Type:* <a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList">ControltowerLandingZoneDriftStatusList</a>

---

##### `LatestAvailableVersion`<sup>Required</sup> <a name="LatestAvailableVersion" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.latestAvailableVersion"></a>

```go
func LatestAvailableVersion() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.timeouts"></a>

```go
func Timeouts() ControltowerLandingZoneTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference">ControltowerLandingZoneTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManifestJsonInput`<sup>Optional</sup> <a name="ManifestJsonInput" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.manifestJsonInput"></a>

```go
func ManifestJsonInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManifestJson`<sup>Required</sup> <a name="ManifestJson" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.manifestJson"></a>

```go
func ManifestJson() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ControltowerLandingZoneConfig <a name="ControltowerLandingZoneConfig" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/controltowerlandingzone"

&controltowerlandingzone.ControltowerLandingZoneConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManifestJson: *string,
	Version: *string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v19.controltowerLandingZone.ControltowerLandingZoneTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.manifestJson">ManifestJson</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/controltower_landing_zone#manifest_json ControltowerLandingZone#manifest_json}. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/controltower_landing_zone#version ControltowerLandingZone#version}. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/controltower_landing_zone#id ControltowerLandingZone#id}. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/controltower_landing_zone#tags ControltowerLandingZone#tags}. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/controltower_landing_zone#tags_all ControltowerLandingZone#tags_all}. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeouts">ControltowerLandingZoneTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManifestJson`<sup>Required</sup> <a name="ManifestJson" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.manifestJson"></a>

```go
ManifestJson *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/controltower_landing_zone#manifest_json ControltowerLandingZone#manifest_json}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/controltower_landing_zone#version ControltowerLandingZone#version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/controltower_landing_zone#id ControltowerLandingZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/controltower_landing_zone#tags ControltowerLandingZone#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/controltower_landing_zone#tags_all ControltowerLandingZone#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.timeouts"></a>

```go
Timeouts ControltowerLandingZoneTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeouts">ControltowerLandingZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/controltower_landing_zone#timeouts ControltowerLandingZone#timeouts}

---

### ControltowerLandingZoneDriftStatus <a name="ControltowerLandingZoneDriftStatus" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/controltowerlandingzone"

&controltowerlandingzone.ControltowerLandingZoneDriftStatus {

}
```


### ControltowerLandingZoneTimeouts <a name="ControltowerLandingZoneTimeouts" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/controltowerlandingzone"

&controltowerlandingzone.ControltowerLandingZoneTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/controltower_landing_zone#create ControltowerLandingZone#create}. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/controltower_landing_zone#delete ControltowerLandingZone#delete}. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/controltower_landing_zone#update ControltowerLandingZone#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/controltower_landing_zone#create ControltowerLandingZone#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/controltower_landing_zone#delete ControltowerLandingZone#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/controltower_landing_zone#update ControltowerLandingZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ControltowerLandingZoneDriftStatusList <a name="ControltowerLandingZoneDriftStatusList" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/controltowerlandingzone"

controltowerlandingzone.NewControltowerLandingZoneDriftStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ControltowerLandingZoneDriftStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.get"></a>

```go
func Get(index *f64) ControltowerLandingZoneDriftStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ControltowerLandingZoneDriftStatusOutputReference <a name="ControltowerLandingZoneDriftStatusOutputReference" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/controltowerlandingzone"

controltowerlandingzone.NewControltowerLandingZoneDriftStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ControltowerLandingZoneDriftStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatus">ControltowerLandingZoneDriftStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() ControltowerLandingZoneDriftStatus
```

- *Type:* <a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatus">ControltowerLandingZoneDriftStatus</a>

---


### ControltowerLandingZoneTimeoutsOutputReference <a name="ControltowerLandingZoneTimeoutsOutputReference" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/controltowerlandingzone"

controltowerlandingzone.NewControltowerLandingZoneTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ControltowerLandingZoneTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



