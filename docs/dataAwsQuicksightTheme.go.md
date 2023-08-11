# `data_aws_quicksight_theme`

Refer to the Terraform Registory for docs: [`data_aws_quicksight_theme`](https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/data-sources/quicksight_theme).

# `dataAwsQuicksightTheme` Submodule <a name="`dataAwsQuicksightTheme` Submodule" id="@cdktf/provider-aws.dataAwsQuicksightTheme"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsQuicksightTheme <a name="DataAwsQuicksightTheme" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/data-sources/quicksight_theme aws_quicksight_theme}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.NewDataAwsQuicksightTheme(scope Construct, id *string, config DataAwsQuicksightThemeConfig) DataAwsQuicksightTheme
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig">DataAwsQuicksightThemeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig">DataAwsQuicksightThemeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.resetAwsAccountId"></a>

```go
func ResetAwsAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.DataAwsQuicksightTheme_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.DataAwsQuicksightTheme_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.DataAwsQuicksightTheme_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.baseThemeId">BaseThemeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList">DataAwsQuicksightThemeConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.permissions">Permissions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList">DataAwsQuicksightThemePermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.versionDescription">VersionDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.versionNumber">VersionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.themeIdInput">ThemeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.themeId">ThemeId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `BaseThemeId`<sup>Required</sup> <a name="BaseThemeId" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.baseThemeId"></a>

```go
func BaseThemeId() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.configuration"></a>

```go
func Configuration() DataAwsQuicksightThemeConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList">DataAwsQuicksightThemeConfigurationList</a>

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.permissions"></a>

```go
func Permissions() DataAwsQuicksightThemePermissionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList">DataAwsQuicksightThemePermissionsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `VersionDescription`<sup>Required</sup> <a name="VersionDescription" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.versionDescription"></a>

```go
func VersionDescription() *string
```

- *Type:* *string

---

##### `VersionNumber`<sup>Required</sup> <a name="VersionNumber" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.versionNumber"></a>

```go
func VersionNumber() *f64
```

- *Type:* *f64

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.awsAccountIdInput"></a>

```go
func AwsAccountIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ThemeIdInput`<sup>Optional</sup> <a name="ThemeIdInput" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.themeIdInput"></a>

```go
func ThemeIdInput() *string
```

- *Type:* *string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ThemeId`<sup>Required</sup> <a name="ThemeId" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.themeId"></a>

```go
func ThemeId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightTheme.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsQuicksightThemeConfig <a name="DataAwsQuicksightThemeConfig" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

&dataawsquicksighttheme.DataAwsQuicksightThemeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ThemeId: *string,
	AwsAccountId: *string,
	Id: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.themeId">ThemeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/data-sources/quicksight_theme#theme_id DataAwsQuicksightTheme#theme_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/data-sources/quicksight_theme#aws_account_id DataAwsQuicksightTheme#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/data-sources/quicksight_theme#id DataAwsQuicksightTheme#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/data-sources/quicksight_theme#tags DataAwsQuicksightTheme#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ThemeId`<sup>Required</sup> <a name="ThemeId" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.themeId"></a>

```go
ThemeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/data-sources/quicksight_theme#theme_id DataAwsQuicksightTheme#theme_id}.

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.awsAccountId"></a>

```go
AwsAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/data-sources/quicksight_theme#aws_account_id DataAwsQuicksightTheme#aws_account_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/data-sources/quicksight_theme#id DataAwsQuicksightTheme#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/data-sources/quicksight_theme#tags DataAwsQuicksightTheme#tags}.

---

### DataAwsQuicksightThemeConfiguration <a name="DataAwsQuicksightThemeConfiguration" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

&dataawsquicksighttheme.DataAwsQuicksightThemeConfiguration {

}
```


### DataAwsQuicksightThemeConfigurationDataColorPalette <a name="DataAwsQuicksightThemeConfigurationDataColorPalette" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPalette.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

&dataawsquicksighttheme.DataAwsQuicksightThemeConfigurationDataColorPalette {

}
```


