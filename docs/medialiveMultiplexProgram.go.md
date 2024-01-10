# `medialiveMultiplexProgram` Submodule <a name="`medialiveMultiplexProgram` Submodule" id="@cdktf/provider-aws.medialiveMultiplexProgram"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveMultiplexProgram <a name="MedialiveMultiplexProgram" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/medialive_multiplex_program aws_medialive_multiplex_program}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/medialivemultiplexprogram"

medialivemultiplexprogram.NewMedialiveMultiplexProgram(scope Construct, id *string, config MedialiveMultiplexProgramConfig) MedialiveMultiplexProgram
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig">MedialiveMultiplexProgramConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig">MedialiveMultiplexProgramConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.putMultiplexProgramSettings">PutMultiplexProgramSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.resetMultiplexProgramSettings">ResetMultiplexProgramSettings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMultiplexProgramSettings` <a name="PutMultiplexProgramSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.putMultiplexProgramSettings"></a>

```go
func PutMultiplexProgramSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.putMultiplexProgramSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMultiplexProgramSettings` <a name="ResetMultiplexProgramSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.resetMultiplexProgramSettings"></a>

```go
func ResetMultiplexProgramSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MedialiveMultiplexProgram resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/medialivemultiplexprogram"

medialivemultiplexprogram.MedialiveMultiplexProgram_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/medialivemultiplexprogram"

medialivemultiplexprogram.MedialiveMultiplexProgram_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/medialivemultiplexprogram"

medialivemultiplexprogram.MedialiveMultiplexProgram_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/medialivemultiplexprogram"

medialivemultiplexprogram.MedialiveMultiplexProgram_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MedialiveMultiplexProgram resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MedialiveMultiplexProgram to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MedialiveMultiplexProgram that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/medialive_multiplex_program#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MedialiveMultiplexProgram to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.multiplexProgramSettings">MultiplexProgramSettings</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList">MedialiveMultiplexProgramMultiplexProgramSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.multiplexIdInput">MultiplexIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.multiplexProgramSettingsInput">MultiplexProgramSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.programNameInput">ProgramNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.multiplexId">MultiplexId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.programName">ProgramName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MultiplexProgramSettings`<sup>Required</sup> <a name="MultiplexProgramSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.multiplexProgramSettings"></a>

```go
func MultiplexProgramSettings() MedialiveMultiplexProgramMultiplexProgramSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList">MedialiveMultiplexProgramMultiplexProgramSettingsList</a>

---

##### `MultiplexIdInput`<sup>Optional</sup> <a name="MultiplexIdInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.multiplexIdInput"></a>

```go
func MultiplexIdInput() *string
```

- *Type:* *string

---

##### `MultiplexProgramSettingsInput`<sup>Optional</sup> <a name="MultiplexProgramSettingsInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.multiplexProgramSettingsInput"></a>

```go
func MultiplexProgramSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `ProgramNameInput`<sup>Optional</sup> <a name="ProgramNameInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.programNameInput"></a>

```go
func ProgramNameInput() *string
```

- *Type:* *string

---

##### `MultiplexId`<sup>Required</sup> <a name="MultiplexId" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.multiplexId"></a>

```go
func MultiplexId() *string
```

- *Type:* *string

---

##### `ProgramName`<sup>Required</sup> <a name="ProgramName" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.programName"></a>

```go
func ProgramName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveMultiplexProgramConfig <a name="MedialiveMultiplexProgramConfig" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/medialivemultiplexprogram"

&medialivemultiplexprogram.MedialiveMultiplexProgramConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MultiplexId: *string,
	ProgramName: *string,
	MultiplexProgramSettings: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.multiplexId">MultiplexId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/medialive_multiplex_program#multiplex_id MedialiveMultiplexProgram#multiplex_id}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.programName">ProgramName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/medialive_multiplex_program#program_name MedialiveMultiplexProgram#program_name}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.multiplexProgramSettings">MultiplexProgramSettings</a></code> | <code>interface{}</code> | multiplex_program_settings block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MultiplexId`<sup>Required</sup> <a name="MultiplexId" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.multiplexId"></a>

