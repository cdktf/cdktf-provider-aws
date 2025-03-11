# `verifiedpermissionsIdentitySource` Submodule <a name="`verifiedpermissionsIdentitySource` Submodule" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VerifiedpermissionsIdentitySource <a name="VerifiedpermissionsIdentitySource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source aws_verifiedpermissions_identity_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

verifiedpermissionsidentitysource.NewVerifiedpermissionsIdentitySource(scope Construct, id *string, config VerifiedpermissionsIdentitySourceConfig) VerifiedpermissionsIdentitySource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig">VerifiedpermissionsIdentitySourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig">VerifiedpermissionsIdentitySourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.resetPrincipalEntityType">ResetPrincipalEntityType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.putConfiguration"></a>

```go
func PutConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.putConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.resetConfiguration"></a>

```go
func ResetConfiguration()
```

##### `ResetPrincipalEntityType` <a name="ResetPrincipalEntityType" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.resetPrincipalEntityType"></a>

```go
func ResetPrincipalEntityType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VerifiedpermissionsIdentitySource resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

verifiedpermissionsidentitysource.VerifiedpermissionsIdentitySource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

verifiedpermissionsidentitysource.VerifiedpermissionsIdentitySource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

verifiedpermissionsidentitysource.VerifiedpermissionsIdentitySource_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

verifiedpermissionsidentitysource.VerifiedpermissionsIdentitySource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VerifiedpermissionsIdentitySource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VerifiedpermissionsIdentitySource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VerifiedpermissionsIdentitySource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VerifiedpermissionsIdentitySource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList">VerifiedpermissionsIdentitySourceConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.configurationInput">ConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.policyStoreIdInput">PolicyStoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.principalEntityTypeInput">PrincipalEntityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.policyStoreId">PolicyStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.principalEntityType">PrincipalEntityType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.configuration"></a>

```go
func Configuration() VerifiedpermissionsIdentitySourceConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList">VerifiedpermissionsIdentitySourceConfigurationList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.configurationInput"></a>

```go
func ConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyStoreIdInput`<sup>Optional</sup> <a name="PolicyStoreIdInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.policyStoreIdInput"></a>

```go
func PolicyStoreIdInput() *string
```

- *Type:* *string

---

##### `PrincipalEntityTypeInput`<sup>Optional</sup> <a name="PrincipalEntityTypeInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.principalEntityTypeInput"></a>

```go
func PrincipalEntityTypeInput() *string
```

- *Type:* *string

---

##### `PolicyStoreId`<sup>Required</sup> <a name="PolicyStoreId" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.policyStoreId"></a>

```go
func PolicyStoreId() *string
```

- *Type:* *string

---

##### `PrincipalEntityType`<sup>Required</sup> <a name="PrincipalEntityType" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.principalEntityType"></a>

```go
func PrincipalEntityType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VerifiedpermissionsIdentitySourceConfig <a name="VerifiedpermissionsIdentitySourceConfig" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

&verifiedpermissionsidentitysource.VerifiedpermissionsIdentitySourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PolicyStoreId: *string,
	Configuration: interface{},
	PrincipalEntityType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.policyStoreId">PolicyStoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#policy_store_id VerifiedpermissionsIdentitySource#policy_store_id}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.configuration">Configuration</a></code> | <code>interface{}</code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.principalEntityType">PrincipalEntityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#principal_entity_type VerifiedpermissionsIdentitySource#principal_entity_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PolicyStoreId`<sup>Required</sup> <a name="PolicyStoreId" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.policyStoreId"></a>

```go
PolicyStoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#policy_store_id VerifiedpermissionsIdentitySource#policy_store_id}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.configuration"></a>

```go
Configuration interface{}
```

- *Type:* interface{}

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#configuration VerifiedpermissionsIdentitySource#configuration}

---

##### `PrincipalEntityType`<sup>Optional</sup> <a name="PrincipalEntityType" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.principalEntityType"></a>

```go
PrincipalEntityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#principal_entity_type VerifiedpermissionsIdentitySource#principal_entity_type}.

---

### VerifiedpermissionsIdentitySourceConfiguration <a name="VerifiedpermissionsIdentitySourceConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

