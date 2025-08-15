# `dataAwsBedrockInferenceProfiles` Submodule <a name="`dataAwsBedrockInferenceProfiles` Submodule" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBedrockInferenceProfiles <a name="DataAwsBedrockInferenceProfiles" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/bedrock_inference_profiles aws_bedrock_inference_profiles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsbedrockinferenceprofiles"

dataawsbedrockinferenceprofiles.NewDataAwsBedrockInferenceProfiles(scope Construct, id *string, config DataAwsBedrockInferenceProfilesConfig) DataAwsBedrockInferenceProfiles
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig">DataAwsBedrockInferenceProfilesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig">DataAwsBedrockInferenceProfilesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsBedrockInferenceProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsbedrockinferenceprofiles"

dataawsbedrockinferenceprofiles.DataAwsBedrockInferenceProfiles_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsbedrockinferenceprofiles"

dataawsbedrockinferenceprofiles.DataAwsBedrockInferenceProfiles_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsbedrockinferenceprofiles"

dataawsbedrockinferenceprofiles.DataAwsBedrockInferenceProfiles_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsbedrockinferenceprofiles"

dataawsbedrockinferenceprofiles.DataAwsBedrockInferenceProfiles_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsBedrockInferenceProfiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsBedrockInferenceProfiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsBedrockInferenceProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/bedrock_inference_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsBedrockInferenceProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.inferenceProfileSummaries">InferenceProfileSummaries</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList">DataAwsBedrockInferenceProfilesInferenceProfileSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InferenceProfileSummaries`<sup>Required</sup> <a name="InferenceProfileSummaries" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.inferenceProfileSummaries"></a>

```go
func InferenceProfileSummaries() DataAwsBedrockInferenceProfilesInferenceProfileSummariesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList">DataAwsBedrockInferenceProfilesInferenceProfileSummariesList</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfiles.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBedrockInferenceProfilesConfig <a name="DataAwsBedrockInferenceProfilesConfig" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsbedrockinferenceprofiles"

&dataawsbedrockinferenceprofiles.DataAwsBedrockInferenceProfilesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Region: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/bedrock_inference_profiles#type DataAwsBedrockInferenceProfiles#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/bedrock_inference_profiles#region DataAwsBedrockInferenceProfiles#region}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/data-sources/bedrock_inference_profiles#type DataAwsBedrockInferenceProfiles#type}.

---

### DataAwsBedrockInferenceProfilesInferenceProfileSummaries <a name="DataAwsBedrockInferenceProfilesInferenceProfileSummaries" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummaries.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsbedrockinferenceprofiles"

&dataawsbedrockinferenceprofiles.DataAwsBedrockInferenceProfilesInferenceProfileSummaries {

}
```


### DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels <a name="DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsbedrockinferenceprofiles"

&dataawsbedrockinferenceprofiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsBedrockInferenceProfilesInferenceProfileSummariesList <a name="DataAwsBedrockInferenceProfilesInferenceProfileSummariesList" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsbedrockinferenceprofiles"

dataawsbedrockinferenceprofiles.NewDataAwsBedrockInferenceProfilesInferenceProfileSummariesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsBedrockInferenceProfilesInferenceProfileSummariesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.get"></a>

```go
func Get(index *f64) DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList <a name="DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsbedrockinferenceprofiles"

dataawsbedrockinferenceprofiles.NewDataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.get"></a>

```go
func Get(index *f64) DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference <a name="DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsbedrockinferenceprofiles"

dataawsbedrockinferenceprofiles.NewDataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.property.modelArn">ModelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels">DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.property.modelArn"></a>

```go
func ModelArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels">DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels</a>

---


### DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference <a name="DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsbedrockinferenceprofiles"

dataawsbedrockinferenceprofiles.NewDataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.inferenceProfileArn">InferenceProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.inferenceProfileId">InferenceProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.inferenceProfileName">InferenceProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.models">Models</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList">DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummaries">DataAwsBedrockInferenceProfilesInferenceProfileSummaries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InferenceProfileArn`<sup>Required</sup> <a name="InferenceProfileArn" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.inferenceProfileArn"></a>

```go
func InferenceProfileArn() *string
```

- *Type:* *string

---

##### `InferenceProfileId`<sup>Required</sup> <a name="InferenceProfileId" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.inferenceProfileId"></a>

```go
func InferenceProfileId() *string
```

- *Type:* *string

---

##### `InferenceProfileName`<sup>Required</sup> <a name="InferenceProfileName" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.inferenceProfileName"></a>

```go
func InferenceProfileName() *string
```

- *Type:* *string

---

##### `Models`<sup>Required</sup> <a name="Models" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.models"></a>

```go
func Models() DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList">DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsBedrockInferenceProfilesInferenceProfileSummaries
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockInferenceProfiles.DataAwsBedrockInferenceProfilesInferenceProfileSummaries">DataAwsBedrockInferenceProfilesInferenceProfileSummaries</a>

---



