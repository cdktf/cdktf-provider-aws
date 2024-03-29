# `dataAwsBedrockCustomModel` Submodule <a name="`dataAwsBedrockCustomModel` Submodule" id="@cdktf/provider-aws.dataAwsBedrockCustomModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBedrockCustomModel <a name="DataAwsBedrockCustomModel" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/data-sources/bedrock_custom_model aws_bedrock_custom_model}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsbedrockcustommodel"

dataawsbedrockcustommodel.NewDataAwsBedrockCustomModel(scope Construct, id *string, config DataAwsBedrockCustomModelConfig) DataAwsBedrockCustomModel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig">DataAwsBedrockCustomModelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig">DataAwsBedrockCustomModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsBedrockCustomModel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsbedrockcustommodel"

dataawsbedrockcustommodel.DataAwsBedrockCustomModel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsbedrockcustommodel"

dataawsbedrockcustommodel.DataAwsBedrockCustomModel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsbedrockcustommodel"

dataawsbedrockcustommodel.DataAwsBedrockCustomModel_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsbedrockcustommodel"

dataawsbedrockcustommodel.DataAwsBedrockCustomModel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsBedrockCustomModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsBedrockCustomModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsBedrockCustomModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/data-sources/bedrock_custom_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsBedrockCustomModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.baseModelArn">BaseModelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.hyperparameters">Hyperparameters</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.jobArn">JobArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.jobName">JobName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.jobTags">JobTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.modelArn">ModelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.modelKmsKeyArn">ModelKmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.modelName">ModelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.modelTags">ModelTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.outputDataConfig">OutputDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList">DataAwsBedrockCustomModelOutputDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.trainingDataConfig">TrainingDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList">DataAwsBedrockCustomModelTrainingDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.trainingMetrics">TrainingMetrics</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList">DataAwsBedrockCustomModelTrainingMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.validationDataConfig">ValidationDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList">DataAwsBedrockCustomModelValidationDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.validationMetrics">ValidationMetrics</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList">DataAwsBedrockCustomModelValidationMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.modelIdInput">ModelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.modelId">ModelId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BaseModelArn`<sup>Required</sup> <a name="BaseModelArn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.baseModelArn"></a>

```go
func BaseModelArn() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Hyperparameters`<sup>Required</sup> <a name="Hyperparameters" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.hyperparameters"></a>

```go
func Hyperparameters() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JobArn`<sup>Required</sup> <a name="JobArn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.jobArn"></a>

```go
func JobArn() *string
```

- *Type:* *string

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.jobName"></a>

```go
func JobName() *string
```

- *Type:* *string

---

##### `JobTags`<sup>Required</sup> <a name="JobTags" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.jobTags"></a>

```go
func JobTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.modelArn"></a>

```go
func ModelArn() *string
```

- *Type:* *string

---

##### `ModelKmsKeyArn`<sup>Required</sup> <a name="ModelKmsKeyArn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.modelKmsKeyArn"></a>

```go
func ModelKmsKeyArn() *string
```

- *Type:* *string

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.modelName"></a>

```go
func ModelName() *string
```

- *Type:* *string

---

##### `ModelTags`<sup>Required</sup> <a name="ModelTags" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.modelTags"></a>

```go
func ModelTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `OutputDataConfig`<sup>Required</sup> <a name="OutputDataConfig" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.outputDataConfig"></a>

```go
func OutputDataConfig() DataAwsBedrockCustomModelOutputDataConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList">DataAwsBedrockCustomModelOutputDataConfigList</a>

---

##### `TrainingDataConfig`<sup>Required</sup> <a name="TrainingDataConfig" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.trainingDataConfig"></a>

```go
func TrainingDataConfig() DataAwsBedrockCustomModelTrainingDataConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList">DataAwsBedrockCustomModelTrainingDataConfigList</a>

---

##### `TrainingMetrics`<sup>Required</sup> <a name="TrainingMetrics" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.trainingMetrics"></a>

```go
func TrainingMetrics() DataAwsBedrockCustomModelTrainingMetricsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList">DataAwsBedrockCustomModelTrainingMetricsList</a>

---

##### `ValidationDataConfig`<sup>Required</sup> <a name="ValidationDataConfig" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.validationDataConfig"></a>

```go
func ValidationDataConfig() DataAwsBedrockCustomModelValidationDataConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList">DataAwsBedrockCustomModelValidationDataConfigList</a>

