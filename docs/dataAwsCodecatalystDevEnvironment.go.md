# `dataAwsCodecatalystDevEnvironment` Submodule <a name="`dataAwsCodecatalystDevEnvironment` Submodule" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCodecatalystDevEnvironment <a name="DataAwsCodecatalystDevEnvironment" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/codecatalyst_dev_environment aws_codecatalyst_dev_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscodecatalystdevenvironment"

dataawscodecatalystdevenvironment.NewDataAwsCodecatalystDevEnvironment(scope Construct, id *string, config DataAwsCodecatalystDevEnvironmentConfig) DataAwsCodecatalystDevEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig">DataAwsCodecatalystDevEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig">DataAwsCodecatalystDevEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.putRepositories">PutRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetCreatorId">ResetCreatorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetRepositories">ResetRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutRepositories` <a name="PutRepositories" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.putRepositories"></a>

```go
func PutRepositories(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.putRepositories.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetCreatorId` <a name="ResetCreatorId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetCreatorId"></a>

```go
func ResetCreatorId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetId"></a>

```go
func ResetId()
```

##### `ResetRepositories` <a name="ResetRepositories" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetRepositories"></a>

```go
func ResetRepositories()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsCodecatalystDevEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscodecatalystdevenvironment"

dataawscodecatalystdevenvironment.DataAwsCodecatalystDevEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscodecatalystdevenvironment"

dataawscodecatalystdevenvironment.DataAwsCodecatalystDevEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscodecatalystdevenvironment"

dataawscodecatalystdevenvironment.DataAwsCodecatalystDevEnvironment_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscodecatalystdevenvironment"

dataawscodecatalystdevenvironment.DataAwsCodecatalystDevEnvironment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsCodecatalystDevEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsCodecatalystDevEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsCodecatalystDevEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/codecatalyst_dev_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsCodecatalystDevEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.ides">Ides</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList">DataAwsCodecatalystDevEnvironmentIdesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.inactivityTimeoutMinutes">InactivityTimeoutMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.persistentStorage">PersistentStorage</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList">DataAwsCodecatalystDevEnvironmentPersistentStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.repositories">Repositories</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList">DataAwsCodecatalystDevEnvironmentRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.statusReason">StatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.creatorIdInput">CreatorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.envIdInput">EnvIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.projectNameInput">ProjectNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.repositoriesInput">RepositoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.spaceNameInput">SpaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.creatorId">CreatorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.envId">EnvId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.projectName">ProjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.spaceName">SpaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Ides`<sup>Required</sup> <a name="Ides" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.ides"></a>

```go
func Ides() DataAwsCodecatalystDevEnvironmentIdesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList">DataAwsCodecatalystDevEnvironmentIdesList</a>

---

##### `InactivityTimeoutMinutes`<sup>Required</sup> <a name="InactivityTimeoutMinutes" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.inactivityTimeoutMinutes"></a>

```go
func InactivityTimeoutMinutes() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `PersistentStorage`<sup>Required</sup> <a name="PersistentStorage" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.persistentStorage"></a>

```go
func PersistentStorage() DataAwsCodecatalystDevEnvironmentPersistentStorageList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList">DataAwsCodecatalystDevEnvironmentPersistentStorageList</a>

---

##### `Repositories`<sup>Required</sup> <a name="Repositories" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.repositories"></a>

```go
func Repositories() DataAwsCodecatalystDevEnvironmentRepositoriesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList">DataAwsCodecatalystDevEnvironmentRepositoriesList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.statusReason"></a>

```go
func StatusReason() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `CreatorIdInput`<sup>Optional</sup> <a name="CreatorIdInput" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.creatorIdInput"></a>

```go
func CreatorIdInput() *string
```

- *Type:* *string

---

##### `EnvIdInput`<sup>Optional</sup> <a name="EnvIdInput" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.envIdInput"></a>

```go
func EnvIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectNameInput`<sup>Optional</sup> <a name="ProjectNameInput" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.projectNameInput"></a>

```go
func ProjectNameInput() *string
```

- *Type:* *string

---

##### `RepositoriesInput`<sup>Optional</sup> <a name="RepositoriesInput" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.repositoriesInput"></a>

```go
func RepositoriesInput() interface{}
```

- *Type:* interface{}

---

##### `SpaceNameInput`<sup>Optional</sup> <a name="SpaceNameInput" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.spaceNameInput"></a>

```go
func SpaceNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `CreatorId`<sup>Required</sup> <a name="CreatorId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.creatorId"></a>

```go
func CreatorId() *string
```

- *Type:* *string

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.envId"></a>

```go
func EnvId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.projectName"></a>

```go
func ProjectName() *string
```

- *Type:* *string

---

##### `SpaceName`<sup>Required</sup> <a name="SpaceName" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.spaceName"></a>

```go
func SpaceName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCodecatalystDevEnvironmentConfig <a name="DataAwsCodecatalystDevEnvironmentConfig" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscodecatalystdevenvironment"

