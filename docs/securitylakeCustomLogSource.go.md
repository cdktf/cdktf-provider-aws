# `securitylakeCustomLogSource` Submodule <a name="`securitylakeCustomLogSource` Submodule" id="@cdktf/provider-aws.securitylakeCustomLogSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecuritylakeCustomLogSource <a name="SecuritylakeCustomLogSource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/securitylake_custom_log_source aws_securitylake_custom_log_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakecustomlogsource"

securitylakecustomlogsource.NewSecuritylakeCustomLogSource(scope Construct, id *string, config SecuritylakeCustomLogSourceConfig) SecuritylakeCustomLogSource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig">SecuritylakeCustomLogSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig">SecuritylakeCustomLogSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetEventClasses">ResetEventClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetSourceVersion">ResetSourceVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.putConfiguration"></a>

```go
func PutConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.putConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetConfiguration"></a>

```go
func ResetConfiguration()
```

##### `ResetEventClasses` <a name="ResetEventClasses" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetEventClasses"></a>

```go
func ResetEventClasses()
```

##### `ResetSourceVersion` <a name="ResetSourceVersion" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetSourceVersion"></a>

```go
func ResetSourceVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecuritylakeCustomLogSource resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakecustomlogsource"

securitylakecustomlogsource.SecuritylakeCustomLogSource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakecustomlogsource"

securitylakecustomlogsource.SecuritylakeCustomLogSource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakecustomlogsource"

securitylakecustomlogsource.SecuritylakeCustomLogSource_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakecustomlogsource"

securitylakecustomlogsource.SecuritylakeCustomLogSource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SecuritylakeCustomLogSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecuritylakeCustomLogSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecuritylakeCustomLogSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/securitylake_custom_log_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SecuritylakeCustomLogSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.attributes">Attributes</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList">SecuritylakeCustomLogSourceAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList">SecuritylakeCustomLogSourceConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.providerDetails">ProviderDetails</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList">SecuritylakeCustomLogSourceProviderDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.configurationInput">ConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.eventClassesInput">EventClassesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceNameInput">SourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceVersionInput">SourceVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.eventClasses">EventClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceName">SourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceVersion">SourceVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.attributes"></a>

```go
func Attributes() SecuritylakeCustomLogSourceAttributesList
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList">SecuritylakeCustomLogSourceAttributesList</a>

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.configuration"></a>

```go
func Configuration() SecuritylakeCustomLogSourceConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList">SecuritylakeCustomLogSourceConfigurationList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProviderDetails`<sup>Required</sup> <a name="ProviderDetails" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.providerDetails"></a>

```go
func ProviderDetails() SecuritylakeCustomLogSourceProviderDetailsList
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList">SecuritylakeCustomLogSourceProviderDetailsList</a>

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.configurationInput"></a>

```go
func ConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `EventClassesInput`<sup>Optional</sup> <a name="EventClassesInput" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.eventClassesInput"></a>

```go
func EventClassesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceNameInput`<sup>Optional</sup> <a name="SourceNameInput" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceNameInput"></a>

```go
func SourceNameInput() *string
```

- *Type:* *string

---

##### `SourceVersionInput`<sup>Optional</sup> <a name="SourceVersionInput" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceVersionInput"></a>

```go
func SourceVersionInput() *string
```

- *Type:* *string

---

##### `EventClasses`<sup>Required</sup> <a name="EventClasses" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.eventClasses"></a>

```go
func EventClasses() *[]*string
```

- *Type:* *[]*string

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceName"></a>

```go
func SourceName() *string
```

- *Type:* *string

---

##### `SourceVersion`<sup>Required</sup> <a name="SourceVersion" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceVersion"></a>

```go
func SourceVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecuritylakeCustomLogSourceAttributes <a name="SecuritylakeCustomLogSourceAttributes" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakecustomlogsource"

&securitylakecustomlogsource.SecuritylakeCustomLogSourceAttributes {

}
```


### SecuritylakeCustomLogSourceConfig <a name="SecuritylakeCustomLogSourceConfig" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakecustomlogsource"

&securitylakecustomlogsource.SecuritylakeCustomLogSourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SourceName: *string,
	Configuration: interface{},
	EventClasses: *[]*string,
	SourceVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.sourceName">SourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/securitylake_custom_log_source#source_name SecuritylakeCustomLogSource#source_name}. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.configuration">Configuration</a></code> | <code>interface{}</code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.eventClasses">EventClasses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/securitylake_custom_log_source#event_classes SecuritylakeCustomLogSource#event_classes}. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.sourceVersion">SourceVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/securitylake_custom_log_source#source_version SecuritylakeCustomLogSource#source_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.sourceName"></a>

