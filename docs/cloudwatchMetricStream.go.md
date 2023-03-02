# `cloudwatchMetricStream` Submodule <a name="`cloudwatchMetricStream` Submodule" id="@cdktf/provider-aws.cloudwatchMetricStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchMetricStream <a name="CloudwatchMetricStream" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream aws_cloudwatch_metric_stream}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchmetricstream"

cloudwatchmetricstream.NewCloudwatchMetricStream(scope Construct, id *string, config CloudwatchMetricStreamConfig) CloudwatchMetricStream
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig">CloudwatchMetricStreamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig">CloudwatchMetricStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putExcludeFilter">PutExcludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putIncludeFilter">PutIncludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putStatisticsConfiguration">PutStatisticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetExcludeFilter">ResetExcludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetIncludeFilter">ResetIncludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetStatisticsConfiguration">ResetStatisticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutExcludeFilter` <a name="PutExcludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putExcludeFilter"></a>

```go
func PutExcludeFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putExcludeFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIncludeFilter` <a name="PutIncludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putIncludeFilter"></a>

```go
func PutIncludeFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putIncludeFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStatisticsConfiguration` <a name="PutStatisticsConfiguration" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putStatisticsConfiguration"></a>

```go
func PutStatisticsConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putStatisticsConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putTimeouts"></a>

```go
func PutTimeouts(value CloudwatchMetricStreamTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a>

---

##### `ResetExcludeFilter` <a name="ResetExcludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetExcludeFilter"></a>

```go
func ResetExcludeFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludeFilter` <a name="ResetIncludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetIncludeFilter"></a>

```go
func ResetIncludeFilter()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetName"></a>

```go
func ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetNamePrefix"></a>

```go
func ResetNamePrefix()
```

##### `ResetStatisticsConfiguration` <a name="ResetStatisticsConfiguration" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetStatisticsConfiguration"></a>

```go
func ResetStatisticsConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchmetricstream"

cloudwatchmetricstream.CloudwatchMetricStream_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchmetricstream"

cloudwatchmetricstream.CloudwatchMetricStream_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchmetricstream"

cloudwatchmetricstream.CloudwatchMetricStream_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilter">ExcludeFilter</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList">CloudwatchMetricStreamExcludeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilter">IncludeFilter</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList">CloudwatchMetricStreamIncludeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.lastUpdateDate">LastUpdateDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfiguration">StatisticsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList">CloudwatchMetricStreamStatisticsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference">CloudwatchMetricStreamTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilterInput">ExcludeFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArnInput">FirehoseArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilterInput">IncludeFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.namePrefixInput">NamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormatInput">OutputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfigurationInput">StatisticsConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArn">FirehoseArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormat">OutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `ExcludeFilter`<sup>Required</sup> <a name="ExcludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilter"></a>

```go
func ExcludeFilter() CloudwatchMetricStreamExcludeFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList">CloudwatchMetricStreamExcludeFilterList</a>

---

##### `IncludeFilter`<sup>Required</sup> <a name="IncludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilter"></a>

```go
func IncludeFilter() CloudwatchMetricStreamIncludeFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList">CloudwatchMetricStreamIncludeFilterList</a>

---

##### `LastUpdateDate`<sup>Required</sup> <a name="LastUpdateDate" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.lastUpdateDate"></a>

```go
func LastUpdateDate() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StatisticsConfiguration`<sup>Required</sup> <a name="StatisticsConfiguration" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfiguration"></a>

```go
func StatisticsConfiguration() CloudwatchMetricStreamStatisticsConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList">CloudwatchMetricStreamStatisticsConfigurationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.timeouts"></a>

```go
func Timeouts() CloudwatchMetricStreamTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference">CloudwatchMetricStreamTimeoutsOutputReference</a>

---

##### `ExcludeFilterInput`<sup>Optional</sup> <a name="ExcludeFilterInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilterInput"></a>

```go
func ExcludeFilterInput() interface{}
```

- *Type:* interface{}

---

##### `FirehoseArnInput`<sup>Optional</sup> <a name="FirehoseArnInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArnInput"></a>

```go
func FirehoseArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeFilterInput`<sup>Optional</sup> <a name="IncludeFilterInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilterInput"></a>

```go
func IncludeFilterInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.namePrefixInput"></a>

```go
func NamePrefixInput() *string
```

- *Type:* *string

---

##### `OutputFormatInput`<sup>Optional</sup> <a name="OutputFormatInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormatInput"></a>

```go
func OutputFormatInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `StatisticsConfigurationInput`<sup>Optional</sup> <a name="StatisticsConfigurationInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.statisticsConfigurationInput"></a>