&verifiedpermissionsidentitysource.VerifiedpermissionsIdentitySourceConfiguration {
	CognitoUserPoolConfiguration: interface{},
	OpenIdConnectConfiguration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfiguration.property.cognitoUserPoolConfiguration">CognitoUserPoolConfiguration</a></code> | <code>interface{}</code> | cognito_user_pool_configuration block. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfiguration.property.openIdConnectConfiguration">OpenIdConnectConfiguration</a></code> | <code>interface{}</code> | open_id_connect_configuration block. |

---

##### `CognitoUserPoolConfiguration`<sup>Optional</sup> <a name="CognitoUserPoolConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfiguration.property.cognitoUserPoolConfiguration"></a>

```go
CognitoUserPoolConfiguration interface{}
```

- *Type:* interface{}

cognito_user_pool_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#cognito_user_pool_configuration VerifiedpermissionsIdentitySource#cognito_user_pool_configuration}

---

##### `OpenIdConnectConfiguration`<sup>Optional</sup> <a name="OpenIdConnectConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfiguration.property.openIdConnectConfiguration"></a>

```go
OpenIdConnectConfiguration interface{}
```

- *Type:* interface{}

open_id_connect_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#open_id_connect_configuration VerifiedpermissionsIdentitySource#open_id_connect_configuration}

---

### VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration <a name="VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

&verifiedpermissionsidentitysource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration {
	UserPoolArn: *string,
	ClientIds: *[]*string,
	GroupConfiguration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration.property.userPoolArn">UserPoolArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#user_pool_arn VerifiedpermissionsIdentitySource#user_pool_arn}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration.property.clientIds">ClientIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#client_ids VerifiedpermissionsIdentitySource#client_ids}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration.property.groupConfiguration">GroupConfiguration</a></code> | <code>interface{}</code> | group_configuration block. |

---

##### `UserPoolArn`<sup>Required</sup> <a name="UserPoolArn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration.property.userPoolArn"></a>

```go
UserPoolArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#user_pool_arn VerifiedpermissionsIdentitySource#user_pool_arn}.

---

##### `ClientIds`<sup>Optional</sup> <a name="ClientIds" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration.property.clientIds"></a>

```go
ClientIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#client_ids VerifiedpermissionsIdentitySource#client_ids}.

---

##### `GroupConfiguration`<sup>Optional</sup> <a name="GroupConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration.property.groupConfiguration"></a>

```go
GroupConfiguration interface{}
```

- *Type:* interface{}

group_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#group_configuration VerifiedpermissionsIdentitySource#group_configuration}

---

### VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration <a name="VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

&verifiedpermissionsidentitysource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration {
	GroupEntityType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration.property.groupEntityType">GroupEntityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#group_entity_type VerifiedpermissionsIdentitySource#group_entity_type}. |

---

##### `GroupEntityType`<sup>Required</sup> <a name="GroupEntityType" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration.property.groupEntityType"></a>

```go
GroupEntityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#group_entity_type VerifiedpermissionsIdentitySource#group_entity_type}.

---

### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

&verifiedpermissionsidentitysource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration {
	Issuer: *string,
	EntityIdPrefix: *string,
	GroupConfiguration: interface{},
	TokenSelection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration.property.issuer">Issuer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#issuer VerifiedpermissionsIdentitySource#issuer}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration.property.entityIdPrefix">EntityIdPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#entity_id_prefix VerifiedpermissionsIdentitySource#entity_id_prefix}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration.property.groupConfiguration">GroupConfiguration</a></code> | <code>interface{}</code> | group_configuration block. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration.property.tokenSelection">TokenSelection</a></code> | <code>interface{}</code> | token_selection block. |

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#issuer VerifiedpermissionsIdentitySource#issuer}.

---

##### `EntityIdPrefix`<sup>Optional</sup> <a name="EntityIdPrefix" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration.property.entityIdPrefix"></a>

```go
EntityIdPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#entity_id_prefix VerifiedpermissionsIdentitySource#entity_id_prefix}.

---

##### `GroupConfiguration`<sup>Optional</sup> <a name="GroupConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration.property.groupConfiguration"></a>

```go
GroupConfiguration interface{}
```

- *Type:* interface{}

group_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#group_configuration VerifiedpermissionsIdentitySource#group_configuration}

---

##### `TokenSelection`<sup>Optional</sup> <a name="TokenSelection" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration.property.tokenSelection"></a>

```go
TokenSelection interface{}
```

- *Type:* interface{}

token_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#token_selection VerifiedpermissionsIdentitySource#token_selection}

---

### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

&verifiedpermissionsidentitysource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration {
	GroupClaim: *string,
	GroupEntityType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration.property.groupClaim">GroupClaim</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#group_claim VerifiedpermissionsIdentitySource#group_claim}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration.property.groupEntityType">GroupEntityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#group_entity_type VerifiedpermissionsIdentitySource#group_entity_type}. |

---

##### `GroupClaim`<sup>Required</sup> <a name="GroupClaim" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration.property.groupClaim"></a>

```go
GroupClaim *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#group_claim VerifiedpermissionsIdentitySource#group_claim}.

---

##### `GroupEntityType`<sup>Required</sup> <a name="GroupEntityType" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration.property.groupEntityType"></a>

```go
GroupEntityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#group_entity_type VerifiedpermissionsIdentitySource#group_entity_type}.

---

### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

&verifiedpermissionsidentitysource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection {
	AccessTokenOnly: interface{},
	IdentityTokenOnly: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection.property.accessTokenOnly">AccessTokenOnly</a></code> | <code>interface{}</code> | access_token_only block. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection.property.identityTokenOnly">IdentityTokenOnly</a></code> | <code>interface{}</code> | identity_token_only block. |

---

##### `AccessTokenOnly`<sup>Optional</sup> <a name="AccessTokenOnly" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection.property.accessTokenOnly"></a>

```go
AccessTokenOnly interface{}
```

- *Type:* interface{}

access_token_only block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#access_token_only VerifiedpermissionsIdentitySource#access_token_only}

---

##### `IdentityTokenOnly`<sup>Optional</sup> <a name="IdentityTokenOnly" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection.property.identityTokenOnly"></a>

```go
IdentityTokenOnly interface{}
```

- *Type:* interface{}

identity_token_only block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#identity_token_only VerifiedpermissionsIdentitySource#identity_token_only}

---

### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

&verifiedpermissionsidentitysource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly {
	Audiences: *[]*string,
	PrincipalIdClaim: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly.property.audiences">Audiences</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#audiences VerifiedpermissionsIdentitySource#audiences}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly.property.principalIdClaim">PrincipalIdClaim</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#principal_id_claim VerifiedpermissionsIdentitySource#principal_id_claim}. |

---

##### `Audiences`<sup>Optional</sup> <a name="Audiences" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly.property.audiences"></a>

```go
Audiences *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#audiences VerifiedpermissionsIdentitySource#audiences}.

---

##### `PrincipalIdClaim`<sup>Optional</sup> <a name="PrincipalIdClaim" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly.property.principalIdClaim"></a>

```go
PrincipalIdClaim *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#principal_id_claim VerifiedpermissionsIdentitySource#principal_id_claim}.

---

### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

&verifiedpermissionsidentitysource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly {
	ClientIds: *[]*string,
	PrincipalIdClaim: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly.property.clientIds">ClientIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#client_ids VerifiedpermissionsIdentitySource#client_ids}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly.property.principalIdClaim">PrincipalIdClaim</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#principal_id_claim VerifiedpermissionsIdentitySource#principal_id_claim}. |

---

##### `ClientIds`<sup>Optional</sup> <a name="ClientIds" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly.property.clientIds"></a>

```go
ClientIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#client_ids VerifiedpermissionsIdentitySource#client_ids}.

---

##### `PrincipalIdClaim`<sup>Optional</sup> <a name="PrincipalIdClaim" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly.property.principalIdClaim"></a>

```go
PrincipalIdClaim *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/verifiedpermissions_identity_source#principal_id_claim VerifiedpermissionsIdentitySource#principal_id_claim}.

---

## Classes <a name="Classes" id="Classes"></a>

### VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList <a name="VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

verifiedpermissionsidentitysource.NewVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.get"></a>

```go
func Get(index *f64) VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference <a name="VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

verifiedpermissionsidentitysource.NewVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.groupEntityTypeInput">GroupEntityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.groupEntityType">GroupEntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupEntityTypeInput`<sup>Optional</sup> <a name="GroupEntityTypeInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.groupEntityTypeInput"></a>

```go
func GroupEntityTypeInput() *string
```

- *Type:* *string

---

##### `GroupEntityType`<sup>Required</sup> <a name="GroupEntityType" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.groupEntityType"></a>

```go
func GroupEntityType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList <a name="VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

verifiedpermissionsidentitysource.NewVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.get"></a>

```go
func Get(index *f64) VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference <a name="VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

verifiedpermissionsidentitysource.NewVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.putGroupConfiguration">PutGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.resetClientIds">ResetClientIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.resetGroupConfiguration">ResetGroupConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGroupConfiguration` <a name="PutGroupConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.putGroupConfiguration"></a>

```go
func PutGroupConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.putGroupConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetClientIds` <a name="ResetClientIds" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.resetClientIds"></a>

```go
func ResetClientIds()
```

##### `ResetGroupConfiguration` <a name="ResetGroupConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.resetGroupConfiguration"></a>

```go
func ResetGroupConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.groupConfiguration">GroupConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList">VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.clientIdsInput">ClientIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.groupConfigurationInput">GroupConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.userPoolArnInput">UserPoolArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.clientIds">ClientIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.userPoolArn">UserPoolArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupConfiguration`<sup>Required</sup> <a name="GroupConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.groupConfiguration"></a>

```go
func GroupConfiguration() VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList">VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList</a>

---

##### `ClientIdsInput`<sup>Optional</sup> <a name="ClientIdsInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.clientIdsInput"></a>

```go
func ClientIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `GroupConfigurationInput`<sup>Optional</sup> <a name="GroupConfigurationInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.groupConfigurationInput"></a>

```go
func GroupConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `UserPoolArnInput`<sup>Optional</sup> <a name="UserPoolArnInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.userPoolArnInput"></a>

```go
func UserPoolArnInput() *string
```

- *Type:* *string

---

##### `ClientIds`<sup>Required</sup> <a name="ClientIds" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.clientIds"></a>

```go
func ClientIds() *[]*string
```

- *Type:* *[]*string

---

##### `UserPoolArn`<sup>Required</sup> <a name="UserPoolArn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.userPoolArn"></a>

```go
func UserPoolArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedpermissionsIdentitySourceConfigurationList <a name="VerifiedpermissionsIdentitySourceConfigurationList" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

verifiedpermissionsidentitysource.NewVerifiedpermissionsIdentitySourceConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VerifiedpermissionsIdentitySourceConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.get"></a>

```go
func Get(index *f64) VerifiedpermissionsIdentitySourceConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

verifiedpermissionsidentitysource.NewVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.get"></a>

```go
func Get(index *f64) VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

verifiedpermissionsidentitysource.NewVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.groupClaimInput">GroupClaimInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.groupEntityTypeInput">GroupEntityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.groupClaim">GroupClaim</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.groupEntityType">GroupEntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupClaimInput`<sup>Optional</sup> <a name="GroupClaimInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.groupClaimInput"></a>

```go
func GroupClaimInput() *string
```

- *Type:* *string

---

##### `GroupEntityTypeInput`<sup>Optional</sup> <a name="GroupEntityTypeInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.groupEntityTypeInput"></a>

```go
func GroupEntityTypeInput() *string
```

- *Type:* *string

---

##### `GroupClaim`<sup>Required</sup> <a name="GroupClaim" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.groupClaim"></a>

```go
func GroupClaim() *string
```

- *Type:* *string

---

##### `GroupEntityType`<sup>Required</sup> <a name="GroupEntityType" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.groupEntityType"></a>

```go
func GroupEntityType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

verifiedpermissionsidentitysource.NewVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.get"></a>

```go
func Get(index *f64) VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

verifiedpermissionsidentitysource.NewVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.putGroupConfiguration">PutGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.putTokenSelection">PutTokenSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.resetEntityIdPrefix">ResetEntityIdPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.resetGroupConfiguration">ResetGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.resetTokenSelection">ResetTokenSelection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGroupConfiguration` <a name="PutGroupConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.putGroupConfiguration"></a>

```go
func PutGroupConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.putGroupConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTokenSelection` <a name="PutTokenSelection" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.putTokenSelection"></a>

```go
func PutTokenSelection(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.putTokenSelection.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEntityIdPrefix` <a name="ResetEntityIdPrefix" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.resetEntityIdPrefix"></a>

```go
func ResetEntityIdPrefix()
```

##### `ResetGroupConfiguration` <a name="ResetGroupConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.resetGroupConfiguration"></a>

```go
func ResetGroupConfiguration()
```

##### `ResetTokenSelection` <a name="ResetTokenSelection" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.resetTokenSelection"></a>

```go
func ResetTokenSelection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.groupConfiguration">GroupConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.tokenSelection">TokenSelection</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.entityIdPrefixInput">EntityIdPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.groupConfigurationInput">GroupConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.tokenSelectionInput">TokenSelectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.entityIdPrefix">EntityIdPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupConfiguration`<sup>Required</sup> <a name="GroupConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.groupConfiguration"></a>

```go
func GroupConfiguration() VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList</a>

---

##### `TokenSelection`<sup>Required</sup> <a name="TokenSelection" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.tokenSelection"></a>

```go
func TokenSelection() VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList</a>

---

##### `EntityIdPrefixInput`<sup>Optional</sup> <a name="EntityIdPrefixInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.entityIdPrefixInput"></a>

```go
func EntityIdPrefixInput() *string
```

- *Type:* *string

---

##### `GroupConfigurationInput`<sup>Optional</sup> <a name="GroupConfigurationInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.groupConfigurationInput"></a>

```go
func GroupConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `TokenSelectionInput`<sup>Optional</sup> <a name="TokenSelectionInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.tokenSelectionInput"></a>

```go
func TokenSelectionInput() interface{}
```

- *Type:* interface{}

---

##### `EntityIdPrefix`<sup>Required</sup> <a name="EntityIdPrefix" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.entityIdPrefix"></a>

```go
func EntityIdPrefix() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

verifiedpermissionsidentitysource.NewVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.get"></a>

```go
func Get(index *f64) VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

verifiedpermissionsidentitysource.NewVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.resetAudiences">ResetAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.resetPrincipalIdClaim">ResetPrincipalIdClaim</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudiences` <a name="ResetAudiences" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.resetAudiences"></a>

```go
func ResetAudiences()
```

##### `ResetPrincipalIdClaim` <a name="ResetPrincipalIdClaim" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.resetPrincipalIdClaim"></a>

```go
func ResetPrincipalIdClaim()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.audiencesInput">AudiencesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.principalIdClaimInput">PrincipalIdClaimInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.audiences">Audiences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.principalIdClaim">PrincipalIdClaim</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudiencesInput`<sup>Optional</sup> <a name="AudiencesInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.audiencesInput"></a>

```go
func AudiencesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalIdClaimInput`<sup>Optional</sup> <a name="PrincipalIdClaimInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.principalIdClaimInput"></a>

```go
func PrincipalIdClaimInput() *string
```

- *Type:* *string

---

##### `Audiences`<sup>Required</sup> <a name="Audiences" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.audiences"></a>

```go
func Audiences() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalIdClaim`<sup>Required</sup> <a name="PrincipalIdClaim" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.principalIdClaim"></a>

```go
func PrincipalIdClaim() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

verifiedpermissionsidentitysource.NewVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.get"></a>

```go
func Get(index *f64) VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

verifiedpermissionsidentitysource.NewVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.resetClientIds">ResetClientIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.resetPrincipalIdClaim">ResetPrincipalIdClaim</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientIds` <a name="ResetClientIds" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.resetClientIds"></a>

```go
func ResetClientIds()
```

##### `ResetPrincipalIdClaim` <a name="ResetPrincipalIdClaim" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.resetPrincipalIdClaim"></a>

```go
func ResetPrincipalIdClaim()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.clientIdsInput">ClientIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.principalIdClaimInput">PrincipalIdClaimInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.clientIds">ClientIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.principalIdClaim">PrincipalIdClaim</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdsInput`<sup>Optional</sup> <a name="ClientIdsInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.clientIdsInput"></a>

```go
func ClientIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalIdClaimInput`<sup>Optional</sup> <a name="PrincipalIdClaimInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.principalIdClaimInput"></a>

```go
func PrincipalIdClaimInput() *string
```

- *Type:* *string

---

##### `ClientIds`<sup>Required</sup> <a name="ClientIds" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.clientIds"></a>

```go
func ClientIds() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalIdClaim`<sup>Required</sup> <a name="PrincipalIdClaim" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.principalIdClaim"></a>

```go
func PrincipalIdClaim() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

verifiedpermissionsidentitysource.NewVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.get"></a>

```go
func Get(index *f64) VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

verifiedpermissionsidentitysource.NewVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.putAccessTokenOnly">PutAccessTokenOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.putIdentityTokenOnly">PutIdentityTokenOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.resetAccessTokenOnly">ResetAccessTokenOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.resetIdentityTokenOnly">ResetIdentityTokenOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessTokenOnly` <a name="PutAccessTokenOnly" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.putAccessTokenOnly"></a>

```go
func PutAccessTokenOnly(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.putAccessTokenOnly.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIdentityTokenOnly` <a name="PutIdentityTokenOnly" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.putIdentityTokenOnly"></a>

```go
func PutIdentityTokenOnly(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.putIdentityTokenOnly.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessTokenOnly` <a name="ResetAccessTokenOnly" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.resetAccessTokenOnly"></a>

```go
func ResetAccessTokenOnly()
```

##### `ResetIdentityTokenOnly` <a name="ResetIdentityTokenOnly" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.resetIdentityTokenOnly"></a>

```go
func ResetIdentityTokenOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.accessTokenOnly">AccessTokenOnly</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.identityTokenOnly">IdentityTokenOnly</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.accessTokenOnlyInput">AccessTokenOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.identityTokenOnlyInput">IdentityTokenOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessTokenOnly`<sup>Required</sup> <a name="AccessTokenOnly" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.accessTokenOnly"></a>

```go
func AccessTokenOnly() VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList</a>

---

##### `IdentityTokenOnly`<sup>Required</sup> <a name="IdentityTokenOnly" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.identityTokenOnly"></a>

```go
func IdentityTokenOnly() VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList</a>

---

##### `AccessTokenOnlyInput`<sup>Optional</sup> <a name="AccessTokenOnlyInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.accessTokenOnlyInput"></a>

```go
func AccessTokenOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityTokenOnlyInput`<sup>Optional</sup> <a name="IdentityTokenOnlyInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.identityTokenOnlyInput"></a>

```go
func IdentityTokenOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedpermissionsIdentitySourceConfigurationOutputReference <a name="VerifiedpermissionsIdentitySourceConfigurationOutputReference" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/verifiedpermissionsidentitysource"

verifiedpermissionsidentitysource.NewVerifiedpermissionsIdentitySourceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VerifiedpermissionsIdentitySourceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.putCognitoUserPoolConfiguration">PutCognitoUserPoolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.putOpenIdConnectConfiguration">PutOpenIdConnectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.resetCognitoUserPoolConfiguration">ResetCognitoUserPoolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.resetOpenIdConnectConfiguration">ResetOpenIdConnectConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCognitoUserPoolConfiguration` <a name="PutCognitoUserPoolConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.putCognitoUserPoolConfiguration"></a>

```go
func PutCognitoUserPoolConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.putCognitoUserPoolConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOpenIdConnectConfiguration` <a name="PutOpenIdConnectConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.putOpenIdConnectConfiguration"></a>

```go
func PutOpenIdConnectConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.putOpenIdConnectConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCognitoUserPoolConfiguration` <a name="ResetCognitoUserPoolConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.resetCognitoUserPoolConfiguration"></a>

```go
func ResetCognitoUserPoolConfiguration()
```

##### `ResetOpenIdConnectConfiguration` <a name="ResetOpenIdConnectConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.resetOpenIdConnectConfiguration"></a>

```go
func ResetOpenIdConnectConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.cognitoUserPoolConfiguration">CognitoUserPoolConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList">VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.openIdConnectConfiguration">OpenIdConnectConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.cognitoUserPoolConfigurationInput">CognitoUserPoolConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.openIdConnectConfigurationInput">OpenIdConnectConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CognitoUserPoolConfiguration`<sup>Required</sup> <a name="CognitoUserPoolConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.cognitoUserPoolConfiguration"></a>

```go
func CognitoUserPoolConfiguration() VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList">VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList</a>

---

##### `OpenIdConnectConfiguration`<sup>Required</sup> <a name="OpenIdConnectConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.openIdConnectConfiguration"></a>

```go
func OpenIdConnectConfiguration() VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList</a>

---

##### `CognitoUserPoolConfigurationInput`<sup>Optional</sup> <a name="CognitoUserPoolConfigurationInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.cognitoUserPoolConfigurationInput"></a>

```go
func CognitoUserPoolConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `OpenIdConnectConfigurationInput`<sup>Optional</sup> <a name="OpenIdConnectConfigurationInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.openIdConnectConfigurationInput"></a>

```go
func OpenIdConnectConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