---

##### `ValidationMetrics`<sup>Required</sup> <a name="ValidationMetrics" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.validationMetrics"></a>

```go
func ValidationMetrics() DataAwsBedrockCustomModelValidationMetricsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList">DataAwsBedrockCustomModelValidationMetricsList</a>

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.modelIdInput"></a>

```go
func ModelIdInput() *string
```

- *Type:* *string

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.modelId"></a>

```go
func ModelId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBedrockCustomModelConfig <a name="DataAwsBedrockCustomModelConfig" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsbedrockcustommodel"

&dataawsbedrockcustommodel.DataAwsBedrockCustomModelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ModelId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.modelId">ModelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/data-sources/bedrock_custom_model#model_id DataAwsBedrockCustomModel#model_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelConfig.property.modelId"></a>

```go
ModelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.43.0/docs/data-sources/bedrock_custom_model#model_id DataAwsBedrockCustomModel#model_id}.

---

### DataAwsBedrockCustomModelOutputDataConfig <a name="DataAwsBedrockCustomModelOutputDataConfig" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsbedrockcustommodel"

&dataawsbedrockcustommodel.DataAwsBedrockCustomModelOutputDataConfig {

}
```


### DataAwsBedrockCustomModelTrainingDataConfig <a name="DataAwsBedrockCustomModelTrainingDataConfig" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsbedrockcustommodel"

&dataawsbedrockcustommodel.DataAwsBedrockCustomModelTrainingDataConfig {

}
```


### DataAwsBedrockCustomModelTrainingMetrics <a name="DataAwsBedrockCustomModelTrainingMetrics" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetrics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsbedrockcustommodel"

&dataawsbedrockcustommodel.DataAwsBedrockCustomModelTrainingMetrics {

}
```


### DataAwsBedrockCustomModelValidationDataConfig <a name="DataAwsBedrockCustomModelValidationDataConfig" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsbedrockcustommodel"

&dataawsbedrockcustommodel.DataAwsBedrockCustomModelValidationDataConfig {

}
```


### DataAwsBedrockCustomModelValidationDataConfigValidator <a name="DataAwsBedrockCustomModelValidationDataConfigValidator" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidator.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsbedrockcustommodel"

&dataawsbedrockcustommodel.DataAwsBedrockCustomModelValidationDataConfigValidator {

}
```


### DataAwsBedrockCustomModelValidationMetrics <a name="DataAwsBedrockCustomModelValidationMetrics" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetrics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsbedrockcustommodel"