### DataAwsQuicksightThemeConfigurationSheet <a name="DataAwsQuicksightThemeConfigurationSheet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

&dataawsquicksighttheme.DataAwsQuicksightThemeConfigurationSheet {

}
```


### DataAwsQuicksightThemeConfigurationSheetTile <a name="DataAwsQuicksightThemeConfigurationSheetTile" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

&dataawsquicksighttheme.DataAwsQuicksightThemeConfigurationSheetTile {

}
```


### DataAwsQuicksightThemeConfigurationSheetTileBorder <a name="DataAwsQuicksightThemeConfigurationSheetTileBorder" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorder.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

&dataawsquicksighttheme.DataAwsQuicksightThemeConfigurationSheetTileBorder {

}
```


### DataAwsQuicksightThemeConfigurationSheetTileLayout <a name="DataAwsQuicksightThemeConfigurationSheetTileLayout" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayout.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

&dataawsquicksighttheme.DataAwsQuicksightThemeConfigurationSheetTileLayout {

}
```


### DataAwsQuicksightThemeConfigurationSheetTileLayoutGutter <a name="DataAwsQuicksightThemeConfigurationSheetTileLayoutGutter" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

&dataawsquicksighttheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutter {

}
```


### DataAwsQuicksightThemeConfigurationSheetTileLayoutMargin <a name="DataAwsQuicksightThemeConfigurationSheetTileLayoutMargin" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMargin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMargin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

&dataawsquicksighttheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMargin {

}
```


### DataAwsQuicksightThemeConfigurationTypography <a name="DataAwsQuicksightThemeConfigurationTypography" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypography"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypography.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

&dataawsquicksighttheme.DataAwsQuicksightThemeConfigurationTypography {

}
```


### DataAwsQuicksightThemeConfigurationTypographyFontFamilies <a name="DataAwsQuicksightThemeConfigurationTypographyFontFamilies" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamilies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamilies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

&dataawsquicksighttheme.DataAwsQuicksightThemeConfigurationTypographyFontFamilies {

}
```


### DataAwsQuicksightThemeConfigurationUiColorPalette <a name="DataAwsQuicksightThemeConfigurationUiColorPalette" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPalette.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

&dataawsquicksighttheme.DataAwsQuicksightThemeConfigurationUiColorPalette {

}
```


### DataAwsQuicksightThemePermissions <a name="DataAwsQuicksightThemePermissions" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

&dataawsquicksighttheme.DataAwsQuicksightThemePermissions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsQuicksightThemeConfigurationDataColorPaletteList <a name="DataAwsQuicksightThemeConfigurationDataColorPaletteList" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.NewDataAwsQuicksightThemeConfigurationDataColorPaletteList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightThemeConfigurationDataColorPaletteList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference <a name="DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.NewDataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.property.colors">Colors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.property.emptyFillColor">EmptyFillColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.property.minMaxGradient">MinMaxGradient</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPalette">DataAwsQuicksightThemeConfigurationDataColorPalette</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Colors`<sup>Required</sup> <a name="Colors" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.property.colors"></a>

```go
func Colors() *[]*string
```

- *Type:* *[]*string

---

##### `EmptyFillColor`<sup>Required</sup> <a name="EmptyFillColor" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.property.emptyFillColor"></a>

```go
func EmptyFillColor() *string
```

- *Type:* *string

---

##### `MinMaxGradient`<sup>Required</sup> <a name="MinMaxGradient" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.property.minMaxGradient"></a>

```go
func MinMaxGradient() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightThemeConfigurationDataColorPalette
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPalette">DataAwsQuicksightThemeConfigurationDataColorPalette</a>

---


### DataAwsQuicksightThemeConfigurationList <a name="DataAwsQuicksightThemeConfigurationList" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.NewDataAwsQuicksightThemeConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightThemeConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightThemeConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightThemeConfigurationOutputReference <a name="DataAwsQuicksightThemeConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.NewDataAwsQuicksightThemeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightThemeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.dataColorPalette">DataColorPalette</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList">DataAwsQuicksightThemeConfigurationDataColorPaletteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.sheet">Sheet</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList">DataAwsQuicksightThemeConfigurationSheetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.typography">Typography</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList">DataAwsQuicksightThemeConfigurationTypographyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.uiColorPalette">UiColorPalette</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList">DataAwsQuicksightThemeConfigurationUiColorPaletteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfiguration">DataAwsQuicksightThemeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataColorPalette`<sup>Required</sup> <a name="DataColorPalette" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.dataColorPalette"></a>

