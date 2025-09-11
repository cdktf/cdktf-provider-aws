# `glacierVaultLock` Submodule <a name="`glacierVaultLock` Submodule" id="@cdktf/provider-aws.glacierVaultLock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlacierVaultLock <a name="GlacierVaultLock" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/glacier_vault_lock aws_glacier_vault_lock}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/glaciervaultlock"

glaciervaultlock.NewGlacierVaultLock(scope Construct, id *string, config GlacierVaultLockConfig) GlacierVaultLock
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig">GlacierVaultLockConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig">GlacierVaultLockConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.resetIgnoreDeletionError">ResetIgnoreDeletionError</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoreDeletionError` <a name="ResetIgnoreDeletionError" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.resetIgnoreDeletionError"></a>

```go
func ResetIgnoreDeletionError()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GlacierVaultLock resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/glaciervaultlock"

glaciervaultlock.GlacierVaultLock_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/glaciervaultlock"

glaciervaultlock.GlacierVaultLock_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/glaciervaultlock"

glaciervaultlock.GlacierVaultLock_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/glaciervaultlock"

glaciervaultlock.GlacierVaultLock_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GlacierVaultLock resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GlacierVaultLock to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GlacierVaultLock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/glacier_vault_lock#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GlacierVaultLock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.completeLockInput">CompleteLockInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.ignoreDeletionErrorInput">IgnoreDeletionErrorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.vaultNameInput">VaultNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.completeLock">CompleteLock</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.ignoreDeletionError">IgnoreDeletionError</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.vaultName">VaultName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompleteLockInput`<sup>Optional</sup> <a name="CompleteLockInput" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.completeLockInput"></a>

```go
func CompleteLockInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreDeletionErrorInput`<sup>Optional</sup> <a name="IgnoreDeletionErrorInput" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.ignoreDeletionErrorInput"></a>

```go
func IgnoreDeletionErrorInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `VaultNameInput`<sup>Optional</sup> <a name="VaultNameInput" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.vaultNameInput"></a>

```go
func VaultNameInput() *string
```

- *Type:* *string

---

##### `CompleteLock`<sup>Required</sup> <a name="CompleteLock" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.completeLock"></a>

```go
func CompleteLock() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreDeletionError`<sup>Required</sup> <a name="IgnoreDeletionError" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.ignoreDeletionError"></a>

```go
func IgnoreDeletionError() interface{}
```

- *Type:* interface{}

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `VaultName`<sup>Required</sup> <a name="VaultName" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.vaultName"></a>

```go
func VaultName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlacierVaultLockConfig <a name="GlacierVaultLockConfig" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/glaciervaultlock"

&glaciervaultlock.GlacierVaultLockConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompleteLock: interface{},
	Policy: *string,
	VaultName: *string,
	Id: *string,
	IgnoreDeletionError: interface{},
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.completeLock">CompleteLock</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/glacier_vault_lock#complete_lock GlacierVaultLock#complete_lock}. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.policy">Policy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/glacier_vault_lock#policy GlacierVaultLock#policy}. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.vaultName">VaultName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/glacier_vault_lock#vault_name GlacierVaultLock#vault_name}. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/glacier_vault_lock#id GlacierVaultLock#id}. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.ignoreDeletionError">IgnoreDeletionError</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/glacier_vault_lock#ignore_deletion_error GlacierVaultLock#ignore_deletion_error}. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompleteLock`<sup>Required</sup> <a name="CompleteLock" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.completeLock"></a>

```go
CompleteLock interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/glacier_vault_lock#complete_lock GlacierVaultLock#complete_lock}.

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/glacier_vault_lock#policy GlacierVaultLock#policy}.

---

##### `VaultName`<sup>Required</sup> <a name="VaultName" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.vaultName"></a>

```go
VaultName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/glacier_vault_lock#vault_name GlacierVaultLock#vault_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/glacier_vault_lock#id GlacierVaultLock#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreDeletionError`<sup>Optional</sup> <a name="IgnoreDeletionError" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.ignoreDeletionError"></a>

```go
IgnoreDeletionError interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/glacier_vault_lock#ignore_deletion_error GlacierVaultLock#ignore_deletion_error}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/glacier_vault_lock#region GlacierVaultLock#region}

---