```go
MultiplexId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/medialive_multiplex_program#multiplex_id MedialiveMultiplexProgram#multiplex_id}.

---

##### `ProgramName`<sup>Required</sup> <a name="ProgramName" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.programName"></a>

```go
ProgramName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/medialive_multiplex_program#program_name MedialiveMultiplexProgram#program_name}.

---

##### `MultiplexProgramSettings`<sup>Optional</sup> <a name="MultiplexProgramSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.multiplexProgramSettings"></a>

```go
MultiplexProgramSettings interface{}
```

- *Type:* interface{}

multiplex_program_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/medialive_multiplex_program#multiplex_program_settings MedialiveMultiplexProgram#multiplex_program_settings}

---

### MedialiveMultiplexProgramMultiplexProgramSettings <a name="MedialiveMultiplexProgramMultiplexProgramSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/medialivemultiplexprogram"

&medialivemultiplexprogram.MedialiveMultiplexProgramMultiplexProgramSettings {
	PreferredChannelPipeline: *string,
	ProgramNumber: *f64,
	ServiceDescriptor: interface{},
	VideoSettings: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings.property.preferredChannelPipeline">PreferredChannelPipeline</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/medialive_multiplex_program#preferred_channel_pipeline MedialiveMultiplexProgram#preferred_channel_pipeline}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings.property.programNumber">ProgramNumber</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/medialive_multiplex_program#program_number MedialiveMultiplexProgram#program_number}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings.property.serviceDescriptor">ServiceDescriptor</a></code> | <code>interface{}</code> | service_descriptor block. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings.property.videoSettings">VideoSettings</a></code> | <code>interface{}</code> | video_settings block. |

---

##### `PreferredChannelPipeline`<sup>Required</sup> <a name="PreferredChannelPipeline" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings.property.preferredChannelPipeline"></a>

```go
PreferredChannelPipeline *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/medialive_multiplex_program#preferred_channel_pipeline MedialiveMultiplexProgram#preferred_channel_pipeline}.

---

##### `ProgramNumber`<sup>Required</sup> <a name="ProgramNumber" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings.property.programNumber"></a>

```go
ProgramNumber *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/medialive_multiplex_program#program_number MedialiveMultiplexProgram#program_number}.

---

##### `ServiceDescriptor`<sup>Optional</sup> <a name="ServiceDescriptor" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings.property.serviceDescriptor"></a>

```go
ServiceDescriptor interface{}
```

- *Type:* interface{}

service_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/medialive_multiplex_program#service_descriptor MedialiveMultiplexProgram#service_descriptor}

---

##### `VideoSettings`<sup>Optional</sup> <a name="VideoSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings.property.videoSettings"></a>

```go
VideoSettings interface{}
```

- *Type:* interface{}

video_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/medialive_multiplex_program#video_settings MedialiveMultiplexProgram#video_settings}

---

### MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor <a name="MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/medialivemultiplexprogram"

&medialivemultiplexprogram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor {
	ProviderName: *string,
	ServiceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor.property.providerName">ProviderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/medialive_multiplex_program#provider_name MedialiveMultiplexProgram#provider_name}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor.property.serviceName">ServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/medialive_multiplex_program#service_name MedialiveMultiplexProgram#service_name}. |

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor.property.providerName"></a>

```go
ProviderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/medialive_multiplex_program#provider_name MedialiveMultiplexProgram#provider_name}.

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/medialive_multiplex_program#service_name MedialiveMultiplexProgram#service_name}.

---

### MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings <a name="MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/medialivemultiplexprogram"

&medialivemultiplexprogram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings {
	ConstantBitrate: *f64,
	StatmuxSettings: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings.property.constantBitrate">ConstantBitrate</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/medialive_multiplex_program#constant_bitrate MedialiveMultiplexProgram#constant_bitrate}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings.property.statmuxSettings">StatmuxSettings</a></code> | <code>interface{}</code> | statmux_settings block. |

---

##### `ConstantBitrate`<sup>Optional</sup> <a name="ConstantBitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings.property.constantBitrate"></a>

```go
ConstantBitrate *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/medialive_multiplex_program#constant_bitrate MedialiveMultiplexProgram#constant_bitrate}.

---

##### `StatmuxSettings`<sup>Optional</sup> <a name="StatmuxSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings.property.statmuxSettings"></a>

```go
StatmuxSettings interface{}
```

- *Type:* interface{}

statmux_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/medialive_multiplex_program#statmux_settings MedialiveMultiplexProgram#statmux_settings}

---

### MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings <a name="MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/medialivemultiplexprogram"

&medialivemultiplexprogram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings {
	MaximumBitrate: *f64,
	MinimumBitrate: *f64,
	Priority: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.maximumBitrate">MaximumBitrate</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/medialive_multiplex_program#maximum_bitrate MedialiveMultiplexProgram#maximum_bitrate}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.minimumBitrate">MinimumBitrate</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/medialive_multiplex_program#minimum_bitrate MedialiveMultiplexProgram#minimum_bitrate}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/medialive_multiplex_program#priority MedialiveMultiplexProgram#priority}. |

---

##### `MaximumBitrate`<sup>Optional</sup> <a name="MaximumBitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.maximumBitrate"></a>

```go
MaximumBitrate *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/medialive_multiplex_program#maximum_bitrate MedialiveMultiplexProgram#maximum_bitrate}.

---

##### `MinimumBitrate`<sup>Optional</sup> <a name="MinimumBitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.minimumBitrate"></a>

```go
MinimumBitrate *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/medialive_multiplex_program#minimum_bitrate MedialiveMultiplexProgram#minimum_bitrate}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/medialive_multiplex_program#priority MedialiveMultiplexProgram#priority}.

---

## Classes <a name="Classes" id="Classes"></a>

### MedialiveMultiplexProgramMultiplexProgramSettingsList <a name="MedialiveMultiplexProgramMultiplexProgramSettingsList" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/medialivemultiplexprogram"

medialivemultiplexprogram.NewMedialiveMultiplexProgramMultiplexProgramSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MedialiveMultiplexProgramMultiplexProgramSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.get"></a>

```go
func Get(index *f64) MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference <a name="MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/medialivemultiplexprogram"

medialivemultiplexprogram.NewMedialiveMultiplexProgramMultiplexProgramSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.putServiceDescriptor">PutServiceDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.putVideoSettings">PutVideoSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.resetServiceDescriptor">ResetServiceDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.resetVideoSettings">ResetVideoSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServiceDescriptor` <a name="PutServiceDescriptor" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.putServiceDescriptor"></a>

```go
func PutServiceDescriptor(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.putServiceDescriptor.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVideoSettings` <a name="PutVideoSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.putVideoSettings"></a>

```go
func PutVideoSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.putVideoSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetServiceDescriptor` <a name="ResetServiceDescriptor" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.resetServiceDescriptor"></a>

```go
func ResetServiceDescriptor()
```

##### `ResetVideoSettings` <a name="ResetVideoSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.resetVideoSettings"></a>

```go
func ResetVideoSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.serviceDescriptor">ServiceDescriptor</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList">MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.videoSettings">VideoSettings</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.preferredChannelPipelineInput">PreferredChannelPipelineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.programNumberInput">ProgramNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.serviceDescriptorInput">ServiceDescriptorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.videoSettingsInput">VideoSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.preferredChannelPipeline">PreferredChannelPipeline</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.programNumber">ProgramNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceDescriptor`<sup>Required</sup> <a name="ServiceDescriptor" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.serviceDescriptor"></a>

```go
func ServiceDescriptor() MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList">MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList</a>

---

##### `VideoSettings`<sup>Required</sup> <a name="VideoSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.videoSettings"></a>

```go
func VideoSettings() MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList</a>

---

##### `PreferredChannelPipelineInput`<sup>Optional</sup> <a name="PreferredChannelPipelineInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.preferredChannelPipelineInput"></a>

```go
func PreferredChannelPipelineInput() *string
```

- *Type:* *string

---

##### `ProgramNumberInput`<sup>Optional</sup> <a name="ProgramNumberInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.programNumberInput"></a>

```go
func ProgramNumberInput() *f64
```

- *Type:* *f64

---

##### `ServiceDescriptorInput`<sup>Optional</sup> <a name="ServiceDescriptorInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.serviceDescriptorInput"></a>

```go
func ServiceDescriptorInput() interface{}
```

- *Type:* interface{}

---

##### `VideoSettingsInput`<sup>Optional</sup> <a name="VideoSettingsInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.videoSettingsInput"></a>

```go
func VideoSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `PreferredChannelPipeline`<sup>Required</sup> <a name="PreferredChannelPipeline" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.preferredChannelPipeline"></a>

```go
func PreferredChannelPipeline() *string
```

- *Type:* *string

---

##### `ProgramNumber`<sup>Required</sup> <a name="ProgramNumber" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.programNumber"></a>

```go
func ProgramNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList <a name="MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/medialivemultiplexprogram"

medialivemultiplexprogram.NewMedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.get"></a>

```go
func Get(index *f64) MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference <a name="MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/medialivemultiplexprogram"

medialivemultiplexprogram.NewMedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerNameInput">ProviderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerNameInput"></a>

```go
func ProviderNameInput() *string
```

- *Type:* *string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList <a name="MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/medialivemultiplexprogram"

medialivemultiplexprogram.NewMedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.get"></a>

```go
func Get(index *f64) MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference <a name="MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/medialivemultiplexprogram"

medialivemultiplexprogram.NewMedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.putStatmuxSettings">PutStatmuxSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.resetConstantBitrate">ResetConstantBitrate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.resetStatmuxSettings">ResetStatmuxSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStatmuxSettings` <a name="PutStatmuxSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.putStatmuxSettings"></a>

```go
func PutStatmuxSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.putStatmuxSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConstantBitrate` <a name="ResetConstantBitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.resetConstantBitrate"></a>

```go
func ResetConstantBitrate()
```

##### `ResetStatmuxSettings` <a name="ResetStatmuxSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.resetStatmuxSettings"></a>

```go
func ResetStatmuxSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettings">StatmuxSettings</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrateInput">ConstantBitrateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettingsInput">StatmuxSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrate">ConstantBitrate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StatmuxSettings`<sup>Required</sup> <a name="StatmuxSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettings"></a>

```go
func StatmuxSettings() MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList</a>

---

##### `ConstantBitrateInput`<sup>Optional</sup> <a name="ConstantBitrateInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrateInput"></a>

```go
func ConstantBitrateInput() *f64
```

- *Type:* *f64

---

##### `StatmuxSettingsInput`<sup>Optional</sup> <a name="StatmuxSettingsInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettingsInput"></a>

```go
func StatmuxSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `ConstantBitrate`<sup>Required</sup> <a name="ConstantBitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrate"></a>

```go
func ConstantBitrate() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList <a name="MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/medialivemultiplexprogram"

medialivemultiplexprogram.NewMedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.get"></a>

```go
func Get(index *f64) MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference <a name="MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/medialivemultiplexprogram"

medialivemultiplexprogram.NewMedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMaximumBitrate">ResetMaximumBitrate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMinimumBitrate">ResetMinimumBitrate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumBitrate` <a name="ResetMaximumBitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMaximumBitrate"></a>

```go
func ResetMaximumBitrate()
```

##### `ResetMinimumBitrate` <a name="ResetMinimumBitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMinimumBitrate"></a>

```go
func ResetMinimumBitrate()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetPriority"></a>

```go
func ResetPriority()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrateInput">MaximumBitrateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrateInput">MinimumBitrateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrate">MaximumBitrate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrate">MinimumBitrate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumBitrateInput`<sup>Optional</sup> <a name="MaximumBitrateInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrateInput"></a>

```go
func MaximumBitrateInput() *f64
```

- *Type:* *f64

---

##### `MinimumBitrateInput`<sup>Optional</sup> <a name="MinimumBitrateInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrateInput"></a>

```go
func MinimumBitrateInput() *f64
```

- *Type:* *f64

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `MaximumBitrate`<sup>Required</sup> <a name="MaximumBitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrate"></a>

```go
func MaximumBitrate() *f64
```

- *Type:* *f64

---

##### `MinimumBitrate`<sup>Required</sup> <a name="MinimumBitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrate"></a>

```go
func MinimumBitrate() *f64
```

- *Type:* *f64

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



