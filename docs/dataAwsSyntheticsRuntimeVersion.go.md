# `dataAwsSyntheticsRuntimeVersion` Submodule <a name="`dataAwsSyntheticsRuntimeVersion` Submodule" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSyntheticsRuntimeVersion <a name="DataAwsSyntheticsRuntimeVersion" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/synthetics_runtime_version aws_synthetics_runtime_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssyntheticsruntimeversion"

dataawssyntheticsruntimeversion.NewDataAwsSyntheticsRuntimeVersion(scope Construct, id *string, config DataAwsSyntheticsRuntimeVersionConfig) DataAwsSyntheticsRuntimeVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig">DataAwsSyntheticsRuntimeVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig">DataAwsSyntheticsRuntimeVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.resetLatest">ResetLatest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetLatest` <a name="ResetLatest" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.resetLatest"></a>

```go
func ResetLatest()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSyntheticsRuntimeVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssyntheticsruntimeversion"

dataawssyntheticsruntimeversion.DataAwsSyntheticsRuntimeVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssyntheticsruntimeversion"

dataawssyntheticsruntimeversion.DataAwsSyntheticsRuntimeVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssyntheticsruntimeversion"

dataawssyntheticsruntimeversion.DataAwsSyntheticsRuntimeVersion_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssyntheticsruntimeversion"

dataawssyntheticsruntimeversion.DataAwsSyntheticsRuntimeVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsSyntheticsRuntimeVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsSyntheticsRuntimeVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsSyntheticsRuntimeVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/synthetics_runtime_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSyntheticsRuntimeVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.deprecationDate">DeprecationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.releaseDate">ReleaseDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.versionName">VersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.latestInput">LatestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.latest">Latest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DeprecationDate`<sup>Required</sup> <a name="DeprecationDate" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.deprecationDate"></a>

```go
func DeprecationDate() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ReleaseDate`<sup>Required</sup> <a name="ReleaseDate" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.releaseDate"></a>

```go
func ReleaseDate() *string
```

- *Type:* *string

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.versionName"></a>

```go
func VersionName() *string
```

- *Type:* *string

---

##### `LatestInput`<sup>Optional</sup> <a name="LatestInput" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.latestInput"></a>

```go
func LatestInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Latest`<sup>Required</sup> <a name="Latest" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.latest"></a>

```go
func Latest() interface{}
```

- *Type:* interface{}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSyntheticsRuntimeVersionConfig <a name="DataAwsSyntheticsRuntimeVersionConfig" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawssyntheticsruntimeversion"

&dataawssyntheticsruntimeversion.DataAwsSyntheticsRuntimeVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Prefix: *string,
	Latest: interface{},
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/synthetics_runtime_version#prefix DataAwsSyntheticsRuntimeVersion#prefix}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.latest">Latest</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/synthetics_runtime_version#latest DataAwsSyntheticsRuntimeVersion#latest}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/synthetics_runtime_version#version DataAwsSyntheticsRuntimeVersion#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/synthetics_runtime_version#prefix DataAwsSyntheticsRuntimeVersion#prefix}.

---

##### `Latest`<sup>Optional</sup> <a name="Latest" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.latest"></a>

```go
Latest interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/synthetics_runtime_version#latest DataAwsSyntheticsRuntimeVersion#latest}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/data-sources/synthetics_runtime_version#version DataAwsSyntheticsRuntimeVersion#version}.

---



