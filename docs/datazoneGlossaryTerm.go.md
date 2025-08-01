# `datazoneGlossaryTerm` Submodule <a name="`datazoneGlossaryTerm` Submodule" id="@cdktf/provider-aws.datazoneGlossaryTerm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneGlossaryTerm <a name="DatazoneGlossaryTerm" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/datazone_glossary_term aws_datazone_glossary_term}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datazoneglossaryterm"

datazoneglossaryterm.NewDatazoneGlossaryTerm(scope Construct, id *string, config DatazoneGlossaryTermConfig) DatazoneGlossaryTerm
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig">DatazoneGlossaryTermConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig">DatazoneGlossaryTermConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTermRelations">PutTermRelations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetDomainIdentifier">ResetDomainIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetLongDescription">ResetLongDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetShortDescription">ResetShortDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetTermRelations">ResetTermRelations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTermRelations` <a name="PutTermRelations" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTermRelations"></a>

```go
func PutTermRelations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTermRelations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTimeouts"></a>

```go
func PutTimeouts(value DatazoneGlossaryTermTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a>

---

##### `ResetDomainIdentifier` <a name="ResetDomainIdentifier" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetDomainIdentifier"></a>

```go
func ResetDomainIdentifier()
```

##### `ResetLongDescription` <a name="ResetLongDescription" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetLongDescription"></a>

```go
func ResetLongDescription()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetShortDescription` <a name="ResetShortDescription" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetShortDescription"></a>

```go
func ResetShortDescription()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTermRelations` <a name="ResetTermRelations" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetTermRelations"></a>

```go
func ResetTermRelations()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatazoneGlossaryTerm resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datazoneglossaryterm"

datazoneglossaryterm.DatazoneGlossaryTerm_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datazoneglossaryterm"

datazoneglossaryterm.DatazoneGlossaryTerm_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datazoneglossaryterm"

datazoneglossaryterm.DatazoneGlossaryTerm_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datazoneglossaryterm"

datazoneglossaryterm.DatazoneGlossaryTerm_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatazoneGlossaryTerm resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatazoneGlossaryTerm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatazoneGlossaryTerm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/datazone_glossary_term#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatazoneGlossaryTerm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.termRelations">TermRelations</a></code> | <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList">DatazoneGlossaryTermTermRelationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference">DatazoneGlossaryTermTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.domainIdentifierInput">DomainIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.glossaryIdentifierInput">GlossaryIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.longDescriptionInput">LongDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.shortDescriptionInput">ShortDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.termRelationsInput">TermRelationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.domainIdentifier">DomainIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.glossaryIdentifier">GlossaryIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.longDescription">LongDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.shortDescription">ShortDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TermRelations`<sup>Required</sup> <a name="TermRelations" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.termRelations"></a>

```go
func TermRelations() DatazoneGlossaryTermTermRelationsList
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList">DatazoneGlossaryTermTermRelationsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.timeouts"></a>

```go
func Timeouts() DatazoneGlossaryTermTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference">DatazoneGlossaryTermTimeoutsOutputReference</a>

---

##### `DomainIdentifierInput`<sup>Optional</sup> <a name="DomainIdentifierInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.domainIdentifierInput"></a>

```go
func DomainIdentifierInput() *string
```

- *Type:* *string

---

##### `GlossaryIdentifierInput`<sup>Optional</sup> <a name="GlossaryIdentifierInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.glossaryIdentifierInput"></a>

```go
func GlossaryIdentifierInput() *string
```

- *Type:* *string

---

##### `LongDescriptionInput`<sup>Optional</sup> <a name="LongDescriptionInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.longDescriptionInput"></a>

```go
func LongDescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ShortDescriptionInput`<sup>Optional</sup> <a name="ShortDescriptionInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.shortDescriptionInput"></a>

```go
func ShortDescriptionInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TermRelationsInput`<sup>Optional</sup> <a name="TermRelationsInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.termRelationsInput"></a>

```go
func TermRelationsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.domainIdentifier"></a>

```go
func DomainIdentifier() *string
```

- *Type:* *string

---

##### `GlossaryIdentifier`<sup>Required</sup> <a name="GlossaryIdentifier" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.glossaryIdentifier"></a>

```go
func GlossaryIdentifier() *string
```

- *Type:* *string

---

##### `LongDescription`<sup>Required</sup> <a name="LongDescription" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.longDescription"></a>

```go
func LongDescription() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ShortDescription`<sup>Required</sup> <a name="ShortDescription" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.shortDescription"></a>

```go
func ShortDescription() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneGlossaryTermConfig <a name="DatazoneGlossaryTermConfig" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datazoneglossaryterm"

&datazoneglossaryterm.DatazoneGlossaryTermConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GlossaryIdentifier: *string,
	Name: *string,
	DomainIdentifier: *string,
	LongDescription: *string,
	Region: *string,
	ShortDescription: *string,
	Status: *string,
	TermRelations: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.glossaryIdentifier">GlossaryIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/datazone_glossary_term#glossary_identifier DatazoneGlossaryTerm#glossary_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/datazone_glossary_term#name DatazoneGlossaryTerm#name}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.domainIdentifier">DomainIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/datazone_glossary_term#domain_identifier DatazoneGlossaryTerm#domain_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.longDescription">LongDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/datazone_glossary_term#long_description DatazoneGlossaryTerm#long_description}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.shortDescription">ShortDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/datazone_glossary_term#short_description DatazoneGlossaryTerm#short_description}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/datazone_glossary_term#status DatazoneGlossaryTerm#status}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.termRelations">TermRelations</a></code> | <code>interface{}</code> | term_relations block. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GlossaryIdentifier`<sup>Required</sup> <a name="GlossaryIdentifier" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.glossaryIdentifier"></a>

```go
GlossaryIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/datazone_glossary_term#glossary_identifier DatazoneGlossaryTerm#glossary_identifier}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/datazone_glossary_term#name DatazoneGlossaryTerm#name}.

---

##### `DomainIdentifier`<sup>Optional</sup> <a name="DomainIdentifier" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.domainIdentifier"></a>

```go
DomainIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/datazone_glossary_term#domain_identifier DatazoneGlossaryTerm#domain_identifier}.

---

##### `LongDescription`<sup>Optional</sup> <a name="LongDescription" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.longDescription"></a>

```go
LongDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/datazone_glossary_term#long_description DatazoneGlossaryTerm#long_description}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/datazone_glossary_term#region DatazoneGlossaryTerm#region}

---

##### `ShortDescription`<sup>Optional</sup> <a name="ShortDescription" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.shortDescription"></a>

```go
ShortDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/datazone_glossary_term#short_description DatazoneGlossaryTerm#short_description}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/datazone_glossary_term#status DatazoneGlossaryTerm#status}.

---

##### `TermRelations`<sup>Optional</sup> <a name="TermRelations" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.termRelations"></a>

```go
TermRelations interface{}
```

- *Type:* interface{}

term_relations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/datazone_glossary_term#term_relations DatazoneGlossaryTerm#term_relations}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.timeouts"></a>

```go
Timeouts DatazoneGlossaryTermTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/datazone_glossary_term#timeouts DatazoneGlossaryTerm#timeouts}

---

### DatazoneGlossaryTermTermRelations <a name="DatazoneGlossaryTermTermRelations" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datazoneglossaryterm"

&datazoneglossaryterm.DatazoneGlossaryTermTermRelations {
	Classifies: *[]*string,
	IsA: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations.property.classifies">Classifies</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/datazone_glossary_term#classifies DatazoneGlossaryTerm#classifies}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations.property.isA">IsA</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/datazone_glossary_term#is_a DatazoneGlossaryTerm#is_a}. |

---

##### `Classifies`<sup>Optional</sup> <a name="Classifies" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations.property.classifies"></a>

```go
Classifies *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/datazone_glossary_term#classifies DatazoneGlossaryTerm#classifies}.

---

##### `IsA`<sup>Optional</sup> <a name="IsA" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations.property.isA"></a>

```go
IsA *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/datazone_glossary_term#is_a DatazoneGlossaryTerm#is_a}.

---

### DatazoneGlossaryTermTimeouts <a name="DatazoneGlossaryTermTimeouts" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datazoneglossaryterm"

&datazoneglossaryterm.DatazoneGlossaryTermTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/datazone_glossary_term#create DatazoneGlossaryTerm#create}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneGlossaryTermTermRelationsList <a name="DatazoneGlossaryTermTermRelationsList" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datazoneglossaryterm"

datazoneglossaryterm.NewDatazoneGlossaryTermTermRelationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatazoneGlossaryTermTermRelationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.get"></a>

```go
func Get(index *f64) DatazoneGlossaryTermTermRelationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneGlossaryTermTermRelationsOutputReference <a name="DatazoneGlossaryTermTermRelationsOutputReference" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datazoneglossaryterm"

datazoneglossaryterm.NewDatazoneGlossaryTermTermRelationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatazoneGlossaryTermTermRelationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resetClassifies">ResetClassifies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resetIsA">ResetIsA</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClassifies` <a name="ResetClassifies" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resetClassifies"></a>

```go
func ResetClassifies()
```

##### `ResetIsA` <a name="ResetIsA" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resetIsA"></a>

```go
func ResetIsA()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.classifiesInput">ClassifiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.isAInput">IsAInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.classifies">Classifies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.isA">IsA</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClassifiesInput`<sup>Optional</sup> <a name="ClassifiesInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.classifiesInput"></a>

```go
func ClassifiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IsAInput`<sup>Optional</sup> <a name="IsAInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.isAInput"></a>

```go
func IsAInput() *[]*string
```

- *Type:* *[]*string

---

##### `Classifies`<sup>Required</sup> <a name="Classifies" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.classifies"></a>

```go
func Classifies() *[]*string
```

- *Type:* *[]*string

---

##### `IsA`<sup>Required</sup> <a name="IsA" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.isA"></a>

```go
func IsA() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneGlossaryTermTimeoutsOutputReference <a name="DatazoneGlossaryTermTimeoutsOutputReference" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datazoneglossaryterm"

datazoneglossaryterm.NewDatazoneGlossaryTermTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazoneGlossaryTermTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



