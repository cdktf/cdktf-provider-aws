# `dataAwsMskconnectCustomPlugin` Submodule <a name="`dataAwsMskconnectCustomPlugin` Submodule" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsMskconnectCustomPlugin <a name="DataAwsMskconnectCustomPlugin" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/mskconnect_custom_plugin aws_mskconnect_custom_plugin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsmskconnectcustomplugin"

dataawsmskconnectcustomplugin.NewDataAwsMskconnectCustomPlugin(scope Construct, id *string, config DataAwsMskconnectCustomPluginConfig) DataAwsMskconnectCustomPlugin
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig">DataAwsMskconnectCustomPluginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig">DataAwsMskconnectCustomPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsMskconnectCustomPlugin resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsmskconnectcustomplugin"

dataawsmskconnectcustomplugin.DataAwsMskconnectCustomPlugin_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsmskconnectcustomplugin"

dataawsmskconnectcustomplugin.DataAwsMskconnectCustomPlugin_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsmskconnectcustomplugin"

dataawsmskconnectcustomplugin.DataAwsMskconnectCustomPlugin_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsmskconnectcustomplugin"

dataawsmskconnectcustomplugin.DataAwsMskconnectCustomPlugin_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsMskconnectCustomPlugin resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsMskconnectCustomPlugin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsMskconnectCustomPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/mskconnect_custom_plugin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsMskconnectCustomPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.latestRevision">LatestRevision</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `LatestRevision`<sup>Required</sup> <a name="LatestRevision" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.latestRevision"></a>

```go
func LatestRevision() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsMskconnectCustomPluginConfig <a name="DataAwsMskconnectCustomPluginConfig" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsmskconnectcustomplugin"

&dataawsmskconnectcustomplugin.DataAwsMskconnectCustomPluginConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Region: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/mskconnect_custom_plugin#name DataAwsMskconnectCustomPlugin#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/mskconnect_custom_plugin#id DataAwsMskconnectCustomPlugin#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/mskconnect_custom_plugin#tags DataAwsMskconnectCustomPlugin#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/mskconnect_custom_plugin#name DataAwsMskconnectCustomPlugin#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/mskconnect_custom_plugin#id DataAwsMskconnectCustomPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/mskconnect_custom_plugin#region DataAwsMskconnectCustomPlugin#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/mskconnect_custom_plugin#tags DataAwsMskconnectCustomPlugin#tags}.

---



