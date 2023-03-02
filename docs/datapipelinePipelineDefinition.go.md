# `datapipelinePipelineDefinition` Submodule <a name="`datapipelinePipelineDefinition` Submodule" id="@cdktf/provider-aws.datapipelinePipelineDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatapipelinePipelineDefinition <a name="DatapipelinePipelineDefinition" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition aws_datapipeline_pipeline_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datapipelinepipelinedefinition"

datapipelinepipelinedefinition.NewDatapipelinePipelineDefinition(scope Construct, id *string, config DatapipelinePipelineDefinitionConfig) DatapipelinePipelineDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig">DatapipelinePipelineDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig">DatapipelinePipelineDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putParameterObject">PutParameterObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putParameterValue">PutParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putPipelineObject">PutPipelineObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetParameterObject">ResetParameterObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetParameterValue">ResetParameterValue</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutParameterObject` <a name="PutParameterObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putParameterObject"></a>

```go
func PutParameterObject(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putParameterObject.parameter.value"></a>

- *Type:* interface{}

---

##### `PutParameterValue` <a name="PutParameterValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putParameterValue"></a>

```go
func PutParameterValue(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putParameterValue.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPipelineObject` <a name="PutPipelineObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putPipelineObject"></a>

```go
func PutPipelineObject(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.putPipelineObject.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetId"></a>

```go
func ResetId()
```

##### `ResetParameterObject` <a name="ResetParameterObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetParameterObject"></a>

```go
func ResetParameterObject()
```

##### `ResetParameterValue` <a name="ResetParameterValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.resetParameterValue"></a>

```go
func ResetParameterValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datapipelinepipelinedefinition"

datapipelinepipelinedefinition.DatapipelinePipelineDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datapipelinepipelinedefinition"

datapipelinepipelinedefinition.DatapipelinePipelineDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datapipelinepipelinedefinition"

datapipelinepipelinedefinition.DatapipelinePipelineDefinition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterObject">ParameterObject</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList">DatapipelinePipelineDefinitionParameterObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterValue">ParameterValue</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList">DatapipelinePipelineDefinitionParameterValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineObject">PipelineObject</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList">DatapipelinePipelineDefinitionPipelineObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterObjectInput">ParameterObjectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterValueInput">ParameterValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineIdInput">PipelineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineObjectInput">PipelineObjectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineId">PipelineId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ParameterObject`<sup>Required</sup> <a name="ParameterObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterObject"></a>

```go
func ParameterObject() DatapipelinePipelineDefinitionParameterObjectList
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList">DatapipelinePipelineDefinitionParameterObjectList</a>

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterValue"></a>

```go
func ParameterValue() DatapipelinePipelineDefinitionParameterValueList
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList">DatapipelinePipelineDefinitionParameterValueList</a>

---

##### `PipelineObject`<sup>Required</sup> <a name="PipelineObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineObject"></a>

```go
func PipelineObject() DatapipelinePipelineDefinitionPipelineObjectList
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList">DatapipelinePipelineDefinitionPipelineObjectList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ParameterObjectInput`<sup>Optional</sup> <a name="ParameterObjectInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterObjectInput"></a>

```go
func ParameterObjectInput() interface{}
```

- *Type:* interface{}

---

##### `ParameterValueInput`<sup>Optional</sup> <a name="ParameterValueInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.parameterValueInput"></a>

```go
func ParameterValueInput() interface{}
```

- *Type:* interface{}

---

##### `PipelineIdInput`<sup>Optional</sup> <a name="PipelineIdInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineIdInput"></a>

```go
func PipelineIdInput() *string
```

- *Type:* *string

---

##### `PipelineObjectInput`<sup>Optional</sup> <a name="PipelineObjectInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineObjectInput"></a>

```go
func PipelineObjectInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.pipelineId"></a>

```go
func PipelineId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatapipelinePipelineDefinitionConfig <a name="DatapipelinePipelineDefinitionConfig" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datapipelinepipelinedefinition"

&datapipelinepipelinedefinition.DatapipelinePipelineDefinitionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PipelineId: *string,
	PipelineObject: interface{},
	Id: *string,
	ParameterObject: interface{},
	ParameterValue: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.pipelineId">PipelineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#pipeline_id DatapipelinePipelineDefinition#pipeline_id}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.pipelineObject">PipelineObject</a></code> | <code>interface{}</code> | pipeline_object block. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.parameterObject">ParameterObject</a></code> | <code>interface{}</code> | parameter_object block. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.parameterValue">ParameterValue</a></code> | <code>interface{}</code> | parameter_value block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.pipelineId"></a>

```go
PipelineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#pipeline_id DatapipelinePipelineDefinition#pipeline_id}.

---

##### `PipelineObject`<sup>Required</sup> <a name="PipelineObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.pipelineObject"></a>

```go
PipelineObject interface{}
```

- *Type:* interface{}

pipeline_object block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#pipeline_object DatapipelinePipelineDefinition#pipeline_object}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ParameterObject`<sup>Optional</sup> <a name="ParameterObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.parameterObject"></a>

```go
ParameterObject interface{}
```

- *Type:* interface{}

parameter_object block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#parameter_object DatapipelinePipelineDefinition#parameter_object}

---

##### `ParameterValue`<sup>Optional</sup> <a name="ParameterValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionConfig.property.parameterValue"></a>

```go
ParameterValue interface{}
```

- *Type:* interface{}

parameter_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#parameter_value DatapipelinePipelineDefinition#parameter_value}

---

### DatapipelinePipelineDefinitionParameterObject <a name="DatapipelinePipelineDefinitionParameterObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datapipelinepipelinedefinition"

&datapipelinepipelinedefinition.DatapipelinePipelineDefinitionParameterObject {
	Id: *string,
	Attribute: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject.property.attribute">Attribute</a></code> | <code>interface{}</code> | attribute block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObject.property.attribute"></a>

```go
Attribute interface{}
```

- *Type:* interface{}

attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#attribute DatapipelinePipelineDefinition#attribute}

---

### DatapipelinePipelineDefinitionParameterObjectAttribute <a name="DatapipelinePipelineDefinitionParameterObjectAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datapipelinepipelinedefinition"

&datapipelinepipelinedefinition.DatapipelinePipelineDefinitionParameterObjectAttribute {
	Key: *string,
	StringValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#key DatapipelinePipelineDefinition#key}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute.property.stringValue">StringValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#key DatapipelinePipelineDefinition#key}.

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttribute.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}.

---

### DatapipelinePipelineDefinitionParameterValue <a name="DatapipelinePipelineDefinitionParameterValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datapipelinepipelinedefinition"

&datapipelinepipelinedefinition.DatapipelinePipelineDefinitionParameterValue {
	Id: *string,
	StringValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue.property.stringValue">StringValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValue.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}.

---

### DatapipelinePipelineDefinitionPipelineObject <a name="DatapipelinePipelineDefinitionPipelineObject" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datapipelinepipelinedefinition"

&datapipelinepipelinedefinition.DatapipelinePipelineDefinitionPipelineObject {
	Id: *string,
	Name: *string,
	Field: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#name DatapipelinePipelineDefinition#name}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.property.field">Field</a></code> | <code>interface{}</code> | field block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#name DatapipelinePipelineDefinition#name}.

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObject.property.field"></a>

```go
Field interface{}
```

- *Type:* interface{}

field block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#field DatapipelinePipelineDefinition#field}

---

### DatapipelinePipelineDefinitionPipelineObjectField <a name="DatapipelinePipelineDefinitionPipelineObjectField" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datapipelinepipelinedefinition"

&datapipelinepipelinedefinition.DatapipelinePipelineDefinitionPipelineObjectField {
	Key: *string,
	RefValue: *string,
	StringValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#key DatapipelinePipelineDefinition#key}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.property.refValue">RefValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#ref_value DatapipelinePipelineDefinition#ref_value}. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.property.stringValue">StringValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#key DatapipelinePipelineDefinition#key}.

---

##### `RefValue`<sup>Optional</sup> <a name="RefValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.property.refValue"></a>

```go
RefValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#ref_value DatapipelinePipelineDefinition#ref_value}.

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectField.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatapipelinePipelineDefinitionParameterObjectAttributeList <a name="DatapipelinePipelineDefinitionParameterObjectAttributeList" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datapipelinepipelinedefinition"

datapipelinepipelinedefinition.NewDatapipelinePipelineDefinitionParameterObjectAttributeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatapipelinePipelineDefinitionParameterObjectAttributeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.get"></a>

```go
func Get(index *f64) DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference <a name="DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datapipelinepipelinedefinition"

datapipelinepipelinedefinition.NewDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatapipelinePipelineDefinitionParameterObjectList <a name="DatapipelinePipelineDefinitionParameterObjectList" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datapipelinepipelinedefinition"

datapipelinepipelinedefinition.NewDatapipelinePipelineDefinitionParameterObjectList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatapipelinePipelineDefinitionParameterObjectList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.get"></a>

```go
func Get(index *f64) DatapipelinePipelineDefinitionParameterObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatapipelinePipelineDefinitionParameterObjectOutputReference <a name="DatapipelinePipelineDefinitionParameterObjectOutputReference" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datapipelinepipelinedefinition"

datapipelinepipelinedefinition.NewDatapipelinePipelineDefinitionParameterObjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatapipelinePipelineDefinitionParameterObjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.putAttribute">PutAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttribute` <a name="PutAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.putAttribute"></a>

```go
func PutAttribute(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.putAttribute.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.resetAttribute"></a>

```go
func ResetAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.attribute">Attribute</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList">DatapipelinePipelineDefinitionParameterObjectAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.attributeInput">AttributeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.attribute"></a>

```go
func Attribute() DatapipelinePipelineDefinitionParameterObjectAttributeList
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectAttributeList">DatapipelinePipelineDefinitionParameterObjectAttributeList</a>

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.attributeInput"></a>

```go
func AttributeInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterObjectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatapipelinePipelineDefinitionParameterValueList <a name="DatapipelinePipelineDefinitionParameterValueList" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datapipelinepipelinedefinition"

datapipelinepipelinedefinition.NewDatapipelinePipelineDefinitionParameterValueList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatapipelinePipelineDefinitionParameterValueList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.get"></a>

```go
func Get(index *f64) DatapipelinePipelineDefinitionParameterValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatapipelinePipelineDefinitionParameterValueOutputReference <a name="DatapipelinePipelineDefinitionParameterValueOutputReference" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datapipelinepipelinedefinition"

datapipelinepipelinedefinition.NewDatapipelinePipelineDefinitionParameterValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatapipelinePipelineDefinitionParameterValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionParameterValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatapipelinePipelineDefinitionPipelineObjectFieldList <a name="DatapipelinePipelineDefinitionPipelineObjectFieldList" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datapipelinepipelinedefinition"

datapipelinepipelinedefinition.NewDatapipelinePipelineDefinitionPipelineObjectFieldList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatapipelinePipelineDefinitionPipelineObjectFieldList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.get"></a>

```go
func Get(index *f64) DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference <a name="DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datapipelinepipelinedefinition"

datapipelinepipelinedefinition.NewDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resetRefValue">ResetRefValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRefValue` <a name="ResetRefValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resetRefValue"></a>

```go
func ResetRefValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.resetStringValue"></a>

```go
func ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.refValueInput">RefValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.refValue">RefValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `RefValueInput`<sup>Optional</sup> <a name="RefValueInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.refValueInput"></a>

```go
func RefValueInput() *string
```

- *Type:* *string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `RefValue`<sup>Required</sup> <a name="RefValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.refValue"></a>

```go
func RefValue() *string
```

- *Type:* *string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatapipelinePipelineDefinitionPipelineObjectList <a name="DatapipelinePipelineDefinitionPipelineObjectList" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datapipelinepipelinedefinition"

datapipelinepipelinedefinition.NewDatapipelinePipelineDefinitionPipelineObjectList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatapipelinePipelineDefinitionPipelineObjectList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.get"></a>

```go
func Get(index *f64) DatapipelinePipelineDefinitionPipelineObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatapipelinePipelineDefinitionPipelineObjectOutputReference <a name="DatapipelinePipelineDefinitionPipelineObjectOutputReference" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datapipelinepipelinedefinition"

datapipelinepipelinedefinition.NewDatapipelinePipelineDefinitionPipelineObjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatapipelinePipelineDefinitionPipelineObjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.putField">PutField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.resetField">ResetField</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutField` <a name="PutField" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.putField"></a>

```go
func PutField(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.putField.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetField` <a name="ResetField" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.resetField"></a>

```go
func ResetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.field">Field</a></code> | <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList">DatapipelinePipelineDefinitionPipelineObjectFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.fieldInput">FieldInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.field"></a>

```go
func Field() DatapipelinePipelineDefinitionPipelineObjectFieldList
```

- *Type:* <a href="#@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectFieldList">DatapipelinePipelineDefinitionPipelineObjectFieldList</a>

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.fieldInput"></a>

```go
func FieldInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datapipelinePipelineDefinition.DatapipelinePipelineDefinitionPipelineObjectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



