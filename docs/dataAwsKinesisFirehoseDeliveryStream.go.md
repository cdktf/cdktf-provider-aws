# `dataAwsKinesisFirehoseDeliveryStream` Submodule <a name="`dataAwsKinesisFirehoseDeliveryStream` Submodule" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsKinesisFirehoseDeliveryStream <a name="DataAwsKinesisFirehoseDeliveryStream" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kinesis_firehose_delivery_stream aws_kinesis_firehose_delivery_stream}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawskinesisfirehosedeliverystream"

dataawskinesisfirehosedeliverystream.NewDataAwsKinesisFirehoseDeliveryStream(scope Construct, id *string, config DataAwsKinesisFirehoseDeliveryStreamConfig) DataAwsKinesisFirehoseDeliveryStream
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig">DataAwsKinesisFirehoseDeliveryStreamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig">DataAwsKinesisFirehoseDeliveryStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsKinesisFirehoseDeliveryStream resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawskinesisfirehosedeliverystream"

dataawskinesisfirehosedeliverystream.DataAwsKinesisFirehoseDeliveryStream_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawskinesisfirehosedeliverystream"

dataawskinesisfirehosedeliverystream.DataAwsKinesisFirehoseDeliveryStream_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawskinesisfirehosedeliverystream"

dataawskinesisfirehosedeliverystream.DataAwsKinesisFirehoseDeliveryStream_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawskinesisfirehosedeliverystream"

dataawskinesisfirehosedeliverystream.DataAwsKinesisFirehoseDeliveryStream_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsKinesisFirehoseDeliveryStream resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsKinesisFirehoseDeliveryStream to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsKinesisFirehoseDeliveryStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kinesis_firehose_delivery_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsKinesisFirehoseDeliveryStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStream.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsKinesisFirehoseDeliveryStreamConfig <a name="DataAwsKinesisFirehoseDeliveryStreamConfig" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawskinesisfirehosedeliverystream"

&dataawskinesisfirehosedeliverystream.DataAwsKinesisFirehoseDeliveryStreamConfig {
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
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kinesis_firehose_delivery_stream#name DataAwsKinesisFirehoseDeliveryStream#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kinesis_firehose_delivery_stream#id DataAwsKinesisFirehoseDeliveryStream#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kinesis_firehose_delivery_stream#name DataAwsKinesisFirehoseDeliveryStream#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kinesis_firehose_delivery_stream#id DataAwsKinesisFirehoseDeliveryStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsKinesisFirehoseDeliveryStream.DataAwsKinesisFirehoseDeliveryStreamConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/kinesis_firehose_delivery_stream#region DataAwsKinesisFirehoseDeliveryStream#region}

---



