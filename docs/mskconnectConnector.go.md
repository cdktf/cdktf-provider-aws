# `mskconnectConnector` Submodule <a name="`mskconnectConnector` Submodule" id="@cdktf/provider-aws.mskconnectConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskconnectConnector <a name="MskconnectConnector" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector aws_mskconnect_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

mskconnectconnector.NewMskconnectConnector(scope Construct, id *string, config MskconnectConnectorConfig) MskconnectConnector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig">MskconnectConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig">MskconnectConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putCapacity">PutCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaCluster">PutKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaClusterClientAuthentication">PutKafkaClusterClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaClusterEncryptionInTransit">PutKafkaClusterEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putLogDelivery">PutLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putPlugin">PutPlugin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putWorkerConfiguration">PutWorkerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetLogDelivery">ResetLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetWorkerConfiguration">ResetWorkerConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCapacity` <a name="PutCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putCapacity"></a>

```go
func PutCapacity(value MskconnectConnectorCapacity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a>

---

##### `PutKafkaCluster` <a name="PutKafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaCluster"></a>

```go
func PutKafkaCluster(value MskconnectConnectorKafkaCluster)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a>

---

##### `PutKafkaClusterClientAuthentication` <a name="PutKafkaClusterClientAuthentication" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaClusterClientAuthentication"></a>