```go
SourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/securitylake_custom_log_source#source_name SecuritylakeCustomLogSource#source_name}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.configuration"></a>

```go
Configuration interface{}
```

- *Type:* interface{}

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/securitylake_custom_log_source#configuration SecuritylakeCustomLogSource#configuration}

---

##### `EventClasses`<sup>Optional</sup> <a name="EventClasses" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.eventClasses"></a>

```go
EventClasses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/securitylake_custom_log_source#event_classes SecuritylakeCustomLogSource#event_classes}.

---

##### `SourceVersion`<sup>Optional</sup> <a name="SourceVersion" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.sourceVersion"></a>

```go
SourceVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/securitylake_custom_log_source#source_version SecuritylakeCustomLogSource#source_version}.

---

### SecuritylakeCustomLogSourceConfiguration <a name="SecuritylakeCustomLogSourceConfiguration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakecustomlogsource"

&securitylakecustomlogsource.SecuritylakeCustomLogSourceConfiguration {
	CrawlerConfiguration: interface{},
	ProviderIdentity: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration.property.crawlerConfiguration">CrawlerConfiguration</a></code> | <code>interface{}</code> | crawler_configuration block. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration.property.providerIdentity">ProviderIdentity</a></code> | <code>interface{}</code> | provider_identity block. |

---

##### `CrawlerConfiguration`<sup>Optional</sup> <a name="CrawlerConfiguration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration.property.crawlerConfiguration"></a>

```go
CrawlerConfiguration interface{}
```

- *Type:* interface{}

crawler_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/securitylake_custom_log_source#crawler_configuration SecuritylakeCustomLogSource#crawler_configuration}

---

##### `ProviderIdentity`<sup>Optional</sup> <a name="ProviderIdentity" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration.property.providerIdentity"></a>

```go
ProviderIdentity interface{}
```

- *Type:* interface{}

provider_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/securitylake_custom_log_source#provider_identity SecuritylakeCustomLogSource#provider_identity}

---

### SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration <a name="SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakecustomlogsource"

&securitylakecustomlogsource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration {
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/securitylake_custom_log_source#role_arn SecuritylakeCustomLogSource#role_arn}. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/securitylake_custom_log_source#role_arn SecuritylakeCustomLogSource#role_arn}.

---

### SecuritylakeCustomLogSourceConfigurationProviderIdentity <a name="SecuritylakeCustomLogSourceConfigurationProviderIdentity" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakecustomlogsource"

&securitylakecustomlogsource.SecuritylakeCustomLogSourceConfigurationProviderIdentity {
	ExternalId: *string,
	Principal: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity.property.externalId">ExternalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/securitylake_custom_log_source#external_id SecuritylakeCustomLogSource#external_id}. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity.property.principal">Principal</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/securitylake_custom_log_source#principal SecuritylakeCustomLogSource#principal}. |

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/securitylake_custom_log_source#external_id SecuritylakeCustomLogSource#external_id}.

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity.property.principal"></a>

```go
Principal *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/securitylake_custom_log_source#principal SecuritylakeCustomLogSource#principal}.

---

### SecuritylakeCustomLogSourceProviderDetails <a name="SecuritylakeCustomLogSourceProviderDetails" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakecustomlogsource"

&securitylakecustomlogsource.SecuritylakeCustomLogSourceProviderDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### SecuritylakeCustomLogSourceAttributesList <a name="SecuritylakeCustomLogSourceAttributesList" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakecustomlogsource"

securitylakecustomlogsource.NewSecuritylakeCustomLogSourceAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecuritylakeCustomLogSourceAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.get"></a>

```go
func Get(index *f64) SecuritylakeCustomLogSourceAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SecuritylakeCustomLogSourceAttributesOutputReference <a name="SecuritylakeCustomLogSourceAttributesOutputReference" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakecustomlogsource"

securitylakecustomlogsource.NewSecuritylakeCustomLogSourceAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecuritylakeCustomLogSourceAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.crawlerArn">CrawlerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.databaseArn">DatabaseArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.tableArn">TableArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributes">SecuritylakeCustomLogSourceAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CrawlerArn`<sup>Required</sup> <a name="CrawlerArn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.crawlerArn"></a>

```go
func CrawlerArn() *string
```

- *Type:* *string

---

##### `DatabaseArn`<sup>Required</sup> <a name="DatabaseArn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.databaseArn"></a>