```go
func DataColorPalette() DataAwsQuicksightThemeConfigurationDataColorPaletteList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationDataColorPaletteList">DataAwsQuicksightThemeConfigurationDataColorPaletteList</a>

---

##### `Sheet`<sup>Required</sup> <a name="Sheet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.sheet"></a>

```go
func Sheet() DataAwsQuicksightThemeConfigurationSheetList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList">DataAwsQuicksightThemeConfigurationSheetList</a>

---

##### `Typography`<sup>Required</sup> <a name="Typography" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.typography"></a>

```go
func Typography() DataAwsQuicksightThemeConfigurationTypographyList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList">DataAwsQuicksightThemeConfigurationTypographyList</a>

---

##### `UiColorPalette`<sup>Required</sup> <a name="UiColorPalette" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.uiColorPalette"></a>

```go
func UiColorPalette() DataAwsQuicksightThemeConfigurationUiColorPaletteList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList">DataAwsQuicksightThemeConfigurationUiColorPaletteList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightThemeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfiguration">DataAwsQuicksightThemeConfiguration</a>

---


### DataAwsQuicksightThemeConfigurationSheetList <a name="DataAwsQuicksightThemeConfigurationSheetList" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.NewDataAwsQuicksightThemeConfigurationSheetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightThemeConfigurationSheetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightThemeConfigurationSheetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightThemeConfigurationSheetOutputReference <a name="DataAwsQuicksightThemeConfigurationSheetOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.NewDataAwsQuicksightThemeConfigurationSheetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightThemeConfigurationSheetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.property.tile">Tile</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList">DataAwsQuicksightThemeConfigurationSheetTileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.property.tileLayout">TileLayout</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList">DataAwsQuicksightThemeConfigurationSheetTileLayoutList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheet">DataAwsQuicksightThemeConfigurationSheet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Tile`<sup>Required</sup> <a name="Tile" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.property.tile"></a>

```go
func Tile() DataAwsQuicksightThemeConfigurationSheetTileList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList">DataAwsQuicksightThemeConfigurationSheetTileList</a>

---

##### `TileLayout`<sup>Required</sup> <a name="TileLayout" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.property.tileLayout"></a>

```go
func TileLayout() DataAwsQuicksightThemeConfigurationSheetTileLayoutList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList">DataAwsQuicksightThemeConfigurationSheetTileLayoutList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightThemeConfigurationSheet
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheet">DataAwsQuicksightThemeConfigurationSheet</a>

---


### DataAwsQuicksightThemeConfigurationSheetTileBorderList <a name="DataAwsQuicksightThemeConfigurationSheetTileBorderList" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.NewDataAwsQuicksightThemeConfigurationSheetTileBorderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightThemeConfigurationSheetTileBorderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference <a name="DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.NewDataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.property.show">Show</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorder">DataAwsQuicksightThemeConfigurationSheetTileBorder</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Show`<sup>Required</sup> <a name="Show" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.property.show"></a>

```go
func Show() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightThemeConfigurationSheetTileBorder
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorder">DataAwsQuicksightThemeConfigurationSheetTileBorder</a>

---


### DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList <a name="DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.NewDataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference <a name="DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.NewDataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.show">Show</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutter">DataAwsQuicksightThemeConfigurationSheetTileLayoutGutter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Show`<sup>Required</sup> <a name="Show" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.show"></a>