```go
func StatisticsConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `FirehoseArn`<sup>Required</sup> <a name="FirehoseArn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArn"></a>

```go
func FirehoseArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormat"></a>

```go
func OutputFormat() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStream.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchMetricStreamConfig <a name="CloudwatchMetricStreamConfig" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchmetricstream"

&cloudwatchmetricstream.CloudwatchMetricStreamConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FirehoseArn: *string,
	OutputFormat: *string,
	RoleArn: *string,
	ExcludeFilter: interface{},
	Id: *string,
	IncludeFilter: interface{},
	Name: *string,
	NamePrefix: *string,
	StatisticsConfiguration: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.firehoseArn">FirehoseArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#firehose_arn CloudwatchMetricStream#firehose_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.outputFormat">OutputFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#output_format CloudwatchMetricStream#output_format}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#role_arn CloudwatchMetricStream#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.excludeFilter">ExcludeFilter</a></code> | <code>interface{}</code> | exclude_filter block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#id CloudwatchMetricStream#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.includeFilter">IncludeFilter</a></code> | <code>interface{}</code> | include_filter block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#name CloudwatchMetricStream#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#name_prefix CloudwatchMetricStream#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.statisticsConfiguration">StatisticsConfiguration</a></code> | <code>interface{}</code> | statistics_configuration block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#tags CloudwatchMetricStream#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#tags_all CloudwatchMetricStream#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FirehoseArn`<sup>Required</sup> <a name="FirehoseArn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.firehoseArn"></a>

```go
FirehoseArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#firehose_arn CloudwatchMetricStream#firehose_arn}.

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.outputFormat"></a>

```go
OutputFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#output_format CloudwatchMetricStream#output_format}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#role_arn CloudwatchMetricStream#role_arn}.

---

##### `ExcludeFilter`<sup>Optional</sup> <a name="ExcludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.excludeFilter"></a>

```go
ExcludeFilter interface{}
```

- *Type:* interface{}

exclude_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#exclude_filter CloudwatchMetricStream#exclude_filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#id CloudwatchMetricStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeFilter`<sup>Optional</sup> <a name="IncludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.includeFilter"></a>

```go
IncludeFilter interface{}
```

- *Type:* interface{}

include_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#include_filter CloudwatchMetricStream#include_filter}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#name CloudwatchMetricStream#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.namePrefix"></a>

```go
NamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#name_prefix CloudwatchMetricStream#name_prefix}.

---

##### `StatisticsConfiguration`<sup>Optional</sup> <a name="StatisticsConfiguration" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.statisticsConfiguration"></a>

```go
StatisticsConfiguration interface{}
```

- *Type:* interface{}

statistics_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#statistics_configuration CloudwatchMetricStream#statistics_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#tags CloudwatchMetricStream#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#tags_all CloudwatchMetricStream#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.timeouts"></a>

```go
Timeouts CloudwatchMetricStreamTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#timeouts CloudwatchMetricStream#timeouts}

---

### CloudwatchMetricStreamExcludeFilter <a name="CloudwatchMetricStreamExcludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchmetricstream"

&cloudwatchmetricstream.CloudwatchMetricStreamExcludeFilter {
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}. |

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}.

---

### CloudwatchMetricStreamIncludeFilter <a name="CloudwatchMetricStreamIncludeFilter" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchmetricstream"

&cloudwatchmetricstream.CloudwatchMetricStreamIncludeFilter {
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}. |

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}.

---

### CloudwatchMetricStreamStatisticsConfiguration <a name="CloudwatchMetricStreamStatisticsConfiguration" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchmetricstream"

