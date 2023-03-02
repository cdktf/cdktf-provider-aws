# `dataAwsKinesisStreamConsumer` Submodule <a name="`dataAwsKinesisStreamConsumer` Submodule" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsKinesisStreamConsumer <a name="DataAwsKinesisStreamConsumer" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer aws_kinesis_stream_consumer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskinesisstreamconsumer"

dataawskinesisstreamconsumer.NewDataAwsKinesisStreamConsumer(scope Construct, id *string, config DataAwsKinesisStreamConsumerConfig) DataAwsKinesisStreamConsumer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig">DataAwsKinesisStreamConsumerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig">DataAwsKinesisStreamConsumerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetArn` <a name="ResetArn" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.resetArn"></a>

```go
func ResetArn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskinesisstreamconsumer"

dataawskinesisstreamconsumer.DataAwsKinesisStreamConsumer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskinesisstreamconsumer"

dataawskinesisstreamconsumer.DataAwsKinesisStreamConsumer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskinesisstreamconsumer"

dataawskinesisstreamconsumer.DataAwsKinesisStreamConsumer_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.streamArnInput">StreamArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.streamArn">StreamArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StreamArnInput`<sup>Optional</sup> <a name="StreamArnInput" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.streamArnInput"></a>

```go
func StreamArnInput() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.streamArn"></a>

```go
func StreamArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsKinesisStreamConsumerConfig <a name="DataAwsKinesisStreamConsumerConfig" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawskinesisstreamconsumer"

&dataawskinesisstreamconsumer.DataAwsKinesisStreamConsumerConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	StreamArn: *string,
	Arn: *string,
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.streamArn">StreamArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer#stream_arn DataAwsKinesisStreamConsumer#stream_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer#arn DataAwsKinesisStreamConsumer#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer#id DataAwsKinesisStreamConsumer#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer#name DataAwsKinesisStreamConsumer#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.streamArn"></a>

```go
StreamArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer#stream_arn DataAwsKinesisStreamConsumer#stream_arn}.

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer#arn DataAwsKinesisStreamConsumer#arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer#id DataAwsKinesisStreamConsumer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer#name DataAwsKinesisStreamConsumer#name}.

---