```go
func Show() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightThemeConfigurationSheetTileLayoutGutter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutter">DataAwsQuicksightThemeConfigurationSheetTileLayoutGutter</a>

---


### DataAwsQuicksightThemeConfigurationSheetTileLayoutList <a name="DataAwsQuicksightThemeConfigurationSheetTileLayoutList" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.NewDataAwsQuicksightThemeConfigurationSheetTileLayoutList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightThemeConfigurationSheetTileLayoutList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList <a name="DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.NewDataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference <a name="DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.NewDataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.show">Show</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMargin">DataAwsQuicksightThemeConfigurationSheetTileLayoutMargin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Show`<sup>Required</sup> <a name="Show" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.show"></a>

```go
func Show() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightThemeConfigurationSheetTileLayoutMargin
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMargin">DataAwsQuicksightThemeConfigurationSheetTileLayoutMargin</a>

---


### DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference <a name="DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.NewDataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.gutter">Gutter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList">DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.margin">Margin</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList">DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayout">DataAwsQuicksightThemeConfigurationSheetTileLayout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Gutter`<sup>Required</sup> <a name="Gutter" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.gutter"></a>

```go
func Gutter() DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList">DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList</a>

---

##### `Margin`<sup>Required</sup> <a name="Margin" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.margin"></a>

```go
func Margin() DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList">DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightThemeConfigurationSheetTileLayout
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileLayout">DataAwsQuicksightThemeConfigurationSheetTileLayout</a>

---


### DataAwsQuicksightThemeConfigurationSheetTileList <a name="DataAwsQuicksightThemeConfigurationSheetTileList" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.NewDataAwsQuicksightThemeConfigurationSheetTileList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightThemeConfigurationSheetTileList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightThemeConfigurationSheetTileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightThemeConfigurationSheetTileOutputReference <a name="DataAwsQuicksightThemeConfigurationSheetTileOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.NewDataAwsQuicksightThemeConfigurationSheetTileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightThemeConfigurationSheetTileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.property.border">Border</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList">DataAwsQuicksightThemeConfigurationSheetTileBorderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTile">DataAwsQuicksightThemeConfigurationSheetTile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Border`<sup>Required</sup> <a name="Border" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.property.border"></a>

```go
func Border() DataAwsQuicksightThemeConfigurationSheetTileBorderList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileBorderList">DataAwsQuicksightThemeConfigurationSheetTileBorderList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTileOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightThemeConfigurationSheetTile
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationSheetTile">DataAwsQuicksightThemeConfigurationSheetTile</a>

---


### DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList <a name="DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.NewDataAwsQuicksightThemeConfigurationTypographyFontFamiliesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference <a name="DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.NewDataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fontFamily">FontFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamilies">DataAwsQuicksightThemeConfigurationTypographyFontFamilies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FontFamily`<sup>Required</sup> <a name="FontFamily" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fontFamily"></a>

```go
func FontFamily() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightThemeConfigurationTypographyFontFamilies
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamilies">DataAwsQuicksightThemeConfigurationTypographyFontFamilies</a>

---


### DataAwsQuicksightThemeConfigurationTypographyList <a name="DataAwsQuicksightThemeConfigurationTypographyList" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.NewDataAwsQuicksightThemeConfigurationTypographyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightThemeConfigurationTypographyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightThemeConfigurationTypographyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightThemeConfigurationTypographyOutputReference <a name="DataAwsQuicksightThemeConfigurationTypographyOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.NewDataAwsQuicksightThemeConfigurationTypographyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightThemeConfigurationTypographyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.property.fontFamilies">FontFamilies</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList">DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypography">DataAwsQuicksightThemeConfigurationTypography</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FontFamilies`<sup>Required</sup> <a name="FontFamilies" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.property.fontFamilies"></a>