&dataawscodecatalystdevenvironment.DataAwsCodecatalystDevEnvironmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EnvId: *string,
	ProjectName: *string,
	SpaceName: *string,
	Alias: *string,
	CreatorId: *string,
	Id: *string,
	Repositories: interface{},
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.envId">EnvId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/codecatalyst_dev_environment#env_id DataAwsCodecatalystDevEnvironment#env_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.projectName">ProjectName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/codecatalyst_dev_environment#project_name DataAwsCodecatalystDevEnvironment#project_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.spaceName">SpaceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/codecatalyst_dev_environment#space_name DataAwsCodecatalystDevEnvironment#space_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.alias">Alias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/codecatalyst_dev_environment#alias DataAwsCodecatalystDevEnvironment#alias}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.creatorId">CreatorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/codecatalyst_dev_environment#creator_id DataAwsCodecatalystDevEnvironment#creator_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/codecatalyst_dev_environment#id DataAwsCodecatalystDevEnvironment#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.repositories">Repositories</a></code> | <code>interface{}</code> | repositories block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/codecatalyst_dev_environment#tags DataAwsCodecatalystDevEnvironment#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.envId"></a>

```go
EnvId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/codecatalyst_dev_environment#env_id DataAwsCodecatalystDevEnvironment#env_id}.

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.projectName"></a>

```go
ProjectName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/codecatalyst_dev_environment#project_name DataAwsCodecatalystDevEnvironment#project_name}.

---

##### `SpaceName`<sup>Required</sup> <a name="SpaceName" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.spaceName"></a>

```go
SpaceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/codecatalyst_dev_environment#space_name DataAwsCodecatalystDevEnvironment#space_name}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/codecatalyst_dev_environment#alias DataAwsCodecatalystDevEnvironment#alias}.

---

##### `CreatorId`<sup>Optional</sup> <a name="CreatorId" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.creatorId"></a>

```go
CreatorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/codecatalyst_dev_environment#creator_id DataAwsCodecatalystDevEnvironment#creator_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/codecatalyst_dev_environment#id DataAwsCodecatalystDevEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Repositories`<sup>Optional</sup> <a name="Repositories" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.repositories"></a>

```go
Repositories interface{}
```

- *Type:* interface{}

repositories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/codecatalyst_dev_environment#repositories DataAwsCodecatalystDevEnvironment#repositories}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/data-sources/codecatalyst_dev_environment#tags DataAwsCodecatalystDevEnvironment#tags}.

---

### DataAwsCodecatalystDevEnvironmentIdes <a name="DataAwsCodecatalystDevEnvironmentIdes" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscodecatalystdevenvironment"

&dataawscodecatalystdevenvironment.DataAwsCodecatalystDevEnvironmentIdes {

}
```


### DataAwsCodecatalystDevEnvironmentPersistentStorage <a name="DataAwsCodecatalystDevEnvironmentPersistentStorage" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscodecatalystdevenvironment"

&dataawscodecatalystdevenvironment.DataAwsCodecatalystDevEnvironmentPersistentStorage {

}
```


### DataAwsCodecatalystDevEnvironmentRepositories <a name="DataAwsCodecatalystDevEnvironmentRepositories" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositories.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscodecatalystdevenvironment"

&dataawscodecatalystdevenvironment.DataAwsCodecatalystDevEnvironmentRepositories {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCodecatalystDevEnvironmentIdesList <a name="DataAwsCodecatalystDevEnvironmentIdesList" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscodecatalystdevenvironment"

dataawscodecatalystdevenvironment.NewDataAwsCodecatalystDevEnvironmentIdesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCodecatalystDevEnvironmentIdesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.get"></a>

```go
func Get(index *f64) DataAwsCodecatalystDevEnvironmentIdesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCodecatalystDevEnvironmentIdesOutputReference <a name="DataAwsCodecatalystDevEnvironmentIdesOutputReference" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscodecatalystdevenvironment"

dataawscodecatalystdevenvironment.NewDataAwsCodecatalystDevEnvironmentIdesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCodecatalystDevEnvironmentIdesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.runtime">Runtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdes">DataAwsCodecatalystDevEnvironmentIdes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.runtime"></a>

```go
func Runtime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCodecatalystDevEnvironmentIdes
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentIdes">DataAwsCodecatalystDevEnvironmentIdes</a>

---


### DataAwsCodecatalystDevEnvironmentPersistentStorageList <a name="DataAwsCodecatalystDevEnvironmentPersistentStorageList" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscodecatalystdevenvironment"

dataawscodecatalystdevenvironment.NewDataAwsCodecatalystDevEnvironmentPersistentStorageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCodecatalystDevEnvironmentPersistentStorageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.get"></a>

```go
func Get(index *f64) DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference <a name="DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscodecatalystdevenvironment"

dataawscodecatalystdevenvironment.NewDataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorage">DataAwsCodecatalystDevEnvironmentPersistentStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCodecatalystDevEnvironmentPersistentStorage
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentPersistentStorage">DataAwsCodecatalystDevEnvironmentPersistentStorage</a>

---


### DataAwsCodecatalystDevEnvironmentRepositoriesList <a name="DataAwsCodecatalystDevEnvironmentRepositoriesList" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscodecatalystdevenvironment"

dataawscodecatalystdevenvironment.NewDataAwsCodecatalystDevEnvironmentRepositoriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCodecatalystDevEnvironmentRepositoriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.get"></a>

```go
func Get(index *f64) DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference <a name="DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscodecatalystdevenvironment"

dataawscodecatalystdevenvironment.NewDataAwsCodecatalystDevEnvironmentRepositoriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.branchName">BranchName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.repositoryName">RepositoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.branchName"></a>

```go
func BranchName() *string
```

- *Type:* *string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.repositoryName"></a>

```go
func RepositoryName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCodecatalystDevEnvironment.DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



