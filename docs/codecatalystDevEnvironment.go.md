# `codecatalystDevEnvironment` Submodule <a name="`codecatalystDevEnvironment` Submodule" id="@cdktf/provider-aws.codecatalystDevEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodecatalystDevEnvironment <a name="CodecatalystDevEnvironment" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment aws_codecatalyst_dev_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codecatalystdevenvironment"

codecatalystdevenvironment.NewCodecatalystDevEnvironment(scope Construct, id *string, config CodecatalystDevEnvironmentConfig) CodecatalystDevEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig">CodecatalystDevEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig">CodecatalystDevEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putIdes">PutIdes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putPersistentStorage">PutPersistentStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putRepositories">PutRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetInactivityTimeoutMinutes">ResetInactivityTimeoutMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetRepositories">ResetRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdes` <a name="PutIdes" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putIdes"></a>

```go
func PutIdes(value CodecatalystDevEnvironmentIdes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putIdes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes">CodecatalystDevEnvironmentIdes</a>

---

##### `PutPersistentStorage` <a name="PutPersistentStorage" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putPersistentStorage"></a>

```go
func PutPersistentStorage(value CodecatalystDevEnvironmentPersistentStorage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putPersistentStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage">CodecatalystDevEnvironmentPersistentStorage</a>

---

##### `PutRepositories` <a name="PutRepositories" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putRepositories"></a>

```go
func PutRepositories(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putRepositories.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putTimeouts"></a>

```go
func PutTimeouts(value CodecatalystDevEnvironmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts">CodecatalystDevEnvironmentTimeouts</a>

---

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetId"></a>

```go
func ResetId()
```

##### `ResetInactivityTimeoutMinutes` <a name="ResetInactivityTimeoutMinutes" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetInactivityTimeoutMinutes"></a>

```go
func ResetInactivityTimeoutMinutes()
```

##### `ResetRepositories` <a name="ResetRepositories" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetRepositories"></a>

```go
func ResetRepositories()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CodecatalystDevEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codecatalystdevenvironment"

codecatalystdevenvironment.CodecatalystDevEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codecatalystdevenvironment"

codecatalystdevenvironment.CodecatalystDevEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codecatalystdevenvironment"

codecatalystdevenvironment.CodecatalystDevEnvironment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codecatalystdevenvironment"

codecatalystdevenvironment.CodecatalystDevEnvironment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CodecatalystDevEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CodecatalystDevEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CodecatalystDevEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CodecatalystDevEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.ides">Ides</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference">CodecatalystDevEnvironmentIdesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.persistentStorage">PersistentStorage</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference">CodecatalystDevEnvironmentPersistentStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.repositories">Repositories</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList">CodecatalystDevEnvironmentRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference">CodecatalystDevEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.idesInput">IdesInput</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes">CodecatalystDevEnvironmentIdes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.inactivityTimeoutMinutesInput">InactivityTimeoutMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.persistentStorageInput">PersistentStorageInput</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage">CodecatalystDevEnvironmentPersistentStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.projectNameInput">ProjectNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.repositoriesInput">RepositoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.spaceNameInput">SpaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.inactivityTimeoutMinutes">InactivityTimeoutMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.projectName">ProjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.spaceName">SpaceName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Ides`<sup>Required</sup> <a name="Ides" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.ides"></a>

```go
func Ides() CodecatalystDevEnvironmentIdesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference">CodecatalystDevEnvironmentIdesOutputReference</a>

---

##### `PersistentStorage`<sup>Required</sup> <a name="PersistentStorage" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.persistentStorage"></a>

```go
func PersistentStorage() CodecatalystDevEnvironmentPersistentStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference">CodecatalystDevEnvironmentPersistentStorageOutputReference</a>

---

##### `Repositories`<sup>Required</sup> <a name="Repositories" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.repositories"></a>

```go
func Repositories() CodecatalystDevEnvironmentRepositoriesList
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList">CodecatalystDevEnvironmentRepositoriesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.timeouts"></a>

```go
func Timeouts() CodecatalystDevEnvironmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference">CodecatalystDevEnvironmentTimeoutsOutputReference</a>

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `IdesInput`<sup>Optional</sup> <a name="IdesInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.idesInput"></a>

```go
func IdesInput() CodecatalystDevEnvironmentIdes
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes">CodecatalystDevEnvironmentIdes</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InactivityTimeoutMinutesInput`<sup>Optional</sup> <a name="InactivityTimeoutMinutesInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.inactivityTimeoutMinutesInput"></a>

```go
func InactivityTimeoutMinutesInput() *f64
```

- *Type:* *f64

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `PersistentStorageInput`<sup>Optional</sup> <a name="PersistentStorageInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.persistentStorageInput"></a>

```go
func PersistentStorageInput() CodecatalystDevEnvironmentPersistentStorage
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage">CodecatalystDevEnvironmentPersistentStorage</a>

---

##### `ProjectNameInput`<sup>Optional</sup> <a name="ProjectNameInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.projectNameInput"></a>

```go
func ProjectNameInput() *string
```

- *Type:* *string

---

##### `RepositoriesInput`<sup>Optional</sup> <a name="RepositoriesInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.repositoriesInput"></a>

```go
func RepositoriesInput() interface{}
```

- *Type:* interface{}

---

##### `SpaceNameInput`<sup>Optional</sup> <a name="SpaceNameInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.spaceNameInput"></a>

```go
func SpaceNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InactivityTimeoutMinutes`<sup>Required</sup> <a name="InactivityTimeoutMinutes" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.inactivityTimeoutMinutes"></a>

```go
func InactivityTimeoutMinutes() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.projectName"></a>

```go
func ProjectName() *string
```

- *Type:* *string

---

##### `SpaceName`<sup>Required</sup> <a name="SpaceName" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.spaceName"></a>

```go
func SpaceName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CodecatalystDevEnvironmentConfig <a name="CodecatalystDevEnvironmentConfig" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codecatalystdevenvironment"

&codecatalystdevenvironment.CodecatalystDevEnvironmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Ides: github.com/cdktf/cdktf-provider-aws-go/aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes,
	InstanceType: *string,
	PersistentStorage: github.com/cdktf/cdktf-provider-aws-go/aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage,
	ProjectName: *string,
	SpaceName: *string,
	Alias: *string,
	Id: *string,
	InactivityTimeoutMinutes: *f64,
	Repositories: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.ides">Ides</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes">CodecatalystDevEnvironmentIdes</a></code> | ides block. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#instance_type CodecatalystDevEnvironment#instance_type}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.persistentStorage">PersistentStorage</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage">CodecatalystDevEnvironmentPersistentStorage</a></code> | persistent_storage block. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.projectName">ProjectName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#project_name CodecatalystDevEnvironment#project_name}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.spaceName">SpaceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#space_name CodecatalystDevEnvironment#space_name}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.alias">Alias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#alias CodecatalystDevEnvironment#alias}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#id CodecatalystDevEnvironment#id}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.inactivityTimeoutMinutes">InactivityTimeoutMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#inactivity_timeout_minutes CodecatalystDevEnvironment#inactivity_timeout_minutes}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.repositories">Repositories</a></code> | <code>interface{}</code> | repositories block. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts">CodecatalystDevEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Ides`<sup>Required</sup> <a name="Ides" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.ides"></a>

```go
Ides CodecatalystDevEnvironmentIdes
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes">CodecatalystDevEnvironmentIdes</a>

ides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#ides CodecatalystDevEnvironment#ides}

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#instance_type CodecatalystDevEnvironment#instance_type}.

---

##### `PersistentStorage`<sup>Required</sup> <a name="PersistentStorage" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.persistentStorage"></a>

```go
PersistentStorage CodecatalystDevEnvironmentPersistentStorage
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage">CodecatalystDevEnvironmentPersistentStorage</a>

persistent_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#persistent_storage CodecatalystDevEnvironment#persistent_storage}

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.projectName"></a>

```go
ProjectName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#project_name CodecatalystDevEnvironment#project_name}.

---

##### `SpaceName`<sup>Required</sup> <a name="SpaceName" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.spaceName"></a>

```go
SpaceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#space_name CodecatalystDevEnvironment#space_name}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#alias CodecatalystDevEnvironment#alias}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#id CodecatalystDevEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InactivityTimeoutMinutes`<sup>Optional</sup> <a name="InactivityTimeoutMinutes" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.inactivityTimeoutMinutes"></a>

```go
InactivityTimeoutMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#inactivity_timeout_minutes CodecatalystDevEnvironment#inactivity_timeout_minutes}.

---

##### `Repositories`<sup>Optional</sup> <a name="Repositories" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.repositories"></a>

```go
Repositories interface{}
```

- *Type:* interface{}

repositories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#repositories CodecatalystDevEnvironment#repositories}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.timeouts"></a>

```go
Timeouts CodecatalystDevEnvironmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts">CodecatalystDevEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#timeouts CodecatalystDevEnvironment#timeouts}

---

### CodecatalystDevEnvironmentIdes <a name="CodecatalystDevEnvironmentIdes" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codecatalystdevenvironment"

&codecatalystdevenvironment.CodecatalystDevEnvironmentIdes {
	Name: *string,
	Runtime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#name CodecatalystDevEnvironment#name}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes.property.runtime">Runtime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#runtime CodecatalystDevEnvironment#runtime}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#name CodecatalystDevEnvironment#name}.

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes.property.runtime"></a>

```go
Runtime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#runtime CodecatalystDevEnvironment#runtime}.

---

### CodecatalystDevEnvironmentPersistentStorage <a name="CodecatalystDevEnvironmentPersistentStorage" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codecatalystdevenvironment"

&codecatalystdevenvironment.CodecatalystDevEnvironmentPersistentStorage {
	Size: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage.property.size">Size</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#size CodecatalystDevEnvironment#size}. |

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#size CodecatalystDevEnvironment#size}.

---

### CodecatalystDevEnvironmentRepositories <a name="CodecatalystDevEnvironmentRepositories" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codecatalystdevenvironment"

&codecatalystdevenvironment.CodecatalystDevEnvironmentRepositories {
	RepositoryName: *string,
	BranchName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories.property.repositoryName">RepositoryName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#repository_name CodecatalystDevEnvironment#repository_name}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories.property.branchName">BranchName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#branch_name CodecatalystDevEnvironment#branch_name}. |

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories.property.repositoryName"></a>

```go
RepositoryName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#repository_name CodecatalystDevEnvironment#repository_name}.

---

##### `BranchName`<sup>Optional</sup> <a name="BranchName" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories.property.branchName"></a>

```go
BranchName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#branch_name CodecatalystDevEnvironment#branch_name}.

---

### CodecatalystDevEnvironmentTimeouts <a name="CodecatalystDevEnvironmentTimeouts" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codecatalystdevenvironment"

&codecatalystdevenvironment.CodecatalystDevEnvironmentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#create CodecatalystDevEnvironment#create}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#delete CodecatalystDevEnvironment#delete}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#update CodecatalystDevEnvironment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#create CodecatalystDevEnvironment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#delete CodecatalystDevEnvironment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/codecatalyst_dev_environment#update CodecatalystDevEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodecatalystDevEnvironmentIdesOutputReference <a name="CodecatalystDevEnvironmentIdesOutputReference" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codecatalystdevenvironment"

codecatalystdevenvironment.NewCodecatalystDevEnvironmentIdesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodecatalystDevEnvironmentIdesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.resetRuntime">ResetRuntime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.resetRuntime"></a>

```go
func ResetRuntime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.runtimeInput">RuntimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.runtime">Runtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes">CodecatalystDevEnvironmentIdes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.runtimeInput"></a>

```go
func RuntimeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.runtime"></a>

```go
func Runtime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.internalValue"></a>

```go
func InternalValue() CodecatalystDevEnvironmentIdes
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes">CodecatalystDevEnvironmentIdes</a>

---


### CodecatalystDevEnvironmentPersistentStorageOutputReference <a name="CodecatalystDevEnvironmentPersistentStorageOutputReference" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codecatalystdevenvironment"

codecatalystdevenvironment.NewCodecatalystDevEnvironmentPersistentStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodecatalystDevEnvironmentPersistentStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage">CodecatalystDevEnvironmentPersistentStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() CodecatalystDevEnvironmentPersistentStorage
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage">CodecatalystDevEnvironmentPersistentStorage</a>

---


### CodecatalystDevEnvironmentRepositoriesList <a name="CodecatalystDevEnvironmentRepositoriesList" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codecatalystdevenvironment"

codecatalystdevenvironment.NewCodecatalystDevEnvironmentRepositoriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodecatalystDevEnvironmentRepositoriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.get"></a>

```go
func Get(index *f64) CodecatalystDevEnvironmentRepositoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodecatalystDevEnvironmentRepositoriesOutputReference <a name="CodecatalystDevEnvironmentRepositoriesOutputReference" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codecatalystdevenvironment"

codecatalystdevenvironment.NewCodecatalystDevEnvironmentRepositoriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodecatalystDevEnvironmentRepositoriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.resetBranchName">ResetBranchName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranchName` <a name="ResetBranchName" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.resetBranchName"></a>

```go
func ResetBranchName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.branchNameInput">BranchNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.repositoryNameInput">RepositoryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.branchName">BranchName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.repositoryName">RepositoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchNameInput`<sup>Optional</sup> <a name="BranchNameInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.branchNameInput"></a>

```go
func BranchNameInput() *string
```

- *Type:* *string

---

##### `RepositoryNameInput`<sup>Optional</sup> <a name="RepositoryNameInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.repositoryNameInput"></a>

```go
func RepositoryNameInput() *string
```

- *Type:* *string

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.branchName"></a>

```go
func BranchName() *string
```

- *Type:* *string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.repositoryName"></a>

```go
func RepositoryName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodecatalystDevEnvironmentTimeoutsOutputReference <a name="CodecatalystDevEnvironmentTimeoutsOutputReference" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codecatalystdevenvironment"

codecatalystdevenvironment.NewCodecatalystDevEnvironmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodecatalystDevEnvironmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