```go
func FontFamilies() DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList">DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypographyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightThemeConfigurationTypography
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationTypography">DataAwsQuicksightThemeConfigurationTypography</a>

---


### DataAwsQuicksightThemeConfigurationUiColorPaletteList <a name="DataAwsQuicksightThemeConfigurationUiColorPaletteList" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.NewDataAwsQuicksightThemeConfigurationUiColorPaletteList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightThemeConfigurationUiColorPaletteList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference <a name="DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.NewDataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.accent">Accent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentForeground">AccentForeground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.danger">Danger</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerForeground">DangerForeground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimension">Dimension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionForeground">DimensionForeground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.measure">Measure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureForeground">MeasureForeground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryBackground">PrimaryBackground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryForeground">PrimaryForeground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryBackground">SecondaryBackground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryForeground">SecondaryForeground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.success">Success</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.successForeground">SuccessForeground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.warning">Warning</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningForeground">WarningForeground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPalette">DataAwsQuicksightThemeConfigurationUiColorPalette</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Accent`<sup>Required</sup> <a name="Accent" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.accent"></a>

```go
func Accent() *string
```

- *Type:* *string

---

##### `AccentForeground`<sup>Required</sup> <a name="AccentForeground" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentForeground"></a>

```go
func AccentForeground() *string
```

- *Type:* *string

---

##### `Danger`<sup>Required</sup> <a name="Danger" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.danger"></a>

```go
func Danger() *string
```

- *Type:* *string

---

##### `DangerForeground`<sup>Required</sup> <a name="DangerForeground" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerForeground"></a>

```go
func DangerForeground() *string
```

- *Type:* *string

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimension"></a>

```go
func Dimension() *string
```

- *Type:* *string

---

##### `DimensionForeground`<sup>Required</sup> <a name="DimensionForeground" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionForeground"></a>

```go
func DimensionForeground() *string
```

- *Type:* *string

---

##### `Measure`<sup>Required</sup> <a name="Measure" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.measure"></a>

```go
func Measure() *string
```

- *Type:* *string

---

##### `MeasureForeground`<sup>Required</sup> <a name="MeasureForeground" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureForeground"></a>

```go
func MeasureForeground() *string
```

- *Type:* *string

---

##### `PrimaryBackground`<sup>Required</sup> <a name="PrimaryBackground" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryBackground"></a>

```go
func PrimaryBackground() *string
```

- *Type:* *string

---

##### `PrimaryForeground`<sup>Required</sup> <a name="PrimaryForeground" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryForeground"></a>

```go
func PrimaryForeground() *string
```

- *Type:* *string

---

##### `SecondaryBackground`<sup>Required</sup> <a name="SecondaryBackground" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryBackground"></a>

```go
func SecondaryBackground() *string
```

- *Type:* *string

---

##### `SecondaryForeground`<sup>Required</sup> <a name="SecondaryForeground" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryForeground"></a>

```go
func SecondaryForeground() *string
```

- *Type:* *string

---

##### `Success`<sup>Required</sup> <a name="Success" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.success"></a>

```go
func Success() *string
```

- *Type:* *string

---

##### `SuccessForeground`<sup>Required</sup> <a name="SuccessForeground" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.successForeground"></a>

```go
func SuccessForeground() *string
```

- *Type:* *string

---

##### `Warning`<sup>Required</sup> <a name="Warning" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.warning"></a>

```go
func Warning() *string
```

- *Type:* *string

---

##### `WarningForeground`<sup>Required</sup> <a name="WarningForeground" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningForeground"></a>

```go
func WarningForeground() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightThemeConfigurationUiColorPalette
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemeConfigurationUiColorPalette">DataAwsQuicksightThemeConfigurationUiColorPalette</a>

---


### DataAwsQuicksightThemePermissionsList <a name="DataAwsQuicksightThemePermissionsList" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.NewDataAwsQuicksightThemePermissionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightThemePermissionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightThemePermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightThemePermissionsOutputReference <a name="DataAwsQuicksightThemePermissionsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/dataawsquicksighttheme"

dataawsquicksighttheme.NewDataAwsQuicksightThemePermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightThemePermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissions">DataAwsQuicksightThemePermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightThemePermissions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightTheme.DataAwsQuicksightThemePermissions">DataAwsQuicksightThemePermissions</a>

---