&cloudwatchmetricstream.CloudwatchMetricStreamStatisticsConfiguration {
	AdditionalStatistics: *[]*string,
	IncludeMetric: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration.property.additionalStatistics">AdditionalStatistics</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#additional_statistics CloudwatchMetricStream#additional_statistics}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration.property.includeMetric">IncludeMetric</a></code> | <code>interface{}</code> | include_metric block. |

---

##### `AdditionalStatistics`<sup>Required</sup> <a name="AdditionalStatistics" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration.property.additionalStatistics"></a>

```go
AdditionalStatistics *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#additional_statistics CloudwatchMetricStream#additional_statistics}.

---

##### `IncludeMetric`<sup>Required</sup> <a name="IncludeMetric" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfiguration.property.includeMetric"></a>

```go
IncludeMetric interface{}
```

- *Type:* interface{}

include_metric block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#include_metric CloudwatchMetricStream#include_metric}

---

### CloudwatchMetricStreamStatisticsConfigurationIncludeMetric <a name="CloudwatchMetricStreamStatisticsConfigurationIncludeMetric" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchmetricstream"

&cloudwatchmetricstream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric {
	MetricName: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric.property.metricName">MetricName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#metric_name CloudwatchMetricStream#metric_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}. |

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric.property.metricName"></a>

```go
MetricName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#metric_name CloudwatchMetricStream#metric_name}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetric.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}.

---

### CloudwatchMetricStreamTimeouts <a name="CloudwatchMetricStreamTimeouts" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchmetricstream"

&cloudwatchmetricstream.CloudwatchMetricStreamTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#create CloudwatchMetricStream#create}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#delete CloudwatchMetricStream#delete}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#update CloudwatchMetricStream#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#create CloudwatchMetricStream#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#delete CloudwatchMetricStream#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_stream#update CloudwatchMetricStream#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchMetricStreamExcludeFilterList <a name="CloudwatchMetricStreamExcludeFilterList" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchmetricstream"

cloudwatchmetricstream.NewCloudwatchMetricStreamExcludeFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchMetricStreamExcludeFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.get"></a>

```go
func Get(index *f64) CloudwatchMetricStreamExcludeFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchMetricStreamExcludeFilterOutputReference <a name="CloudwatchMetricStreamExcludeFilterOutputReference" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchmetricstream"

cloudwatchmetricstream.NewCloudwatchMetricStreamExcludeFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchMetricStreamExcludeFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchMetricStreamIncludeFilterList <a name="CloudwatchMetricStreamIncludeFilterList" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchmetricstream"

cloudwatchmetricstream.NewCloudwatchMetricStreamIncludeFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchMetricStreamIncludeFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.get"></a>

```go
func Get(index *f64) CloudwatchMetricStreamIncludeFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchMetricStreamIncludeFilterOutputReference <a name="CloudwatchMetricStreamIncludeFilterOutputReference" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchmetricstream"

cloudwatchmetricstream.NewCloudwatchMetricStreamIncludeFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchMetricStreamIncludeFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList <a name="CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchmetricstream"

cloudwatchmetricstream.NewCloudwatchMetricStreamStatisticsConfigurationIncludeMetricList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.get"></a>

```go
func Get(index *f64) CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference <a name="CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchmetricstream"

cloudwatchmetricstream.NewCloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.metricNameInput"></a>

```go
func MetricNameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchMetricStreamStatisticsConfigurationList <a name="CloudwatchMetricStreamStatisticsConfigurationList" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchmetricstream"

cloudwatchmetricstream.NewCloudwatchMetricStreamStatisticsConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchMetricStreamStatisticsConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.get"></a>

```go
func Get(index *f64) CloudwatchMetricStreamStatisticsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchMetricStreamStatisticsConfigurationOutputReference <a name="CloudwatchMetricStreamStatisticsConfigurationOutputReference" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchmetricstream"

cloudwatchmetricstream.NewCloudwatchMetricStreamStatisticsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchMetricStreamStatisticsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.putIncludeMetric">PutIncludeMetric</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIncludeMetric` <a name="PutIncludeMetric" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.putIncludeMetric"></a>

```go
func PutIncludeMetric(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.putIncludeMetric.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.includeMetric">IncludeMetric</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList">CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.additionalStatisticsInput">AdditionalStatisticsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.includeMetricInput">IncludeMetricInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.additionalStatistics">AdditionalStatistics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeMetric`<sup>Required</sup> <a name="IncludeMetric" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.includeMetric"></a>

```go
func IncludeMetric() CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList">CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList</a>

---

##### `AdditionalStatisticsInput`<sup>Optional</sup> <a name="AdditionalStatisticsInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.additionalStatisticsInput"></a>

```go
func AdditionalStatisticsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeMetricInput`<sup>Optional</sup> <a name="IncludeMetricInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.includeMetricInput"></a>

```go
func IncludeMetricInput() interface{}
```

- *Type:* interface{}

---

##### `AdditionalStatistics`<sup>Required</sup> <a name="AdditionalStatistics" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.additionalStatistics"></a>

```go
func AdditionalStatistics() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamStatisticsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchMetricStreamTimeoutsOutputReference <a name="CloudwatchMetricStreamTimeoutsOutputReference" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatchmetricstream"

cloudwatchmetricstream.NewCloudwatchMetricStreamTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudwatchMetricStreamTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