&dataawsbedrockcustommodel.DataAwsBedrockCustomModelValidationMetrics {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsBedrockCustomModelOutputDataConfigList <a name="DataAwsBedrockCustomModelOutputDataConfigList" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsbedrockcustommodel"

dataawsbedrockcustommodel.NewDataAwsBedrockCustomModelOutputDataConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsBedrockCustomModelOutputDataConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.get"></a>

```go
func Get(index *f64) DataAwsBedrockCustomModelOutputDataConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsBedrockCustomModelOutputDataConfigOutputReference <a name="DataAwsBedrockCustomModelOutputDataConfigOutputReference" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsbedrockcustommodel"

dataawsbedrockcustommodel.NewDataAwsBedrockCustomModelOutputDataConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsBedrockCustomModelOutputDataConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfig">DataAwsBedrockCustomModelOutputDataConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsBedrockCustomModelOutputDataConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelOutputDataConfig">DataAwsBedrockCustomModelOutputDataConfig</a>

---


### DataAwsBedrockCustomModelTrainingDataConfigList <a name="DataAwsBedrockCustomModelTrainingDataConfigList" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsbedrockcustommodel"

dataawsbedrockcustommodel.NewDataAwsBedrockCustomModelTrainingDataConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsBedrockCustomModelTrainingDataConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.get"></a>

```go
func Get(index *f64) DataAwsBedrockCustomModelTrainingDataConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsBedrockCustomModelTrainingDataConfigOutputReference <a name="DataAwsBedrockCustomModelTrainingDataConfigOutputReference" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsbedrockcustommodel"

dataawsbedrockcustommodel.NewDataAwsBedrockCustomModelTrainingDataConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsBedrockCustomModelTrainingDataConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfig">DataAwsBedrockCustomModelTrainingDataConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsBedrockCustomModelTrainingDataConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingDataConfig">DataAwsBedrockCustomModelTrainingDataConfig</a>

---


### DataAwsBedrockCustomModelTrainingMetricsList <a name="DataAwsBedrockCustomModelTrainingMetricsList" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsbedrockcustommodel"

dataawsbedrockcustommodel.NewDataAwsBedrockCustomModelTrainingMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsBedrockCustomModelTrainingMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.get"></a>

```go
func Get(index *f64) DataAwsBedrockCustomModelTrainingMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsBedrockCustomModelTrainingMetricsOutputReference <a name="DataAwsBedrockCustomModelTrainingMetricsOutputReference" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsbedrockcustommodel"

dataawsbedrockcustommodel.NewDataAwsBedrockCustomModelTrainingMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsBedrockCustomModelTrainingMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.property.trainingLoss">TrainingLoss</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetrics">DataAwsBedrockCustomModelTrainingMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TrainingLoss`<sup>Required</sup> <a name="TrainingLoss" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.property.trainingLoss"></a>

```go
func TrainingLoss() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsBedrockCustomModelTrainingMetrics
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelTrainingMetrics">DataAwsBedrockCustomModelTrainingMetrics</a>

---


### DataAwsBedrockCustomModelValidationDataConfigList <a name="DataAwsBedrockCustomModelValidationDataConfigList" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsbedrockcustommodel"

dataawsbedrockcustommodel.NewDataAwsBedrockCustomModelValidationDataConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsBedrockCustomModelValidationDataConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.get"></a>

```go
func Get(index *f64) DataAwsBedrockCustomModelValidationDataConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsBedrockCustomModelValidationDataConfigOutputReference <a name="DataAwsBedrockCustomModelValidationDataConfigOutputReference" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsbedrockcustommodel"

dataawsbedrockcustommodel.NewDataAwsBedrockCustomModelValidationDataConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsBedrockCustomModelValidationDataConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.property.validator">Validator</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList">DataAwsBedrockCustomModelValidationDataConfigValidatorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfig">DataAwsBedrockCustomModelValidationDataConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Validator`<sup>Required</sup> <a name="Validator" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.property.validator"></a>

```go
func Validator() DataAwsBedrockCustomModelValidationDataConfigValidatorList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList">DataAwsBedrockCustomModelValidationDataConfigValidatorList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsBedrockCustomModelValidationDataConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfig">DataAwsBedrockCustomModelValidationDataConfig</a>

---


### DataAwsBedrockCustomModelValidationDataConfigValidatorList <a name="DataAwsBedrockCustomModelValidationDataConfigValidatorList" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsbedrockcustommodel"

dataawsbedrockcustommodel.NewDataAwsBedrockCustomModelValidationDataConfigValidatorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsBedrockCustomModelValidationDataConfigValidatorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.get"></a>

```go
func Get(index *f64) DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference <a name="DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsbedrockcustommodel"

dataawsbedrockcustommodel.NewDataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidator">DataAwsBedrockCustomModelValidationDataConfigValidator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsBedrockCustomModelValidationDataConfigValidator
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationDataConfigValidator">DataAwsBedrockCustomModelValidationDataConfigValidator</a>

---


### DataAwsBedrockCustomModelValidationMetricsList <a name="DataAwsBedrockCustomModelValidationMetricsList" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsbedrockcustommodel"

dataawsbedrockcustommodel.NewDataAwsBedrockCustomModelValidationMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsBedrockCustomModelValidationMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.get"></a>

```go
func Get(index *f64) DataAwsBedrockCustomModelValidationMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsBedrockCustomModelValidationMetricsOutputReference <a name="DataAwsBedrockCustomModelValidationMetricsOutputReference" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsbedrockcustommodel"

dataawsbedrockcustommodel.NewDataAwsBedrockCustomModelValidationMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsBedrockCustomModelValidationMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.property.validationLoss">ValidationLoss</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetrics">DataAwsBedrockCustomModelValidationMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValidationLoss`<sup>Required</sup> <a name="ValidationLoss" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.property.validationLoss"></a>

```go
func ValidationLoss() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsBedrockCustomModelValidationMetrics
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockCustomModel.DataAwsBedrockCustomModelValidationMetrics">DataAwsBedrockCustomModelValidationMetrics</a>

---



