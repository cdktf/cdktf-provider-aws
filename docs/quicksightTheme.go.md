# `aws_quicksight_theme`

Refer to the Terraform Registory for docs: [`aws_quicksight_theme`](https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme).

# `quicksightTheme` Submodule <a name="`quicksightTheme` Submodule" id="@cdktf/provider-aws.quicksightTheme"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightTheme <a name="QuicksightTheme" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme aws_quicksight_theme}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

quicksighttheme.NewQuicksightTheme(scope Construct, id *string, config QuicksightThemeConfig) QuicksightTheme
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig">QuicksightThemeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig">QuicksightThemeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.putPermissions">PutPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetVersionDescription">ResetVersionDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.putConfiguration"></a>

```go
func PutConfiguration(value QuicksightThemeConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a>

---

##### `PutPermissions` <a name="PutPermissions" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.putPermissions"></a>

```go
func PutPermissions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.putPermissions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.putTimeouts"></a>

```go
func PutTimeouts(value QuicksightThemeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeouts">QuicksightThemeTimeouts</a>

---

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetAwsAccountId"></a>

```go
func ResetAwsAccountId()
```

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetConfiguration"></a>

```go
func ResetConfiguration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetId"></a>

```go
func ResetId()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetPermissions"></a>

```go
func ResetPermissions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVersionDescription` <a name="ResetVersionDescription" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetVersionDescription"></a>

```go
func ResetVersionDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a QuicksightTheme resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

quicksighttheme.QuicksightTheme_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

quicksighttheme.QuicksightTheme_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

quicksighttheme.QuicksightTheme_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

quicksighttheme.QuicksightTheme_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a QuicksightTheme resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the QuicksightTheme to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing QuicksightTheme that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the QuicksightTheme to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference">QuicksightThemeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.permissions">Permissions</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList">QuicksightThemePermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference">QuicksightThemeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.versionNumber">VersionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.baseThemeIdInput">BaseThemeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.configurationInput">ConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.permissionsInput">PermissionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.themeIdInput">ThemeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.versionDescriptionInput">VersionDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.baseThemeId">BaseThemeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.themeId">ThemeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.versionDescription">VersionDescription</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.configuration"></a>

```go
func Configuration() QuicksightThemeConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference">QuicksightThemeConfigurationOutputReference</a>

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.permissions"></a>

```go
func Permissions() QuicksightThemePermissionsList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList">QuicksightThemePermissionsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.timeouts"></a>

```go
func Timeouts() QuicksightThemeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference">QuicksightThemeTimeoutsOutputReference</a>

---

##### `VersionNumber`<sup>Required</sup> <a name="VersionNumber" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.versionNumber"></a>

```go
func VersionNumber() *f64
```

- *Type:* *f64

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.awsAccountIdInput"></a>

```go
func AwsAccountIdInput() *string
```

- *Type:* *string

---

##### `BaseThemeIdInput`<sup>Optional</sup> <a name="BaseThemeIdInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.baseThemeIdInput"></a>

```go
func BaseThemeIdInput() *string
```

- *Type:* *string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.configurationInput"></a>

```go
func ConfigurationInput() QuicksightThemeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.permissionsInput"></a>

```go
func PermissionsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ThemeIdInput`<sup>Optional</sup> <a name="ThemeIdInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.themeIdInput"></a>

```go
func ThemeIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionDescriptionInput`<sup>Optional</sup> <a name="VersionDescriptionInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.versionDescriptionInput"></a>

```go
func VersionDescriptionInput() *string
```

- *Type:* *string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `BaseThemeId`<sup>Required</sup> <a name="BaseThemeId" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.baseThemeId"></a>

```go
func BaseThemeId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ThemeId`<sup>Required</sup> <a name="ThemeId" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.themeId"></a>

```go
func ThemeId() *string
```

- *Type:* *string

---

##### `VersionDescription`<sup>Required</sup> <a name="VersionDescription" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.versionDescription"></a>

```go
func VersionDescription() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightThemeConfig <a name="QuicksightThemeConfig" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

&quicksighttheme.QuicksightThemeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BaseThemeId: *string,
	Name: *string,
	ThemeId: *string,
	AwsAccountId: *string,
	Configuration: github.com/cdktf/cdktf-provider-aws-go/aws/v18.quicksightTheme.QuicksightThemeConfiguration,
	Id: *string,
	Permissions: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v18.quicksightTheme.QuicksightThemeTimeouts,
	VersionDescription: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.baseThemeId">BaseThemeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#base_theme_id QuicksightTheme#base_theme_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#name QuicksightTheme#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.themeId">ThemeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#theme_id QuicksightTheme#theme_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#aws_account_id QuicksightTheme#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#id QuicksightTheme#id}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.permissions">Permissions</a></code> | <code>interface{}</code> | permissions block. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#tags QuicksightTheme#tags}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#tags_all QuicksightTheme#tags_all}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeouts">QuicksightThemeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.versionDescription">VersionDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#version_description QuicksightTheme#version_description}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BaseThemeId`<sup>Required</sup> <a name="BaseThemeId" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.baseThemeId"></a>

```go
BaseThemeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#base_theme_id QuicksightTheme#base_theme_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#name QuicksightTheme#name}.

---

##### `ThemeId`<sup>Required</sup> <a name="ThemeId" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.themeId"></a>

```go
ThemeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#theme_id QuicksightTheme#theme_id}.

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.awsAccountId"></a>

```go
AwsAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#aws_account_id QuicksightTheme#aws_account_id}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.configuration"></a>

```go
Configuration QuicksightThemeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#configuration QuicksightTheme#configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#id QuicksightTheme#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.permissions"></a>

```go
Permissions interface{}
```

- *Type:* interface{}

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#permissions QuicksightTheme#permissions}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#tags QuicksightTheme#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#tags_all QuicksightTheme#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.timeouts"></a>