```go
func PutKafkaClusterClientAuthentication(value MskconnectConnectorKafkaClusterClientAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaClusterClientAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a>

---

##### `PutKafkaClusterEncryptionInTransit` <a name="PutKafkaClusterEncryptionInTransit" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaClusterEncryptionInTransit"></a>

```go
func PutKafkaClusterEncryptionInTransit(value MskconnectConnectorKafkaClusterEncryptionInTransit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaClusterEncryptionInTransit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a>

---

##### `PutLogDelivery` <a name="PutLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putLogDelivery"></a>

```go
func PutLogDelivery(value MskconnectConnectorLogDelivery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a>

---

##### `PutPlugin` <a name="PutPlugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putPlugin"></a>

```go
func PutPlugin(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putPlugin.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putTimeouts"></a>

```go
func PutTimeouts(value MskconnectConnectorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts">MskconnectConnectorTimeouts</a>

---

##### `PutWorkerConfiguration` <a name="PutWorkerConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putWorkerConfiguration"></a>

```go
func PutWorkerConfiguration(value MskconnectConnectorWorkerConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putWorkerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetId"></a>

```go
func ResetId()
```

##### `ResetLogDelivery` <a name="ResetLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetLogDelivery"></a>

```go
func ResetLogDelivery()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWorkerConfiguration` <a name="ResetWorkerConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetWorkerConfiguration"></a>

```go
func ResetWorkerConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

mskconnectconnector.MskconnectConnector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

mskconnectconnector.MskconnectConnector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

mskconnectconnector.MskconnectConnector_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.capacity">Capacity</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference">MskconnectConnectorCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaCluster">KafkaCluster</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference">MskconnectConnectorKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterClientAuthentication">KafkaClusterClientAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference">MskconnectConnectorKafkaClusterClientAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterEncryptionInTransit">KafkaClusterEncryptionInTransit</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference">MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.logDelivery">LogDelivery</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference">MskconnectConnectorLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.plugin">Plugin</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList">MskconnectConnectorPluginList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference">MskconnectConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.workerConfiguration">WorkerConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference">MskconnectConnectorWorkerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.capacityInput">CapacityInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.connectorConfigurationInput">ConnectorConfigurationInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterClientAuthenticationInput">KafkaClusterClientAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterEncryptionInTransitInput">KafkaClusterEncryptionInTransitInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterInput">KafkaClusterInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaconnectVersionInput">KafkaconnectVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.logDeliveryInput">LogDeliveryInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.pluginInput">PluginInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.serviceExecutionRoleArnInput">ServiceExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.workerConfigurationInput">WorkerConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.connectorConfiguration">ConnectorConfiguration</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaconnectVersion">KafkaconnectVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.serviceExecutionRoleArn">ServiceExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.capacity"></a>

```go
func Capacity() MskconnectConnectorCapacityOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference">MskconnectConnectorCapacityOutputReference</a>

---

##### `KafkaCluster`<sup>Required</sup> <a name="KafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaCluster"></a>

```go
func KafkaCluster() MskconnectConnectorKafkaClusterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference">MskconnectConnectorKafkaClusterOutputReference</a>

---

##### `KafkaClusterClientAuthentication`<sup>Required</sup> <a name="KafkaClusterClientAuthentication" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterClientAuthentication"></a>

```go
func KafkaClusterClientAuthentication() MskconnectConnectorKafkaClusterClientAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference">MskconnectConnectorKafkaClusterClientAuthenticationOutputReference</a>

---

##### `KafkaClusterEncryptionInTransit`<sup>Required</sup> <a name="KafkaClusterEncryptionInTransit" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterEncryptionInTransit"></a>

```go
func KafkaClusterEncryptionInTransit() MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference">MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference</a>

---

##### `LogDelivery`<sup>Required</sup> <a name="LogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.logDelivery"></a>

```go
func LogDelivery() MskconnectConnectorLogDeliveryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference">MskconnectConnectorLogDeliveryOutputReference</a>

---

##### `Plugin`<sup>Required</sup> <a name="Plugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.plugin"></a>

```go
func Plugin() MskconnectConnectorPluginList
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList">MskconnectConnectorPluginList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.timeouts"></a>

```go
func Timeouts() MskconnectConnectorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference">MskconnectConnectorTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `WorkerConfiguration`<sup>Required</sup> <a name="WorkerConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.workerConfiguration"></a>

```go
func WorkerConfiguration() MskconnectConnectorWorkerConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference">MskconnectConnectorWorkerConfigurationOutputReference</a>

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.capacityInput"></a>

```go
func CapacityInput() MskconnectConnectorCapacity
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a>

---

##### `ConnectorConfigurationInput`<sup>Optional</sup> <a name="ConnectorConfigurationInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.connectorConfigurationInput"></a>

```go
func ConnectorConfigurationInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KafkaClusterClientAuthenticationInput`<sup>Optional</sup> <a name="KafkaClusterClientAuthenticationInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterClientAuthenticationInput"></a>

```go
func KafkaClusterClientAuthenticationInput() MskconnectConnectorKafkaClusterClientAuthentication
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a>

---

##### `KafkaClusterEncryptionInTransitInput`<sup>Optional</sup> <a name="KafkaClusterEncryptionInTransitInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterEncryptionInTransitInput"></a>

```go
func KafkaClusterEncryptionInTransitInput() MskconnectConnectorKafkaClusterEncryptionInTransit
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a>

---

##### `KafkaClusterInput`<sup>Optional</sup> <a name="KafkaClusterInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterInput"></a>

```go
func KafkaClusterInput() MskconnectConnectorKafkaCluster
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a>

---

##### `KafkaconnectVersionInput`<sup>Optional</sup> <a name="KafkaconnectVersionInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaconnectVersionInput"></a>

```go
func KafkaconnectVersionInput() *string
```

- *Type:* *string

---

##### `LogDeliveryInput`<sup>Optional</sup> <a name="LogDeliveryInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.logDeliveryInput"></a>

```go
func LogDeliveryInput() MskconnectConnectorLogDelivery
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PluginInput`<sup>Optional</sup> <a name="PluginInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.pluginInput"></a>

```go
func PluginInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceExecutionRoleArnInput`<sup>Optional</sup> <a name="ServiceExecutionRoleArnInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.serviceExecutionRoleArnInput"></a>

```go
func ServiceExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkerConfigurationInput`<sup>Optional</sup> <a name="WorkerConfigurationInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.workerConfigurationInput"></a>

```go
func WorkerConfigurationInput() MskconnectConnectorWorkerConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a>

---

##### `ConnectorConfiguration`<sup>Required</sup> <a name="ConnectorConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.connectorConfiguration"></a>

```go
func ConnectorConfiguration() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KafkaconnectVersion`<sup>Required</sup> <a name="KafkaconnectVersion" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaconnectVersion"></a>

```go
func KafkaconnectVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServiceExecutionRoleArn`<sup>Required</sup> <a name="ServiceExecutionRoleArn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.serviceExecutionRoleArn"></a>

```go
func ServiceExecutionRoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MskconnectConnectorCapacity <a name="MskconnectConnectorCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

&mskconnectconnector.MskconnectConnectorCapacity {
	Autoscaling: github.com/cdktf/cdktf-provider-aws-go/aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling,
	ProvisionedCapacity: github.com/cdktf/cdktf-provider-aws-go/aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity.property.autoscaling">Autoscaling</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity.property.provisionedCapacity">ProvisionedCapacity</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a></code> | provisioned_capacity block. |

---

##### `Autoscaling`<sup>Optional</sup> <a name="Autoscaling" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity.property.autoscaling"></a>

```go
Autoscaling MskconnectConnectorCapacityAutoscaling
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#autoscaling MskconnectConnector#autoscaling}

---

##### `ProvisionedCapacity`<sup>Optional</sup> <a name="ProvisionedCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity.property.provisionedCapacity"></a>

```go
ProvisionedCapacity MskconnectConnectorCapacityProvisionedCapacity
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a>

provisioned_capacity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#provisioned_capacity MskconnectConnector#provisioned_capacity}

---

### MskconnectConnectorCapacityAutoscaling <a name="MskconnectConnectorCapacityAutoscaling" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

&mskconnectconnector.MskconnectConnectorCapacityAutoscaling {
	MaxWorkerCount: *f64,
	MinWorkerCount: *f64,
	McuCount: *f64,
	ScaleInPolicy: github.com/cdktf/cdktf-provider-aws-go/aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy,
	ScaleOutPolicy: github.com/cdktf/cdktf-provider-aws-go/aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.maxWorkerCount">MaxWorkerCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#max_worker_count MskconnectConnector#max_worker_count}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.minWorkerCount">MinWorkerCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#min_worker_count MskconnectConnector#min_worker_count}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.mcuCount">McuCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#mcu_count MskconnectConnector#mcu_count}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.scaleInPolicy">ScaleInPolicy</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a></code> | scale_in_policy block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.scaleOutPolicy">ScaleOutPolicy</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a></code> | scale_out_policy block. |

---

##### `MaxWorkerCount`<sup>Required</sup> <a name="MaxWorkerCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.maxWorkerCount"></a>

```go
MaxWorkerCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#max_worker_count MskconnectConnector#max_worker_count}.

---

##### `MinWorkerCount`<sup>Required</sup> <a name="MinWorkerCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.minWorkerCount"></a>

```go
MinWorkerCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#min_worker_count MskconnectConnector#min_worker_count}.

---

##### `McuCount`<sup>Optional</sup> <a name="McuCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.mcuCount"></a>

```go
McuCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#mcu_count MskconnectConnector#mcu_count}.

---

##### `ScaleInPolicy`<sup>Optional</sup> <a name="ScaleInPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.scaleInPolicy"></a>

```go
ScaleInPolicy MskconnectConnectorCapacityAutoscalingScaleInPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a>

scale_in_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#scale_in_policy MskconnectConnector#scale_in_policy}

---

##### `ScaleOutPolicy`<sup>Optional</sup> <a name="ScaleOutPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.scaleOutPolicy"></a>

```go
ScaleOutPolicy MskconnectConnectorCapacityAutoscalingScaleOutPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a>

scale_out_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#scale_out_policy MskconnectConnector#scale_out_policy}

---

### MskconnectConnectorCapacityAutoscalingScaleInPolicy <a name="MskconnectConnectorCapacityAutoscalingScaleInPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

&mskconnectconnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy {
	CpuUtilizationPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy.property.cpuUtilizationPercentage">CpuUtilizationPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#cpu_utilization_percentage MskconnectConnector#cpu_utilization_percentage}. |

---

##### `CpuUtilizationPercentage`<sup>Optional</sup> <a name="CpuUtilizationPercentage" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy.property.cpuUtilizationPercentage"></a>

```go
CpuUtilizationPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#cpu_utilization_percentage MskconnectConnector#cpu_utilization_percentage}.

---

### MskconnectConnectorCapacityAutoscalingScaleOutPolicy <a name="MskconnectConnectorCapacityAutoscalingScaleOutPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

&mskconnectconnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy {
	CpuUtilizationPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy.property.cpuUtilizationPercentage">CpuUtilizationPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#cpu_utilization_percentage MskconnectConnector#cpu_utilization_percentage}. |

---

##### `CpuUtilizationPercentage`<sup>Optional</sup> <a name="CpuUtilizationPercentage" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy.property.cpuUtilizationPercentage"></a>

```go
CpuUtilizationPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#cpu_utilization_percentage MskconnectConnector#cpu_utilization_percentage}.

---

### MskconnectConnectorCapacityProvisionedCapacity <a name="MskconnectConnectorCapacityProvisionedCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

&mskconnectconnector.MskconnectConnectorCapacityProvisionedCapacity {
	WorkerCount: *f64,
	McuCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity.property.workerCount">WorkerCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#worker_count MskconnectConnector#worker_count}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity.property.mcuCount">McuCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#mcu_count MskconnectConnector#mcu_count}. |

---

##### `WorkerCount`<sup>Required</sup> <a name="WorkerCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity.property.workerCount"></a>

```go
WorkerCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#worker_count MskconnectConnector#worker_count}.

---

##### `McuCount`<sup>Optional</sup> <a name="McuCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity.property.mcuCount"></a>

```go
McuCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#mcu_count MskconnectConnector#mcu_count}.

---

### MskconnectConnectorConfig <a name="MskconnectConnectorConfig" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

&mskconnectconnector.MskconnectConnectorConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Capacity: github.com/cdktf/cdktf-provider-aws-go/aws.mskconnectConnector.MskconnectConnectorCapacity,
	ConnectorConfiguration: *map[string]*string,
	KafkaCluster: github.com/cdktf/cdktf-provider-aws-go/aws.mskconnectConnector.MskconnectConnectorKafkaCluster,
	KafkaClusterClientAuthentication: github.com/cdktf/cdktf-provider-aws-go/aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication,
	KafkaClusterEncryptionInTransit: github.com/cdktf/cdktf-provider-aws-go/aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit,
	KafkaconnectVersion: *string,
	Name: *string,
	Plugin: interface{},
	ServiceExecutionRoleArn: *string,
	Description: *string,
	Id: *string,
	LogDelivery: github.com/cdktf/cdktf-provider-aws-go/aws.mskconnectConnector.MskconnectConnectorLogDelivery,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.mskconnectConnector.MskconnectConnectorTimeouts,
	WorkerConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.capacity">Capacity</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a></code> | capacity block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.connectorConfiguration">ConnectorConfiguration</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#connector_configuration MskconnectConnector#connector_configuration}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaCluster">KafkaCluster</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a></code> | kafka_cluster block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaClusterClientAuthentication">KafkaClusterClientAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a></code> | kafka_cluster_client_authentication block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaClusterEncryptionInTransit">KafkaClusterEncryptionInTransit</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a></code> | kafka_cluster_encryption_in_transit block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaconnectVersion">KafkaconnectVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafkaconnect_version MskconnectConnector#kafkaconnect_version}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#name MskconnectConnector#name}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.plugin">Plugin</a></code> | <code>interface{}</code> | plugin block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.serviceExecutionRoleArn">ServiceExecutionRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#service_execution_role_arn MskconnectConnector#service_execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#description MskconnectConnector#description}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#id MskconnectConnector#id}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.logDelivery">LogDelivery</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a></code> | log_delivery block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts">MskconnectConnectorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.workerConfiguration">WorkerConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a></code> | worker_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.capacity"></a>

```go
Capacity MskconnectConnectorCapacity
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#capacity MskconnectConnector#capacity}

---

##### `ConnectorConfiguration`<sup>Required</sup> <a name="ConnectorConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.connectorConfiguration"></a>

```go
ConnectorConfiguration *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#connector_configuration MskconnectConnector#connector_configuration}.

---

##### `KafkaCluster`<sup>Required</sup> <a name="KafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaCluster"></a>

```go
KafkaCluster MskconnectConnectorKafkaCluster
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a>

kafka_cluster block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafka_cluster MskconnectConnector#kafka_cluster}

---

##### `KafkaClusterClientAuthentication`<sup>Required</sup> <a name="KafkaClusterClientAuthentication" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaClusterClientAuthentication"></a>

```go
KafkaClusterClientAuthentication MskconnectConnectorKafkaClusterClientAuthentication
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a>

kafka_cluster_client_authentication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafka_cluster_client_authentication MskconnectConnector#kafka_cluster_client_authentication}

---

##### `KafkaClusterEncryptionInTransit`<sup>Required</sup> <a name="KafkaClusterEncryptionInTransit" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaClusterEncryptionInTransit"></a>

```go
KafkaClusterEncryptionInTransit MskconnectConnectorKafkaClusterEncryptionInTransit
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a>

kafka_cluster_encryption_in_transit block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafka_cluster_encryption_in_transit MskconnectConnector#kafka_cluster_encryption_in_transit}

---

##### `KafkaconnectVersion`<sup>Required</sup> <a name="KafkaconnectVersion" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaconnectVersion"></a>

```go
KafkaconnectVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafkaconnect_version MskconnectConnector#kafkaconnect_version}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#name MskconnectConnector#name}.

---

##### `Plugin`<sup>Required</sup> <a name="Plugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.plugin"></a>

```go
Plugin interface{}
```

- *Type:* interface{}

plugin block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#plugin MskconnectConnector#plugin}

---

##### `ServiceExecutionRoleArn`<sup>Required</sup> <a name="ServiceExecutionRoleArn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.serviceExecutionRoleArn"></a>

```go
ServiceExecutionRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#service_execution_role_arn MskconnectConnector#service_execution_role_arn}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#description MskconnectConnector#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#id MskconnectConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogDelivery`<sup>Optional</sup> <a name="LogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.logDelivery"></a>

```go
LogDelivery MskconnectConnectorLogDelivery
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a>

log_delivery block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#log_delivery MskconnectConnector#log_delivery}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.timeouts"></a>

```go
Timeouts MskconnectConnectorTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts">MskconnectConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#timeouts MskconnectConnector#timeouts}

---

##### `WorkerConfiguration`<sup>Optional</sup> <a name="WorkerConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.workerConfiguration"></a>

```go
WorkerConfiguration MskconnectConnectorWorkerConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a>

worker_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#worker_configuration MskconnectConnector#worker_configuration}

---

### MskconnectConnectorKafkaCluster <a name="MskconnectConnectorKafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

&mskconnectconnector.MskconnectConnectorKafkaCluster {
	ApacheKafkaCluster: github.com/cdktf/cdktf-provider-aws-go/aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster.property.apacheKafkaCluster">ApacheKafkaCluster</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | apache_kafka_cluster block. |

---

##### `ApacheKafkaCluster`<sup>Required</sup> <a name="ApacheKafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster.property.apacheKafkaCluster"></a>

```go
ApacheKafkaCluster MskconnectConnectorKafkaClusterApacheKafkaCluster
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a>

apache_kafka_cluster block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#apache_kafka_cluster MskconnectConnector#apache_kafka_cluster}

---

### MskconnectConnectorKafkaClusterApacheKafkaCluster <a name="MskconnectConnectorKafkaClusterApacheKafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

&mskconnectconnector.MskconnectConnectorKafkaClusterApacheKafkaCluster {
	BootstrapServers: *string,
	Vpc: github.com/cdktf/cdktf-provider-aws-go/aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster.property.bootstrapServers">BootstrapServers</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#bootstrap_servers MskconnectConnector#bootstrap_servers}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster.property.vpc">Vpc</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | vpc block. |

---

##### `BootstrapServers`<sup>Required</sup> <a name="BootstrapServers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster.property.bootstrapServers"></a>

```go
BootstrapServers *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#bootstrap_servers MskconnectConnector#bootstrap_servers}.

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster.property.vpc"></a>

```go
Vpc MskconnectConnectorKafkaClusterApacheKafkaClusterVpc
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

vpc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#vpc MskconnectConnector#vpc}

---

### MskconnectConnectorKafkaClusterApacheKafkaClusterVpc <a name="MskconnectConnectorKafkaClusterApacheKafkaClusterVpc" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

&mskconnectconnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc {
	SecurityGroups: *[]*string,
	Subnets: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#security_groups MskconnectConnector#security_groups}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.subnets">Subnets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#subnets MskconnectConnector#subnets}. |

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.securityGroups"></a>

```go
SecurityGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#security_groups MskconnectConnector#security_groups}.

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.subnets"></a>

```go
Subnets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#subnets MskconnectConnector#subnets}.

---

### MskconnectConnectorKafkaClusterClientAuthentication <a name="MskconnectConnectorKafkaClusterClientAuthentication" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

&mskconnectconnector.MskconnectConnectorKafkaClusterClientAuthentication {
	AuthenticationType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#authentication_type MskconnectConnector#authentication_type}. |

---

##### `AuthenticationType`<sup>Optional</sup> <a name="AuthenticationType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication.property.authenticationType"></a>

```go
AuthenticationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#authentication_type MskconnectConnector#authentication_type}.

---

### MskconnectConnectorKafkaClusterEncryptionInTransit <a name="MskconnectConnectorKafkaClusterEncryptionInTransit" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

&mskconnectconnector.MskconnectConnectorKafkaClusterEncryptionInTransit {
	EncryptionType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#encryption_type MskconnectConnector#encryption_type}. |

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit.property.encryptionType"></a>

```go
EncryptionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#encryption_type MskconnectConnector#encryption_type}.

---

### MskconnectConnectorLogDelivery <a name="MskconnectConnectorLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

&mskconnectconnector.MskconnectConnectorLogDelivery {
	WorkerLogDelivery: github.com/cdktf/cdktf-provider-aws-go/aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery.property.workerLogDelivery">WorkerLogDelivery</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | worker_log_delivery block. |

---

##### `WorkerLogDelivery`<sup>Required</sup> <a name="WorkerLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery.property.workerLogDelivery"></a>

```go
WorkerLogDelivery MskconnectConnectorLogDeliveryWorkerLogDelivery
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a>

worker_log_delivery block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#worker_log_delivery MskconnectConnector#worker_log_delivery}

---

### MskconnectConnectorLogDeliveryWorkerLogDelivery <a name="MskconnectConnectorLogDeliveryWorkerLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

&mskconnectconnector.MskconnectConnectorLogDeliveryWorkerLogDelivery {
	CloudwatchLogs: github.com/cdktf/cdktf-provider-aws-go/aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs,
	Firehose: github.com/cdktf/cdktf-provider-aws-go/aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose,
	S3: github.com/cdktf/cdktf-provider-aws-go/aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | cloudwatch_logs block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.property.firehose">Firehose</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | firehose block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | s3 block. |

---

##### `CloudwatchLogs`<sup>Optional</sup> <a name="CloudwatchLogs" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.property.cloudwatchLogs"></a>

```go
CloudwatchLogs MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#cloudwatch_logs MskconnectConnector#cloudwatch_logs}

---

##### `Firehose`<sup>Optional</sup> <a name="Firehose" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.property.firehose"></a>

```go
Firehose MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

firehose block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#firehose MskconnectConnector#firehose}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.property.s3"></a>

```go
S3 MskconnectConnectorLogDeliveryWorkerLogDeliveryS3
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#s3 MskconnectConnector#s3}

---

### MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

&mskconnectconnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs {
	Enabled: interface{},
	LogGroup: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#enabled MskconnectConnector#enabled}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.logGroup">LogGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#log_group MskconnectConnector#log_group}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#enabled MskconnectConnector#enabled}.

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.logGroup"></a>

```go
LogGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#log_group MskconnectConnector#log_group}.

---

### MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

&mskconnectconnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose {
	Enabled: interface{},
	DeliveryStream: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#enabled MskconnectConnector#enabled}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.deliveryStream">DeliveryStream</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#delivery_stream MskconnectConnector#delivery_stream}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#enabled MskconnectConnector#enabled}.

---

##### `DeliveryStream`<sup>Optional</sup> <a name="DeliveryStream" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.deliveryStream"></a>

```go
DeliveryStream *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#delivery_stream MskconnectConnector#delivery_stream}.

---

### MskconnectConnectorLogDeliveryWorkerLogDeliveryS3 <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryS3" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

&mskconnectconnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3 {
	Enabled: interface{},
	Bucket: *string,
	Prefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#enabled MskconnectConnector#enabled}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#bucket MskconnectConnector#bucket}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#prefix MskconnectConnector#prefix}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#enabled MskconnectConnector#enabled}.

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#bucket MskconnectConnector#bucket}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#prefix MskconnectConnector#prefix}.

---

### MskconnectConnectorPlugin <a name="MskconnectConnectorPlugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

&mskconnectconnector.MskconnectConnectorPlugin {
	CustomPlugin: github.com/cdktf/cdktf-provider-aws-go/aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin.property.customPlugin">CustomPlugin</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a></code> | custom_plugin block. |

---

##### `CustomPlugin`<sup>Required</sup> <a name="CustomPlugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin.property.customPlugin"></a>

```go
CustomPlugin MskconnectConnectorPluginCustomPlugin
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a>

custom_plugin block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#custom_plugin MskconnectConnector#custom_plugin}

---

### MskconnectConnectorPluginCustomPlugin <a name="MskconnectConnectorPluginCustomPlugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

&mskconnectconnector.MskconnectConnectorPluginCustomPlugin {
	Arn: *string,
	Revision: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#arn MskconnectConnector#arn}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin.property.revision">Revision</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#revision MskconnectConnector#revision}. |

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#arn MskconnectConnector#arn}.

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin.property.revision"></a>

```go
Revision *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#revision MskconnectConnector#revision}.

---

### MskconnectConnectorTimeouts <a name="MskconnectConnectorTimeouts" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

&mskconnectconnector.MskconnectConnectorTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#create MskconnectConnector#create}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#delete MskconnectConnector#delete}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#update MskconnectConnector#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#create MskconnectConnector#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#delete MskconnectConnector#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#update MskconnectConnector#update}.

---

### MskconnectConnectorWorkerConfiguration <a name="MskconnectConnectorWorkerConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

&mskconnectconnector.MskconnectConnectorWorkerConfiguration {
	Arn: *string,
	Revision: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#arn MskconnectConnector#arn}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration.property.revision">Revision</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#revision MskconnectConnector#revision}. |

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#arn MskconnectConnector#arn}.

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration.property.revision"></a>

```go
Revision *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#revision MskconnectConnector#revision}.

---

## Classes <a name="Classes" id="Classes"></a>

### MskconnectConnectorCapacityAutoscalingOutputReference <a name="MskconnectConnectorCapacityAutoscalingOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

mskconnectconnector.NewMskconnectConnectorCapacityAutoscalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskconnectConnectorCapacityAutoscalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.putScaleInPolicy">PutScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.putScaleOutPolicy">PutScaleOutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resetMcuCount">ResetMcuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resetScaleInPolicy">ResetScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resetScaleOutPolicy">ResetScaleOutPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScaleInPolicy` <a name="PutScaleInPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.putScaleInPolicy"></a>

```go
func PutScaleInPolicy(value MskconnectConnectorCapacityAutoscalingScaleInPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.putScaleInPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a>

---

##### `PutScaleOutPolicy` <a name="PutScaleOutPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.putScaleOutPolicy"></a>

```go
func PutScaleOutPolicy(value MskconnectConnectorCapacityAutoscalingScaleOutPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.putScaleOutPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a>

---

##### `ResetMcuCount` <a name="ResetMcuCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resetMcuCount"></a>

```go
func ResetMcuCount()
```

##### `ResetScaleInPolicy` <a name="ResetScaleInPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resetScaleInPolicy"></a>

```go
func ResetScaleInPolicy()
```

##### `ResetScaleOutPolicy` <a name="ResetScaleOutPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resetScaleOutPolicy"></a>

```go
func ResetScaleOutPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleInPolicy">ScaleInPolicy</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference">MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleOutPolicy">ScaleOutPolicy</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference">MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.maxWorkerCountInput">MaxWorkerCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.mcuCountInput">McuCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.minWorkerCountInput">MinWorkerCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleInPolicyInput">ScaleInPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleOutPolicyInput">ScaleOutPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.maxWorkerCount">MaxWorkerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.mcuCount">McuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.minWorkerCount">MinWorkerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScaleInPolicy`<sup>Required</sup> <a name="ScaleInPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleInPolicy"></a>

```go
func ScaleInPolicy() MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference">MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference</a>

---

##### `ScaleOutPolicy`<sup>Required</sup> <a name="ScaleOutPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleOutPolicy"></a>

```go
func ScaleOutPolicy() MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference">MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference</a>

---

##### `MaxWorkerCountInput`<sup>Optional</sup> <a name="MaxWorkerCountInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.maxWorkerCountInput"></a>

```go
func MaxWorkerCountInput() *f64
```

- *Type:* *f64

---

##### `McuCountInput`<sup>Optional</sup> <a name="McuCountInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.mcuCountInput"></a>

```go
func McuCountInput() *f64
```

- *Type:* *f64

---

##### `MinWorkerCountInput`<sup>Optional</sup> <a name="MinWorkerCountInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.minWorkerCountInput"></a>

```go
func MinWorkerCountInput() *f64
```

- *Type:* *f64

---

##### `ScaleInPolicyInput`<sup>Optional</sup> <a name="ScaleInPolicyInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleInPolicyInput"></a>

```go
func ScaleInPolicyInput() MskconnectConnectorCapacityAutoscalingScaleInPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a>

---

##### `ScaleOutPolicyInput`<sup>Optional</sup> <a name="ScaleOutPolicyInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleOutPolicyInput"></a>

```go
func ScaleOutPolicyInput() MskconnectConnectorCapacityAutoscalingScaleOutPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a>

---

##### `MaxWorkerCount`<sup>Required</sup> <a name="MaxWorkerCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.maxWorkerCount"></a>

```go
func MaxWorkerCount() *f64
```

- *Type:* *f64

---

##### `McuCount`<sup>Required</sup> <a name="McuCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.mcuCount"></a>

```go
func McuCount() *f64
```

- *Type:* *f64

---

##### `MinWorkerCount`<sup>Required</sup> <a name="MinWorkerCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.minWorkerCount"></a>

```go
func MinWorkerCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.internalValue"></a>

```go
func InternalValue() MskconnectConnectorCapacityAutoscaling
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a>

---


### MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference <a name="MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

mskconnectconnector.NewMskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.resetCpuUtilizationPercentage">ResetCpuUtilizationPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuUtilizationPercentage` <a name="ResetCpuUtilizationPercentage" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.resetCpuUtilizationPercentage"></a>

```go
func ResetCpuUtilizationPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.cpuUtilizationPercentageInput">CpuUtilizationPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.cpuUtilizationPercentage">CpuUtilizationPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuUtilizationPercentageInput`<sup>Optional</sup> <a name="CpuUtilizationPercentageInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.cpuUtilizationPercentageInput"></a>

```go
func CpuUtilizationPercentageInput() *f64
```

- *Type:* *f64

---

##### `CpuUtilizationPercentage`<sup>Required</sup> <a name="CpuUtilizationPercentage" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.cpuUtilizationPercentage"></a>

```go
func CpuUtilizationPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() MskconnectConnectorCapacityAutoscalingScaleInPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a>

---


### MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference <a name="MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

mskconnectconnector.NewMskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.resetCpuUtilizationPercentage">ResetCpuUtilizationPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuUtilizationPercentage` <a name="ResetCpuUtilizationPercentage" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.resetCpuUtilizationPercentage"></a>

```go
func ResetCpuUtilizationPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentageInput">CpuUtilizationPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentage">CpuUtilizationPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuUtilizationPercentageInput`<sup>Optional</sup> <a name="CpuUtilizationPercentageInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentageInput"></a>

```go
func CpuUtilizationPercentageInput() *f64
```

- *Type:* *f64

---

##### `CpuUtilizationPercentage`<sup>Required</sup> <a name="CpuUtilizationPercentage" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentage"></a>

```go
func CpuUtilizationPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() MskconnectConnectorCapacityAutoscalingScaleOutPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a>

---


### MskconnectConnectorCapacityOutputReference <a name="MskconnectConnectorCapacityOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

mskconnectconnector.NewMskconnectConnectorCapacityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskconnectConnectorCapacityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.putAutoscaling">PutAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.putProvisionedCapacity">PutProvisionedCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resetAutoscaling">ResetAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resetProvisionedCapacity">ResetProvisionedCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscaling` <a name="PutAutoscaling" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.putAutoscaling"></a>

```go
func PutAutoscaling(value MskconnectConnectorCapacityAutoscaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.putAutoscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a>

---

##### `PutProvisionedCapacity` <a name="PutProvisionedCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.putProvisionedCapacity"></a>

```go
func PutProvisionedCapacity(value MskconnectConnectorCapacityProvisionedCapacity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.putProvisionedCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a>

---

##### `ResetAutoscaling` <a name="ResetAutoscaling" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resetAutoscaling"></a>

```go
func ResetAutoscaling()
```

##### `ResetProvisionedCapacity` <a name="ResetProvisionedCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resetProvisionedCapacity"></a>

```go
func ResetProvisionedCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.autoscaling">Autoscaling</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference">MskconnectConnectorCapacityAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.provisionedCapacity">ProvisionedCapacity</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference">MskconnectConnectorCapacityProvisionedCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.autoscalingInput">AutoscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.provisionedCapacityInput">ProvisionedCapacityInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Autoscaling`<sup>Required</sup> <a name="Autoscaling" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.autoscaling"></a>

```go
func Autoscaling() MskconnectConnectorCapacityAutoscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference">MskconnectConnectorCapacityAutoscalingOutputReference</a>

---

##### `ProvisionedCapacity`<sup>Required</sup> <a name="ProvisionedCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.provisionedCapacity"></a>

```go
func ProvisionedCapacity() MskconnectConnectorCapacityProvisionedCapacityOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference">MskconnectConnectorCapacityProvisionedCapacityOutputReference</a>

---

##### `AutoscalingInput`<sup>Optional</sup> <a name="AutoscalingInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.autoscalingInput"></a>

```go
func AutoscalingInput() MskconnectConnectorCapacityAutoscaling
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a>

---

##### `ProvisionedCapacityInput`<sup>Optional</sup> <a name="ProvisionedCapacityInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.provisionedCapacityInput"></a>

```go
func ProvisionedCapacityInput() MskconnectConnectorCapacityProvisionedCapacity
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.internalValue"></a>

```go
func InternalValue() MskconnectConnectorCapacity
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a>

---


### MskconnectConnectorCapacityProvisionedCapacityOutputReference <a name="MskconnectConnectorCapacityProvisionedCapacityOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

mskconnectconnector.NewMskconnectConnectorCapacityProvisionedCapacityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskconnectConnectorCapacityProvisionedCapacityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.resetMcuCount">ResetMcuCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMcuCount` <a name="ResetMcuCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.resetMcuCount"></a>

```go
func ResetMcuCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCountInput">McuCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCountInput">WorkerCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCount">McuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCount">WorkerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `McuCountInput`<sup>Optional</sup> <a name="McuCountInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCountInput"></a>

```go
func McuCountInput() *f64
```

- *Type:* *f64

---

##### `WorkerCountInput`<sup>Optional</sup> <a name="WorkerCountInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCountInput"></a>

```go
func WorkerCountInput() *f64
```

- *Type:* *f64

---

##### `McuCount`<sup>Required</sup> <a name="McuCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCount"></a>

```go
func McuCount() *f64
```

- *Type:* *f64

---

##### `WorkerCount`<sup>Required</sup> <a name="WorkerCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCount"></a>

```go
func WorkerCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.internalValue"></a>

```go
func InternalValue() MskconnectConnectorCapacityProvisionedCapacity
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a>

---


### MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference <a name="MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

mskconnectconnector.NewMskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc">PutVpc</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpc` <a name="PutVpc" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc"></a>

```go
func PutVpc(value MskconnectConnectorKafkaClusterApacheKafkaClusterVpc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpc">Vpc</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference">MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServersInput">BootstrapServersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpcInput">VpcInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServers">BootstrapServers</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpc"></a>

```go
func Vpc() MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference">MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference</a>

---

##### `BootstrapServersInput`<sup>Optional</sup> <a name="BootstrapServersInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServersInput"></a>

```go
func BootstrapServersInput() *string
```

- *Type:* *string

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpcInput"></a>

```go
func VpcInput() MskconnectConnectorKafkaClusterApacheKafkaClusterVpc
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

---

##### `BootstrapServers`<sup>Required</sup> <a name="BootstrapServers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServers"></a>

```go
func BootstrapServers() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.internalValue"></a>

```go
func InternalValue() MskconnectConnectorKafkaClusterApacheKafkaCluster
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a>

---


### MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference <a name="MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

mskconnectconnector.NewMskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroupsInput"></a>

```go
func SecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnetsInput"></a>

```go
func SubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.internalValue"></a>

```go
func InternalValue() MskconnectConnectorKafkaClusterApacheKafkaClusterVpc
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

---


### MskconnectConnectorKafkaClusterClientAuthenticationOutputReference <a name="MskconnectConnectorKafkaClusterClientAuthenticationOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

mskconnectconnector.NewMskconnectConnectorKafkaClusterClientAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskconnectConnectorKafkaClusterClientAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.resetAuthenticationType">ResetAuthenticationType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationType` <a name="ResetAuthenticationType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.resetAuthenticationType"></a>

```go
func ResetAuthenticationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationTypeInput"></a>

```go
func AuthenticationTypeInput() *string
```

- *Type:* *string

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationType"></a>

```go
func AuthenticationType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() MskconnectConnectorKafkaClusterClientAuthentication
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a>

---


### MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference <a name="MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

mskconnectconnector.NewMskconnectConnectorKafkaClusterEncryptionInTransitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resetEncryptionType"></a>

```go
func ResetEncryptionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionTypeInput"></a>

```go
func EncryptionTypeInput() *string
```

- *Type:* *string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.internalValue"></a>

```go
func InternalValue() MskconnectConnectorKafkaClusterEncryptionInTransit
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a>

---


### MskconnectConnectorKafkaClusterOutputReference <a name="MskconnectConnectorKafkaClusterOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

mskconnectconnector.NewMskconnectConnectorKafkaClusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskconnectConnectorKafkaClusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster">PutApacheKafkaCluster</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApacheKafkaCluster` <a name="PutApacheKafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster"></a>

```go
func PutApacheKafkaCluster(value MskconnectConnectorKafkaClusterApacheKafkaCluster)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.apacheKafkaCluster">ApacheKafkaCluster</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference">MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.apacheKafkaClusterInput">ApacheKafkaClusterInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApacheKafkaCluster`<sup>Required</sup> <a name="ApacheKafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.apacheKafkaCluster"></a>

```go
func ApacheKafkaCluster() MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference">MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference</a>

---

##### `ApacheKafkaClusterInput`<sup>Optional</sup> <a name="ApacheKafkaClusterInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.apacheKafkaClusterInput"></a>

```go
func ApacheKafkaClusterInput() MskconnectConnectorKafkaClusterApacheKafkaCluster
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.internalValue"></a>

```go
func InternalValue() MskconnectConnectorKafkaCluster
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a>

---


### MskconnectConnectorLogDeliveryOutputReference <a name="MskconnectConnectorLogDeliveryOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

mskconnectconnector.NewMskconnectConnectorLogDeliveryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskconnectConnectorLogDeliveryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery">PutWorkerLogDelivery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWorkerLogDelivery` <a name="PutWorkerLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery"></a>

```go
func PutWorkerLogDelivery(value MskconnectConnectorLogDeliveryWorkerLogDelivery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.workerLogDelivery">WorkerLogDelivery</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.workerLogDeliveryInput">WorkerLogDeliveryInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkerLogDelivery`<sup>Required</sup> <a name="WorkerLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.workerLogDelivery"></a>

```go
func WorkerLogDelivery() MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference</a>

---

##### `WorkerLogDeliveryInput`<sup>Optional</sup> <a name="WorkerLogDeliveryInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.workerLogDeliveryInput"></a>

```go
func WorkerLogDeliveryInput() MskconnectConnectorLogDeliveryWorkerLogDelivery
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.internalValue"></a>

```go
func InternalValue() MskconnectConnectorLogDelivery
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a>

---


### MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

mskconnectconnector.NewMskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetLogGroup"></a>

```go
func ResetLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroup">LogGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput"></a>

```go
func LogGroupInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroup"></a>

```go
func LogGroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

---


### MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

mskconnectconnector.NewMskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetDeliveryStream">ResetDeliveryStream</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeliveryStream` <a name="ResetDeliveryStream" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetDeliveryStream"></a>

```go
func ResetDeliveryStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStreamInput">DeliveryStreamInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStream">DeliveryStream</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeliveryStreamInput`<sup>Optional</sup> <a name="DeliveryStreamInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStreamInput"></a>

```go
func DeliveryStreamInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DeliveryStream`<sup>Required</sup> <a name="DeliveryStream" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStream"></a>

```go
func DeliveryStream() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.internalValue"></a>

```go
func InternalValue() MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

---


### MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

mskconnectconnector.NewMskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs">PutCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose">PutFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetCloudwatchLogs">ResetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetFirehose">ResetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogs` <a name="PutCloudwatchLogs" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs"></a>

```go
func PutCloudwatchLogs(value MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

---

##### `PutFirehose` <a name="PutFirehose" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose"></a>

```go
func PutFirehose(value MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

---

##### `PutS3` <a name="PutS3" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3"></a>

```go
func PutS3(value MskconnectConnectorLogDeliveryWorkerLogDeliveryS3)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

---

##### `ResetCloudwatchLogs` <a name="ResetCloudwatchLogs" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetCloudwatchLogs"></a>

```go
func ResetCloudwatchLogs()
```

##### `ResetFirehose` <a name="ResetFirehose" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetFirehose"></a>

```go
func ResetFirehose()
```

##### `ResetS3` <a name="ResetS3" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetS3"></a>

```go
func ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehose">Firehose</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogsInput">CloudwatchLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehoseInput">FirehoseInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3Input">S3Input</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogs"></a>

```go
func CloudwatchLogs() MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference</a>

---

##### `Firehose`<sup>Required</sup> <a name="Firehose" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehose"></a>

```go
func Firehose() MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3"></a>

```go
func S3() MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference</a>

---

##### `CloudwatchLogsInput`<sup>Optional</sup> <a name="CloudwatchLogsInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogsInput"></a>

```go
func CloudwatchLogsInput() MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

---

##### `FirehoseInput`<sup>Optional</sup> <a name="FirehoseInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehoseInput"></a>

```go
func FirehoseInput() MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3Input"></a>

```go
func S3Input() MskconnectConnectorLogDeliveryWorkerLogDeliveryS3
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.internalValue"></a>

```go
func InternalValue() MskconnectConnectorLogDeliveryWorkerLogDelivery
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a>

---


### MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

mskconnectconnector.NewMskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.internalValue"></a>

```go
func InternalValue() MskconnectConnectorLogDeliveryWorkerLogDeliveryS3
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

---


### MskconnectConnectorPluginCustomPluginOutputReference <a name="MskconnectConnectorPluginCustomPluginOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

mskconnectconnector.NewMskconnectConnectorPluginCustomPluginOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskconnectConnectorPluginCustomPluginOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.revisionInput">RevisionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.revision">Revision</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.revisionInput"></a>

```go
func RevisionInput() *f64
```

- *Type:* *f64

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.revision"></a>

```go
func Revision() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.internalValue"></a>

```go
func InternalValue() MskconnectConnectorPluginCustomPlugin
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a>

---


### MskconnectConnectorPluginList <a name="MskconnectConnectorPluginList" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

mskconnectconnector.NewMskconnectConnectorPluginList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MskconnectConnectorPluginList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.get"></a>

```go
func Get(index *f64) MskconnectConnectorPluginOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskconnectConnectorPluginOutputReference <a name="MskconnectConnectorPluginOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

mskconnectconnector.NewMskconnectConnectorPluginOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MskconnectConnectorPluginOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.putCustomPlugin">PutCustomPlugin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomPlugin` <a name="PutCustomPlugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.putCustomPlugin"></a>

```go
func PutCustomPlugin(value MskconnectConnectorPluginCustomPlugin)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.putCustomPlugin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.customPlugin">CustomPlugin</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference">MskconnectConnectorPluginCustomPluginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.customPluginInput">CustomPluginInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomPlugin`<sup>Required</sup> <a name="CustomPlugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.customPlugin"></a>

```go
func CustomPlugin() MskconnectConnectorPluginCustomPluginOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference">MskconnectConnectorPluginCustomPluginOutputReference</a>

---

##### `CustomPluginInput`<sup>Optional</sup> <a name="CustomPluginInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.customPluginInput"></a>

```go
func CustomPluginInput() MskconnectConnectorPluginCustomPlugin
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskconnectConnectorTimeoutsOutputReference <a name="MskconnectConnectorTimeoutsOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

mskconnectconnector.NewMskconnectConnectorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskconnectConnectorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskconnectConnectorWorkerConfigurationOutputReference <a name="MskconnectConnectorWorkerConfigurationOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskconnectconnector"

mskconnectconnector.NewMskconnectConnectorWorkerConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskconnectConnectorWorkerConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.revisionInput">RevisionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.revision">Revision</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.revisionInput"></a>

```go
func RevisionInput() *f64
```

- *Type:* *f64

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.revision"></a>

```go
func Revision() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() MskconnectConnectorWorkerConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a>

---