```go
func DatabaseArn() *string
```

- *Type:* *string

---

##### `TableArn`<sup>Required</sup> <a name="TableArn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.tableArn"></a>

```go
func TableArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() SecuritylakeCustomLogSourceAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributes">SecuritylakeCustomLogSourceAttributes</a>

---


### SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList <a name="SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakecustomlogsource"

securitylakecustomlogsource.NewSecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.get"></a>

```go
func Get(index *f64) SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference <a name="SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakecustomlogsource"

securitylakecustomlogsource.NewSecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeCustomLogSourceConfigurationList <a name="SecuritylakeCustomLogSourceConfigurationList" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakecustomlogsource"

securitylakecustomlogsource.NewSecuritylakeCustomLogSourceConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecuritylakeCustomLogSourceConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.get"></a>

```go
func Get(index *f64) SecuritylakeCustomLogSourceConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeCustomLogSourceConfigurationOutputReference <a name="SecuritylakeCustomLogSourceConfigurationOutputReference" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakecustomlogsource"

securitylakecustomlogsource.NewSecuritylakeCustomLogSourceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecuritylakeCustomLogSourceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.putCrawlerConfiguration">PutCrawlerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.putProviderIdentity">PutProviderIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resetCrawlerConfiguration">ResetCrawlerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resetProviderIdentity">ResetProviderIdentity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCrawlerConfiguration` <a name="PutCrawlerConfiguration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.putCrawlerConfiguration"></a>

```go
func PutCrawlerConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.putCrawlerConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutProviderIdentity` <a name="PutProviderIdentity" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.putProviderIdentity"></a>

```go
func PutProviderIdentity(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.putProviderIdentity.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCrawlerConfiguration` <a name="ResetCrawlerConfiguration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resetCrawlerConfiguration"></a>

```go
func ResetCrawlerConfiguration()
```

##### `ResetProviderIdentity` <a name="ResetProviderIdentity" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resetProviderIdentity"></a>

```go
func ResetProviderIdentity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.crawlerConfiguration">CrawlerConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList">SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.providerIdentity">ProviderIdentity</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList">SecuritylakeCustomLogSourceConfigurationProviderIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.crawlerConfigurationInput">CrawlerConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.providerIdentityInput">ProviderIdentityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CrawlerConfiguration`<sup>Required</sup> <a name="CrawlerConfiguration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.crawlerConfiguration"></a>

```go
func CrawlerConfiguration() SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList">SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList</a>

---

##### `ProviderIdentity`<sup>Required</sup> <a name="ProviderIdentity" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.providerIdentity"></a>

```go
func ProviderIdentity() SecuritylakeCustomLogSourceConfigurationProviderIdentityList
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList">SecuritylakeCustomLogSourceConfigurationProviderIdentityList</a>

---

##### `CrawlerConfigurationInput`<sup>Optional</sup> <a name="CrawlerConfigurationInput" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.crawlerConfigurationInput"></a>

```go
func CrawlerConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ProviderIdentityInput`<sup>Optional</sup> <a name="ProviderIdentityInput" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.providerIdentityInput"></a>

```go
func ProviderIdentityInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeCustomLogSourceConfigurationProviderIdentityList <a name="SecuritylakeCustomLogSourceConfigurationProviderIdentityList" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakecustomlogsource"

securitylakecustomlogsource.NewSecuritylakeCustomLogSourceConfigurationProviderIdentityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecuritylakeCustomLogSourceConfigurationProviderIdentityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.get"></a>

```go
func Get(index *f64) SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference <a name="SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakecustomlogsource"

securitylakecustomlogsource.NewSecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.principalInput">PrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.principalInput"></a>

```go
func PrincipalInput() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeCustomLogSourceProviderDetailsList <a name="SecuritylakeCustomLogSourceProviderDetailsList" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakecustomlogsource"

securitylakecustomlogsource.NewSecuritylakeCustomLogSourceProviderDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecuritylakeCustomLogSourceProviderDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.get"></a>

```go
func Get(index *f64) SecuritylakeCustomLogSourceProviderDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SecuritylakeCustomLogSourceProviderDetailsOutputReference <a name="SecuritylakeCustomLogSourceProviderDetailsOutputReference" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitylakecustomlogsource"

securitylakecustomlogsource.NewSecuritylakeCustomLogSourceProviderDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecuritylakeCustomLogSourceProviderDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetails">SecuritylakeCustomLogSourceProviderDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() SecuritylakeCustomLogSourceProviderDetails
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetails">SecuritylakeCustomLogSourceProviderDetails</a>

---