```go
Timeouts QuicksightThemeTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeouts">QuicksightThemeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#timeouts QuicksightTheme#timeouts}

---

##### `VersionDescription`<sup>Optional</sup> <a name="VersionDescription" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.versionDescription"></a>

```go
VersionDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#version_description QuicksightTheme#version_description}.

---

### QuicksightThemeConfiguration <a name="QuicksightThemeConfiguration" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

&quicksighttheme.QuicksightThemeConfiguration {
	DataColorPalette: github.com/cdktf/cdktf-provider-aws-go/aws/v18.quicksightTheme.QuicksightThemeConfigurationDataColorPalette,
	Sheet: github.com/cdktf/cdktf-provider-aws-go/aws/v18.quicksightTheme.QuicksightThemeConfigurationSheet,
	Typography: github.com/cdktf/cdktf-provider-aws-go/aws/v18.quicksightTheme.QuicksightThemeConfigurationTypography,
	UiColorPalette: github.com/cdktf/cdktf-provider-aws-go/aws/v18.quicksightTheme.QuicksightThemeConfigurationUiColorPalette,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration.property.dataColorPalette">DataColorPalette</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a></code> | data_color_palette block. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration.property.sheet">Sheet</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a></code> | sheet block. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration.property.typography">Typography</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a></code> | typography block. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration.property.uiColorPalette">UiColorPalette</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a></code> | ui_color_palette block. |

---

##### `DataColorPalette`<sup>Optional</sup> <a name="DataColorPalette" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration.property.dataColorPalette"></a>

```go
DataColorPalette QuicksightThemeConfigurationDataColorPalette
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a>

data_color_palette block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#data_color_palette QuicksightTheme#data_color_palette}

---

##### `Sheet`<sup>Optional</sup> <a name="Sheet" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration.property.sheet"></a>

```go
Sheet QuicksightThemeConfigurationSheet
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a>

sheet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#sheet QuicksightTheme#sheet}

---

##### `Typography`<sup>Optional</sup> <a name="Typography" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration.property.typography"></a>

```go
Typography QuicksightThemeConfigurationTypography
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a>

typography block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#typography QuicksightTheme#typography}

---

##### `UiColorPalette`<sup>Optional</sup> <a name="UiColorPalette" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration.property.uiColorPalette"></a>

```go
UiColorPalette QuicksightThemeConfigurationUiColorPalette
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a>

ui_color_palette block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#ui_color_palette QuicksightTheme#ui_color_palette}

---

### QuicksightThemeConfigurationDataColorPalette <a name="QuicksightThemeConfigurationDataColorPalette" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

&quicksighttheme.QuicksightThemeConfigurationDataColorPalette {
	Colors: *[]*string,
	EmptyFillColor: *string,
	MinMaxGradient: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.property.colors">Colors</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#colors QuicksightTheme#colors}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.property.emptyFillColor">EmptyFillColor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#empty_fill_color QuicksightTheme#empty_fill_color}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.property.minMaxGradient">MinMaxGradient</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#min_max_gradient QuicksightTheme#min_max_gradient}. |

---

##### `Colors`<sup>Optional</sup> <a name="Colors" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.property.colors"></a>

```go
Colors *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#colors QuicksightTheme#colors}.

---

##### `EmptyFillColor`<sup>Optional</sup> <a name="EmptyFillColor" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.property.emptyFillColor"></a>

```go
EmptyFillColor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#empty_fill_color QuicksightTheme#empty_fill_color}.

---

##### `MinMaxGradient`<sup>Optional</sup> <a name="MinMaxGradient" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.property.minMaxGradient"></a>

```go
MinMaxGradient *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#min_max_gradient QuicksightTheme#min_max_gradient}.

---

### QuicksightThemeConfigurationSheet <a name="QuicksightThemeConfigurationSheet" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

&quicksighttheme.QuicksightThemeConfigurationSheet {
	Tile: github.com/cdktf/cdktf-provider-aws-go/aws/v18.quicksightTheme.QuicksightThemeConfigurationSheetTile,
	TileLayout: github.com/cdktf/cdktf-provider-aws-go/aws/v18.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheet.property.tile">Tile</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a></code> | tile block. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheet.property.tileLayout">TileLayout</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a></code> | tile_layout block. |

---

##### `Tile`<sup>Optional</sup> <a name="Tile" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheet.property.tile"></a>

```go
Tile QuicksightThemeConfigurationSheetTile
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a>

tile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#tile QuicksightTheme#tile}

---

##### `TileLayout`<sup>Optional</sup> <a name="TileLayout" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheet.property.tileLayout"></a>

```go
TileLayout QuicksightThemeConfigurationSheetTileLayout
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a>

tile_layout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#tile_layout QuicksightTheme#tile_layout}

---

### QuicksightThemeConfigurationSheetTile <a name="QuicksightThemeConfigurationSheetTile" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

&quicksighttheme.QuicksightThemeConfigurationSheetTile {
	Border: github.com/cdktf/cdktf-provider-aws-go/aws/v18.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTile.property.border">Border</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a></code> | border block. |

---

##### `Border`<sup>Optional</sup> <a name="Border" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTile.property.border"></a>

```go
Border QuicksightThemeConfigurationSheetTileBorder
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a>

border block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#border QuicksightTheme#border}

---

### QuicksightThemeConfigurationSheetTileBorder <a name="QuicksightThemeConfigurationSheetTileBorder" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

&quicksighttheme.QuicksightThemeConfigurationSheetTileBorder {
	Show: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder.property.show">Show</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#show QuicksightTheme#show}. |

---

##### `Show`<sup>Optional</sup> <a name="Show" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder.property.show"></a>

```go
Show interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#show QuicksightTheme#show}.

---

### QuicksightThemeConfigurationSheetTileLayout <a name="QuicksightThemeConfigurationSheetTileLayout" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

&quicksighttheme.QuicksightThemeConfigurationSheetTileLayout {
	Gutter: github.com/cdktf/cdktf-provider-aws-go/aws/v18.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter,
	Margin: github.com/cdktf/cdktf-provider-aws-go/aws/v18.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout.property.gutter">Gutter</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a></code> | gutter block. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout.property.margin">Margin</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a></code> | margin block. |

---

##### `Gutter`<sup>Optional</sup> <a name="Gutter" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout.property.gutter"></a>

```go
Gutter QuicksightThemeConfigurationSheetTileLayoutGutter
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a>

gutter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#gutter QuicksightTheme#gutter}

---

##### `Margin`<sup>Optional</sup> <a name="Margin" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout.property.margin"></a>

```go
Margin QuicksightThemeConfigurationSheetTileLayoutMargin
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a>

margin block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#margin QuicksightTheme#margin}

---

### QuicksightThemeConfigurationSheetTileLayoutGutter <a name="QuicksightThemeConfigurationSheetTileLayoutGutter" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

&quicksighttheme.QuicksightThemeConfigurationSheetTileLayoutGutter {
	Show: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter.property.show">Show</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#show QuicksightTheme#show}. |

---

##### `Show`<sup>Optional</sup> <a name="Show" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter.property.show"></a>

```go
Show interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#show QuicksightTheme#show}.

---

### QuicksightThemeConfigurationSheetTileLayoutMargin <a name="QuicksightThemeConfigurationSheetTileLayoutMargin" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

&quicksighttheme.QuicksightThemeConfigurationSheetTileLayoutMargin {
	Show: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin.property.show">Show</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#show QuicksightTheme#show}. |

---

##### `Show`<sup>Optional</sup> <a name="Show" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin.property.show"></a>

```go
Show interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#show QuicksightTheme#show}.

---

### QuicksightThemeConfigurationTypography <a name="QuicksightThemeConfigurationTypography" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypography"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypography.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

&quicksighttheme.QuicksightThemeConfigurationTypography {
	FontFamilies: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypography.property.fontFamilies">FontFamilies</a></code> | <code>interface{}</code> | font_families block. |

---

##### `FontFamilies`<sup>Optional</sup> <a name="FontFamilies" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypography.property.fontFamilies"></a>

```go
FontFamilies interface{}
```

- *Type:* interface{}

font_families block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#font_families QuicksightTheme#font_families}

---

### QuicksightThemeConfigurationTypographyFontFamilies <a name="QuicksightThemeConfigurationTypographyFontFamilies" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

&quicksighttheme.QuicksightThemeConfigurationTypographyFontFamilies {
	FontFamily: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies.property.fontFamily">FontFamily</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#font_family QuicksightTheme#font_family}. |

---

##### `FontFamily`<sup>Optional</sup> <a name="FontFamily" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies.property.fontFamily"></a>

```go
FontFamily *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#font_family QuicksightTheme#font_family}.

---

### QuicksightThemeConfigurationUiColorPalette <a name="QuicksightThemeConfigurationUiColorPalette" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

&quicksighttheme.QuicksightThemeConfigurationUiColorPalette {
	Accent: *string,
	AccentForeground: *string,
	Danger: *string,
	DangerForeground: *string,
	Dimension: *string,
	DimensionForeground: *string,
	Measure: *string,
	MeasureForeground: *string,
	PrimaryBackground: *string,
	PrimaryForeground: *string,
	SecondaryBackground: *string,
	SecondaryForeground: *string,
	Success: *string,
	SuccessForeground: *string,
	Warning: *string,
	WarningForeground: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.accent">Accent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#accent QuicksightTheme#accent}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.accentForeground">AccentForeground</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#accent_foreground QuicksightTheme#accent_foreground}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.danger">Danger</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#danger QuicksightTheme#danger}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.dangerForeground">DangerForeground</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#danger_foreground QuicksightTheme#danger_foreground}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.dimension">Dimension</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#dimension QuicksightTheme#dimension}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.dimensionForeground">DimensionForeground</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#dimension_foreground QuicksightTheme#dimension_foreground}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.measure">Measure</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#measure QuicksightTheme#measure}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.measureForeground">MeasureForeground</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#measure_foreground QuicksightTheme#measure_foreground}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.primaryBackground">PrimaryBackground</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#primary_background QuicksightTheme#primary_background}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.primaryForeground">PrimaryForeground</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#primary_foreground QuicksightTheme#primary_foreground}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.secondaryBackground">SecondaryBackground</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#secondary_background QuicksightTheme#secondary_background}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.secondaryForeground">SecondaryForeground</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#secondary_foreground QuicksightTheme#secondary_foreground}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.success">Success</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#success QuicksightTheme#success}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.successForeground">SuccessForeground</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#success_foreground QuicksightTheme#success_foreground}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.warning">Warning</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#warning QuicksightTheme#warning}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.warningForeground">WarningForeground</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#warning_foreground QuicksightTheme#warning_foreground}. |

---

##### `Accent`<sup>Optional</sup> <a name="Accent" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.accent"></a>

```go
Accent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#accent QuicksightTheme#accent}.

---

##### `AccentForeground`<sup>Optional</sup> <a name="AccentForeground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.accentForeground"></a>

```go
AccentForeground *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#accent_foreground QuicksightTheme#accent_foreground}.

---

##### `Danger`<sup>Optional</sup> <a name="Danger" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.danger"></a>

```go
Danger *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#danger QuicksightTheme#danger}.

---

##### `DangerForeground`<sup>Optional</sup> <a name="DangerForeground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.dangerForeground"></a>

```go
DangerForeground *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#danger_foreground QuicksightTheme#danger_foreground}.

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.dimension"></a>

```go
Dimension *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#dimension QuicksightTheme#dimension}.

---

##### `DimensionForeground`<sup>Optional</sup> <a name="DimensionForeground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.dimensionForeground"></a>

```go
DimensionForeground *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#dimension_foreground QuicksightTheme#dimension_foreground}.

---

##### `Measure`<sup>Optional</sup> <a name="Measure" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.measure"></a>

```go
Measure *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#measure QuicksightTheme#measure}.

---

##### `MeasureForeground`<sup>Optional</sup> <a name="MeasureForeground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.measureForeground"></a>

```go
MeasureForeground *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#measure_foreground QuicksightTheme#measure_foreground}.

---

##### `PrimaryBackground`<sup>Optional</sup> <a name="PrimaryBackground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.primaryBackground"></a>

```go
PrimaryBackground *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#primary_background QuicksightTheme#primary_background}.

---

##### `PrimaryForeground`<sup>Optional</sup> <a name="PrimaryForeground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.primaryForeground"></a>

```go
PrimaryForeground *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#primary_foreground QuicksightTheme#primary_foreground}.

---

##### `SecondaryBackground`<sup>Optional</sup> <a name="SecondaryBackground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.secondaryBackground"></a>

```go
SecondaryBackground *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#secondary_background QuicksightTheme#secondary_background}.

---

##### `SecondaryForeground`<sup>Optional</sup> <a name="SecondaryForeground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.secondaryForeground"></a>

```go
SecondaryForeground *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#secondary_foreground QuicksightTheme#secondary_foreground}.

---

##### `Success`<sup>Optional</sup> <a name="Success" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.success"></a>

```go
Success *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#success QuicksightTheme#success}.

---

##### `SuccessForeground`<sup>Optional</sup> <a name="SuccessForeground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.successForeground"></a>

```go
SuccessForeground *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#success_foreground QuicksightTheme#success_foreground}.

---

##### `Warning`<sup>Optional</sup> <a name="Warning" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.warning"></a>

```go
Warning *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#warning QuicksightTheme#warning}.

---

##### `WarningForeground`<sup>Optional</sup> <a name="WarningForeground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.warningForeground"></a>

```go
WarningForeground *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#warning_foreground QuicksightTheme#warning_foreground}.

---

### QuicksightThemePermissions <a name="QuicksightThemePermissions" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

&quicksighttheme.QuicksightThemePermissions {
	Actions: *[]*string,
	Principal: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissions.property.actions">Actions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#actions QuicksightTheme#actions}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissions.property.principal">Principal</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#principal QuicksightTheme#principal}. |

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissions.property.actions"></a>

```go
Actions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#actions QuicksightTheme#actions}.

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissions.property.principal"></a>

```go
Principal *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#principal QuicksightTheme#principal}.

---

### QuicksightThemeTimeouts <a name="QuicksightThemeTimeouts" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

&quicksighttheme.QuicksightThemeTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#create QuicksightTheme#create}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#delete QuicksightTheme#delete}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#update QuicksightTheme#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#create QuicksightTheme#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#delete QuicksightTheme#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/quicksight_theme#update QuicksightTheme#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightThemeConfigurationDataColorPaletteOutputReference <a name="QuicksightThemeConfigurationDataColorPaletteOutputReference" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

quicksighttheme.NewQuicksightThemeConfigurationDataColorPaletteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightThemeConfigurationDataColorPaletteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resetColors">ResetColors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resetEmptyFillColor">ResetEmptyFillColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resetMinMaxGradient">ResetMinMaxGradient</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColors` <a name="ResetColors" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resetColors"></a>

```go
func ResetColors()
```

##### `ResetEmptyFillColor` <a name="ResetEmptyFillColor" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resetEmptyFillColor"></a>

```go
func ResetEmptyFillColor()
```

##### `ResetMinMaxGradient` <a name="ResetMinMaxGradient" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resetMinMaxGradient"></a>

```go
func ResetMinMaxGradient()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.colorsInput">ColorsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.emptyFillColorInput">EmptyFillColorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.minMaxGradientInput">MinMaxGradientInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.colors">Colors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.emptyFillColor">EmptyFillColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.minMaxGradient">MinMaxGradient</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColorsInput`<sup>Optional</sup> <a name="ColorsInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.colorsInput"></a>

```go
func ColorsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EmptyFillColorInput`<sup>Optional</sup> <a name="EmptyFillColorInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.emptyFillColorInput"></a>

```go
func EmptyFillColorInput() *string
```

- *Type:* *string

---

##### `MinMaxGradientInput`<sup>Optional</sup> <a name="MinMaxGradientInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.minMaxGradientInput"></a>

```go
func MinMaxGradientInput() *[]*string
```

- *Type:* *[]*string

---

##### `Colors`<sup>Required</sup> <a name="Colors" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.colors"></a>

```go
func Colors() *[]*string
```

- *Type:* *[]*string

---

##### `EmptyFillColor`<sup>Required</sup> <a name="EmptyFillColor" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.emptyFillColor"></a>

```go
func EmptyFillColor() *string
```

- *Type:* *string

---

##### `MinMaxGradient`<sup>Required</sup> <a name="MinMaxGradient" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.minMaxGradient"></a>

```go
func MinMaxGradient() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightThemeConfigurationDataColorPalette
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a>

---


### QuicksightThemeConfigurationOutputReference <a name="QuicksightThemeConfigurationOutputReference" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

quicksighttheme.NewQuicksightThemeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightThemeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putDataColorPalette">PutDataColorPalette</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putSheet">PutSheet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putTypography">PutTypography</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette">PutUiColorPalette</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetDataColorPalette">ResetDataColorPalette</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetSheet">ResetSheet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetTypography">ResetTypography</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetUiColorPalette">ResetUiColorPalette</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataColorPalette` <a name="PutDataColorPalette" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putDataColorPalette"></a>

```go
func PutDataColorPalette(value QuicksightThemeConfigurationDataColorPalette)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putDataColorPalette.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a>

---

##### `PutSheet` <a name="PutSheet" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putSheet"></a>

```go
func PutSheet(value QuicksightThemeConfigurationSheet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putSheet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a>

---

##### `PutTypography` <a name="PutTypography" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putTypography"></a>

```go
func PutTypography(value QuicksightThemeConfigurationTypography)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putTypography.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a>

---

##### `PutUiColorPalette` <a name="PutUiColorPalette" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette"></a>

```go
func PutUiColorPalette(value QuicksightThemeConfigurationUiColorPalette)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a>

---

##### `ResetDataColorPalette` <a name="ResetDataColorPalette" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetDataColorPalette"></a>

```go
func ResetDataColorPalette()
```

##### `ResetSheet` <a name="ResetSheet" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetSheet"></a>

```go
func ResetSheet()
```

##### `ResetTypography` <a name="ResetTypography" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetTypography"></a>

```go
func ResetTypography()
```

##### `ResetUiColorPalette` <a name="ResetUiColorPalette" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetUiColorPalette"></a>

```go
func ResetUiColorPalette()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.dataColorPalette">DataColorPalette</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference">QuicksightThemeConfigurationDataColorPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.sheet">Sheet</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference">QuicksightThemeConfigurationSheetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.typography">Typography</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference">QuicksightThemeConfigurationTypographyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.uiColorPalette">UiColorPalette</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference">QuicksightThemeConfigurationUiColorPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.dataColorPaletteInput">DataColorPaletteInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.sheetInput">SheetInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.typographyInput">TypographyInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.uiColorPaletteInput">UiColorPaletteInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataColorPalette`<sup>Required</sup> <a name="DataColorPalette" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.dataColorPalette"></a>

```go
func DataColorPalette() QuicksightThemeConfigurationDataColorPaletteOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference">QuicksightThemeConfigurationDataColorPaletteOutputReference</a>

---

##### `Sheet`<sup>Required</sup> <a name="Sheet" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.sheet"></a>

```go
func Sheet() QuicksightThemeConfigurationSheetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference">QuicksightThemeConfigurationSheetOutputReference</a>

---

##### `Typography`<sup>Required</sup> <a name="Typography" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.typography"></a>

```go
func Typography() QuicksightThemeConfigurationTypographyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference">QuicksightThemeConfigurationTypographyOutputReference</a>

---

##### `UiColorPalette`<sup>Required</sup> <a name="UiColorPalette" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.uiColorPalette"></a>

```go
func UiColorPalette() QuicksightThemeConfigurationUiColorPaletteOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference">QuicksightThemeConfigurationUiColorPaletteOutputReference</a>

---

##### `DataColorPaletteInput`<sup>Optional</sup> <a name="DataColorPaletteInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.dataColorPaletteInput"></a>

```go
func DataColorPaletteInput() QuicksightThemeConfigurationDataColorPalette
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a>

---

##### `SheetInput`<sup>Optional</sup> <a name="SheetInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.sheetInput"></a>

```go
func SheetInput() QuicksightThemeConfigurationSheet
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a>

---

##### `TypographyInput`<sup>Optional</sup> <a name="TypographyInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.typographyInput"></a>

```go
func TypographyInput() QuicksightThemeConfigurationTypography
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a>

---

##### `UiColorPaletteInput`<sup>Optional</sup> <a name="UiColorPaletteInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.uiColorPaletteInput"></a>

```go
func UiColorPaletteInput() QuicksightThemeConfigurationUiColorPalette
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightThemeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a>

---


### QuicksightThemeConfigurationSheetOutputReference <a name="QuicksightThemeConfigurationSheetOutputReference" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

quicksighttheme.NewQuicksightThemeConfigurationSheetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightThemeConfigurationSheetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.putTile">PutTile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.putTileLayout">PutTileLayout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resetTile">ResetTile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resetTileLayout">ResetTileLayout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTile` <a name="PutTile" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.putTile"></a>

```go
func PutTile(value QuicksightThemeConfigurationSheetTile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.putTile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a>

---

##### `PutTileLayout` <a name="PutTileLayout" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.putTileLayout"></a>

```go
func PutTileLayout(value QuicksightThemeConfigurationSheetTileLayout)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.putTileLayout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a>

---

##### `ResetTile` <a name="ResetTile" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resetTile"></a>

```go
func ResetTile()
```

##### `ResetTileLayout` <a name="ResetTileLayout" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resetTileLayout"></a>

```go
func ResetTileLayout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tile">Tile</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference">QuicksightThemeConfigurationSheetTileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tileLayout">TileLayout</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference">QuicksightThemeConfigurationSheetTileLayoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tileInput">TileInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tileLayoutInput">TileLayoutInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Tile`<sup>Required</sup> <a name="Tile" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tile"></a>

```go
func Tile() QuicksightThemeConfigurationSheetTileOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference">QuicksightThemeConfigurationSheetTileOutputReference</a>

---

##### `TileLayout`<sup>Required</sup> <a name="TileLayout" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tileLayout"></a>

```go
func TileLayout() QuicksightThemeConfigurationSheetTileLayoutOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference">QuicksightThemeConfigurationSheetTileLayoutOutputReference</a>

---

##### `TileInput`<sup>Optional</sup> <a name="TileInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tileInput"></a>

```go
func TileInput() QuicksightThemeConfigurationSheetTile
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a>

---

##### `TileLayoutInput`<sup>Optional</sup> <a name="TileLayoutInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tileLayoutInput"></a>

```go
func TileLayoutInput() QuicksightThemeConfigurationSheetTileLayout
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightThemeConfigurationSheet
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a>

---


### QuicksightThemeConfigurationSheetTileBorderOutputReference <a name="QuicksightThemeConfigurationSheetTileBorderOutputReference" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

quicksighttheme.NewQuicksightThemeConfigurationSheetTileBorderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightThemeConfigurationSheetTileBorderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.resetShow">ResetShow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetShow` <a name="ResetShow" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.resetShow"></a>

```go
func ResetShow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.showInput">ShowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.show">Show</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ShowInput`<sup>Optional</sup> <a name="ShowInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.showInput"></a>

```go
func ShowInput() interface{}
```

- *Type:* interface{}

---

##### `Show`<sup>Required</sup> <a name="Show" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.show"></a>

```go
func Show() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightThemeConfigurationSheetTileBorder
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a>

---


### QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference <a name="QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

quicksighttheme.NewQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resetShow">ResetShow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetShow` <a name="ResetShow" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resetShow"></a>

```go
func ResetShow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.showInput">ShowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.show">Show</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ShowInput`<sup>Optional</sup> <a name="ShowInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.showInput"></a>

```go
func ShowInput() interface{}
```

- *Type:* interface{}

---

##### `Show`<sup>Required</sup> <a name="Show" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.show"></a>

```go
func Show() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightThemeConfigurationSheetTileLayoutGutter
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a>

---


### QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference <a name="QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

quicksighttheme.NewQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resetShow">ResetShow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetShow` <a name="ResetShow" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resetShow"></a>

```go
func ResetShow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.showInput">ShowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.show">Show</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ShowInput`<sup>Optional</sup> <a name="ShowInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.showInput"></a>

```go
func ShowInput() interface{}
```

- *Type:* interface{}

---

##### `Show`<sup>Required</sup> <a name="Show" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.show"></a>

```go
func Show() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightThemeConfigurationSheetTileLayoutMargin
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a>

---


### QuicksightThemeConfigurationSheetTileLayoutOutputReference <a name="QuicksightThemeConfigurationSheetTileLayoutOutputReference" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

quicksighttheme.NewQuicksightThemeConfigurationSheetTileLayoutOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightThemeConfigurationSheetTileLayoutOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.putGutter">PutGutter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.putMargin">PutMargin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resetGutter">ResetGutter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resetMargin">ResetMargin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGutter` <a name="PutGutter" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.putGutter"></a>

```go
func PutGutter(value QuicksightThemeConfigurationSheetTileLayoutGutter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.putGutter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a>

---

##### `PutMargin` <a name="PutMargin" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.putMargin"></a>

```go
func PutMargin(value QuicksightThemeConfigurationSheetTileLayoutMargin)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.putMargin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a>

---

##### `ResetGutter` <a name="ResetGutter" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resetGutter"></a>

```go
func ResetGutter()
```

##### `ResetMargin` <a name="ResetMargin" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resetMargin"></a>

```go
func ResetMargin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.gutter">Gutter</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference">QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.margin">Margin</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference">QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.gutterInput">GutterInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.marginInput">MarginInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Gutter`<sup>Required</sup> <a name="Gutter" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.gutter"></a>

```go
func Gutter() QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference">QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference</a>

---

##### `Margin`<sup>Required</sup> <a name="Margin" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.margin"></a>

```go
func Margin() QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference">QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference</a>

---

##### `GutterInput`<sup>Optional</sup> <a name="GutterInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.gutterInput"></a>

```go
func GutterInput() QuicksightThemeConfigurationSheetTileLayoutGutter
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a>

---

##### `MarginInput`<sup>Optional</sup> <a name="MarginInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.marginInput"></a>

```go
func MarginInput() QuicksightThemeConfigurationSheetTileLayoutMargin
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightThemeConfigurationSheetTileLayout
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a>

---


### QuicksightThemeConfigurationSheetTileOutputReference <a name="QuicksightThemeConfigurationSheetTileOutputReference" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

quicksighttheme.NewQuicksightThemeConfigurationSheetTileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightThemeConfigurationSheetTileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.putBorder">PutBorder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.resetBorder">ResetBorder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBorder` <a name="PutBorder" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.putBorder"></a>

```go
func PutBorder(value QuicksightThemeConfigurationSheetTileBorder)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.putBorder.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a>

---

##### `ResetBorder` <a name="ResetBorder" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.resetBorder"></a>

```go
func ResetBorder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.border">Border</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference">QuicksightThemeConfigurationSheetTileBorderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.borderInput">BorderInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Border`<sup>Required</sup> <a name="Border" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.border"></a>

```go
func Border() QuicksightThemeConfigurationSheetTileBorderOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference">QuicksightThemeConfigurationSheetTileBorderOutputReference</a>

---

##### `BorderInput`<sup>Optional</sup> <a name="BorderInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.borderInput"></a>

```go
func BorderInput() QuicksightThemeConfigurationSheetTileBorder
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightThemeConfigurationSheetTile
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a>

---


### QuicksightThemeConfigurationTypographyFontFamiliesList <a name="QuicksightThemeConfigurationTypographyFontFamiliesList" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

quicksighttheme.NewQuicksightThemeConfigurationTypographyFontFamiliesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightThemeConfigurationTypographyFontFamiliesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.get"></a>

```go
func Get(index *f64) QuicksightThemeConfigurationTypographyFontFamiliesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightThemeConfigurationTypographyFontFamiliesOutputReference <a name="QuicksightThemeConfigurationTypographyFontFamiliesOutputReference" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

quicksighttheme.NewQuicksightThemeConfigurationTypographyFontFamiliesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightThemeConfigurationTypographyFontFamiliesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resetFontFamily">ResetFontFamily</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFontFamily` <a name="ResetFontFamily" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resetFontFamily"></a>

```go
func ResetFontFamily()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fontFamilyInput">FontFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fontFamily">FontFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FontFamilyInput`<sup>Optional</sup> <a name="FontFamilyInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fontFamilyInput"></a>

```go
func FontFamilyInput() *string
```

- *Type:* *string

---

##### `FontFamily`<sup>Required</sup> <a name="FontFamily" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fontFamily"></a>

```go
func FontFamily() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightThemeConfigurationTypographyOutputReference <a name="QuicksightThemeConfigurationTypographyOutputReference" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

quicksighttheme.NewQuicksightThemeConfigurationTypographyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightThemeConfigurationTypographyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.putFontFamilies">PutFontFamilies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.resetFontFamilies">ResetFontFamilies</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFontFamilies` <a name="PutFontFamilies" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.putFontFamilies"></a>

```go
func PutFontFamilies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.putFontFamilies.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFontFamilies` <a name="ResetFontFamilies" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.resetFontFamilies"></a>

```go
func ResetFontFamilies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.fontFamilies">FontFamilies</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList">QuicksightThemeConfigurationTypographyFontFamiliesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.fontFamiliesInput">FontFamiliesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FontFamilies`<sup>Required</sup> <a name="FontFamilies" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.fontFamilies"></a>

```go
func FontFamilies() QuicksightThemeConfigurationTypographyFontFamiliesList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList">QuicksightThemeConfigurationTypographyFontFamiliesList</a>

---

##### `FontFamiliesInput`<sup>Optional</sup> <a name="FontFamiliesInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.fontFamiliesInput"></a>

```go
func FontFamiliesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightThemeConfigurationTypography
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a>

---


### QuicksightThemeConfigurationUiColorPaletteOutputReference <a name="QuicksightThemeConfigurationUiColorPaletteOutputReference" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

quicksighttheme.NewQuicksightThemeConfigurationUiColorPaletteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightThemeConfigurationUiColorPaletteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetAccent">ResetAccent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetAccentForeground">ResetAccentForeground</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDanger">ResetDanger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDangerForeground">ResetDangerForeground</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDimensionForeground">ResetDimensionForeground</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetMeasure">ResetMeasure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetMeasureForeground">ResetMeasureForeground</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetPrimaryBackground">ResetPrimaryBackground</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetPrimaryForeground">ResetPrimaryForeground</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSecondaryBackground">ResetSecondaryBackground</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSecondaryForeground">ResetSecondaryForeground</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSuccess">ResetSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSuccessForeground">ResetSuccessForeground</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetWarning">ResetWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetWarningForeground">ResetWarningForeground</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccent` <a name="ResetAccent" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetAccent"></a>

```go
func ResetAccent()
```

##### `ResetAccentForeground` <a name="ResetAccentForeground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetAccentForeground"></a>

```go
func ResetAccentForeground()
```

##### `ResetDanger` <a name="ResetDanger" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDanger"></a>

```go
func ResetDanger()
```

##### `ResetDangerForeground` <a name="ResetDangerForeground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDangerForeground"></a>

```go
func ResetDangerForeground()
```

##### `ResetDimension` <a name="ResetDimension" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDimension"></a>

```go
func ResetDimension()
```

##### `ResetDimensionForeground` <a name="ResetDimensionForeground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDimensionForeground"></a>

```go
func ResetDimensionForeground()
```

##### `ResetMeasure` <a name="ResetMeasure" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetMeasure"></a>

```go
func ResetMeasure()
```

##### `ResetMeasureForeground` <a name="ResetMeasureForeground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetMeasureForeground"></a>

```go
func ResetMeasureForeground()
```

##### `ResetPrimaryBackground` <a name="ResetPrimaryBackground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetPrimaryBackground"></a>

```go
func ResetPrimaryBackground()
```

##### `ResetPrimaryForeground` <a name="ResetPrimaryForeground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetPrimaryForeground"></a>

```go
func ResetPrimaryForeground()
```

##### `ResetSecondaryBackground` <a name="ResetSecondaryBackground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSecondaryBackground"></a>

```go
func ResetSecondaryBackground()
```

##### `ResetSecondaryForeground` <a name="ResetSecondaryForeground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSecondaryForeground"></a>

```go
func ResetSecondaryForeground()
```

##### `ResetSuccess` <a name="ResetSuccess" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSuccess"></a>

```go
func ResetSuccess()
```

##### `ResetSuccessForeground` <a name="ResetSuccessForeground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSuccessForeground"></a>

```go
func ResetSuccessForeground()
```

##### `ResetWarning` <a name="ResetWarning" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetWarning"></a>

```go
func ResetWarning()
```

##### `ResetWarningForeground` <a name="ResetWarningForeground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetWarningForeground"></a>

```go
func ResetWarningForeground()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentForegroundInput">AccentForegroundInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentInput">AccentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerForegroundInput">DangerForegroundInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerInput">DangerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionForegroundInput">DimensionForegroundInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionInput">DimensionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureForegroundInput">MeasureForegroundInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureInput">MeasureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryBackgroundInput">PrimaryBackgroundInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryForegroundInput">PrimaryForegroundInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryBackgroundInput">SecondaryBackgroundInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryForegroundInput">SecondaryForegroundInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.successForegroundInput">SuccessForegroundInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.successInput">SuccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningForegroundInput">WarningForegroundInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningInput">WarningInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accent">Accent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentForeground">AccentForeground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.danger">Danger</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerForeground">DangerForeground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimension">Dimension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionForeground">DimensionForeground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measure">Measure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureForeground">MeasureForeground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryBackground">PrimaryBackground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryForeground">PrimaryForeground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryBackground">SecondaryBackground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryForeground">SecondaryForeground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.success">Success</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.successForeground">SuccessForeground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warning">Warning</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningForeground">WarningForeground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccentForegroundInput`<sup>Optional</sup> <a name="AccentForegroundInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentForegroundInput"></a>

```go
func AccentForegroundInput() *string
```

- *Type:* *string

---

##### `AccentInput`<sup>Optional</sup> <a name="AccentInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentInput"></a>

```go
func AccentInput() *string
```

- *Type:* *string

---

##### `DangerForegroundInput`<sup>Optional</sup> <a name="DangerForegroundInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerForegroundInput"></a>

```go
func DangerForegroundInput() *string
```

- *Type:* *string

---

##### `DangerInput`<sup>Optional</sup> <a name="DangerInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerInput"></a>

```go
func DangerInput() *string
```

- *Type:* *string

---

##### `DimensionForegroundInput`<sup>Optional</sup> <a name="DimensionForegroundInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionForegroundInput"></a>

```go
func DimensionForegroundInput() *string
```

- *Type:* *string

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionInput"></a>

```go
func DimensionInput() *string
```

- *Type:* *string

---

##### `MeasureForegroundInput`<sup>Optional</sup> <a name="MeasureForegroundInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureForegroundInput"></a>

```go
func MeasureForegroundInput() *string
```

- *Type:* *string

---

##### `MeasureInput`<sup>Optional</sup> <a name="MeasureInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureInput"></a>

```go
func MeasureInput() *string
```

- *Type:* *string

---

##### `PrimaryBackgroundInput`<sup>Optional</sup> <a name="PrimaryBackgroundInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryBackgroundInput"></a>

```go
func PrimaryBackgroundInput() *string
```

- *Type:* *string

---

##### `PrimaryForegroundInput`<sup>Optional</sup> <a name="PrimaryForegroundInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryForegroundInput"></a>

```go
func PrimaryForegroundInput() *string
```

- *Type:* *string

---

##### `SecondaryBackgroundInput`<sup>Optional</sup> <a name="SecondaryBackgroundInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryBackgroundInput"></a>

```go
func SecondaryBackgroundInput() *string
```

- *Type:* *string

---

##### `SecondaryForegroundInput`<sup>Optional</sup> <a name="SecondaryForegroundInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryForegroundInput"></a>

```go
func SecondaryForegroundInput() *string
```

- *Type:* *string

---

##### `SuccessForegroundInput`<sup>Optional</sup> <a name="SuccessForegroundInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.successForegroundInput"></a>

```go
func SuccessForegroundInput() *string
```

- *Type:* *string

---

##### `SuccessInput`<sup>Optional</sup> <a name="SuccessInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.successInput"></a>

```go
func SuccessInput() *string
```

- *Type:* *string

---

##### `WarningForegroundInput`<sup>Optional</sup> <a name="WarningForegroundInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningForegroundInput"></a>

```go
func WarningForegroundInput() *string
```

- *Type:* *string

---

##### `WarningInput`<sup>Optional</sup> <a name="WarningInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningInput"></a>

```go
func WarningInput() *string
```

- *Type:* *string

---

##### `Accent`<sup>Required</sup> <a name="Accent" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accent"></a>

```go
func Accent() *string
```

- *Type:* *string

---

##### `AccentForeground`<sup>Required</sup> <a name="AccentForeground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentForeground"></a>

```go
func AccentForeground() *string
```

- *Type:* *string

---

##### `Danger`<sup>Required</sup> <a name="Danger" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.danger"></a>

```go
func Danger() *string
```

- *Type:* *string

---

##### `DangerForeground`<sup>Required</sup> <a name="DangerForeground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerForeground"></a>

```go
func DangerForeground() *string
```

- *Type:* *string

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimension"></a>

```go
func Dimension() *string
```

- *Type:* *string

---

##### `DimensionForeground`<sup>Required</sup> <a name="DimensionForeground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionForeground"></a>

```go
func DimensionForeground() *string
```

- *Type:* *string

---

##### `Measure`<sup>Required</sup> <a name="Measure" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measure"></a>

```go
func Measure() *string
```

- *Type:* *string

---

##### `MeasureForeground`<sup>Required</sup> <a name="MeasureForeground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureForeground"></a>

```go
func MeasureForeground() *string
```

- *Type:* *string

---

##### `PrimaryBackground`<sup>Required</sup> <a name="PrimaryBackground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryBackground"></a>

```go
func PrimaryBackground() *string
```

- *Type:* *string

---

##### `PrimaryForeground`<sup>Required</sup> <a name="PrimaryForeground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryForeground"></a>

```go
func PrimaryForeground() *string
```

- *Type:* *string

---

##### `SecondaryBackground`<sup>Required</sup> <a name="SecondaryBackground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryBackground"></a>

```go
func SecondaryBackground() *string
```

- *Type:* *string

---

##### `SecondaryForeground`<sup>Required</sup> <a name="SecondaryForeground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryForeground"></a>

```go
func SecondaryForeground() *string
```

- *Type:* *string

---

##### `Success`<sup>Required</sup> <a name="Success" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.success"></a>

```go
func Success() *string
```

- *Type:* *string

---

##### `SuccessForeground`<sup>Required</sup> <a name="SuccessForeground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.successForeground"></a>

```go
func SuccessForeground() *string
```

- *Type:* *string

---

##### `Warning`<sup>Required</sup> <a name="Warning" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warning"></a>

```go
func Warning() *string
```

- *Type:* *string

---

##### `WarningForeground`<sup>Required</sup> <a name="WarningForeground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningForeground"></a>

```go
func WarningForeground() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightThemeConfigurationUiColorPalette
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a>

---


### QuicksightThemePermissionsList <a name="QuicksightThemePermissionsList" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

quicksighttheme.NewQuicksightThemePermissionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightThemePermissionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.get"></a>

```go
func Get(index *f64) QuicksightThemePermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightThemePermissionsOutputReference <a name="QuicksightThemePermissionsOutputReference" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

quicksighttheme.NewQuicksightThemePermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightThemePermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.actionsInput">ActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.principalInput">PrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.actionsInput"></a>

```go
func ActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.principalInput"></a>

```go
func PrincipalInput() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightThemeTimeoutsOutputReference <a name="QuicksightThemeTimeoutsOutputReference" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/quicksighttheme"

quicksighttheme.NewQuicksightThemeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightThemeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



