# `dataAwsMskCluster` Submodule <a name="`dataAwsMskCluster` Submodule" id="@cdktf/provider-aws.dataAwsMskCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsMskCluster <a name="DataAwsMskCluster" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/msk_cluster aws_msk_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

dataawsmskcluster.NewDataAwsMskCluster(scope Construct, id *string, config DataAwsMskClusterConfig) DataAwsMskCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterConfig">DataAwsMskClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterConfig">DataAwsMskClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsMskCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

dataawsmskcluster.DataAwsMskCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

dataawsmskcluster.DataAwsMskCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

dataawsmskcluster.DataAwsMskCluster_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

dataawsmskcluster.DataAwsMskCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsMskCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsMskCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsMskCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/msk_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsMskCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.bootstrapBrokers">BootstrapBrokers</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.bootstrapBrokersPublicSaslIam">BootstrapBrokersPublicSaslIam</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.bootstrapBrokersPublicSaslScram">BootstrapBrokersPublicSaslScram</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.bootstrapBrokersPublicTls">BootstrapBrokersPublicTls</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.bootstrapBrokersSaslIam">BootstrapBrokersSaslIam</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.bootstrapBrokersSaslScram">BootstrapBrokersSaslScram</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.bootstrapBrokersTls">BootstrapBrokersTls</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.brokerNodeGroupInfo">BrokerNodeGroupInfo</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoList">DataAwsMskClusterBrokerNodeGroupInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.clusterUuid">ClusterUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.kafkaVersion">KafkaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.numberOfBrokerNodes">NumberOfBrokerNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.zookeeperConnectString">ZookeeperConnectString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.zookeeperConnectStringTls">ZookeeperConnectStringTls</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `BootstrapBrokers`<sup>Required</sup> <a name="BootstrapBrokers" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.bootstrapBrokers"></a>

```go
func BootstrapBrokers() *string
```

- *Type:* *string

---

##### `BootstrapBrokersPublicSaslIam`<sup>Required</sup> <a name="BootstrapBrokersPublicSaslIam" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.bootstrapBrokersPublicSaslIam"></a>

```go
func BootstrapBrokersPublicSaslIam() *string
```

- *Type:* *string

---

##### `BootstrapBrokersPublicSaslScram`<sup>Required</sup> <a name="BootstrapBrokersPublicSaslScram" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.bootstrapBrokersPublicSaslScram"></a>

```go
func BootstrapBrokersPublicSaslScram() *string
```

- *Type:* *string

---

##### `BootstrapBrokersPublicTls`<sup>Required</sup> <a name="BootstrapBrokersPublicTls" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.bootstrapBrokersPublicTls"></a>

```go
func BootstrapBrokersPublicTls() *string
```

- *Type:* *string

---

##### `BootstrapBrokersSaslIam`<sup>Required</sup> <a name="BootstrapBrokersSaslIam" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.bootstrapBrokersSaslIam"></a>

```go
func BootstrapBrokersSaslIam() *string
```

- *Type:* *string

---

##### `BootstrapBrokersSaslScram`<sup>Required</sup> <a name="BootstrapBrokersSaslScram" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.bootstrapBrokersSaslScram"></a>

```go
func BootstrapBrokersSaslScram() *string
```

- *Type:* *string

---

##### `BootstrapBrokersTls`<sup>Required</sup> <a name="BootstrapBrokersTls" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.bootstrapBrokersTls"></a>

```go
func BootstrapBrokersTls() *string
```

- *Type:* *string

---

##### `BrokerNodeGroupInfo`<sup>Required</sup> <a name="BrokerNodeGroupInfo" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.brokerNodeGroupInfo"></a>

```go
func BrokerNodeGroupInfo() DataAwsMskClusterBrokerNodeGroupInfoList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoList">DataAwsMskClusterBrokerNodeGroupInfoList</a>

---

##### `ClusterUuid`<sup>Required</sup> <a name="ClusterUuid" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.clusterUuid"></a>

```go
func ClusterUuid() *string
```

- *Type:* *string

---

##### `KafkaVersion`<sup>Required</sup> <a name="KafkaVersion" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.kafkaVersion"></a>

```go
func KafkaVersion() *string
```

- *Type:* *string

---

##### `NumberOfBrokerNodes`<sup>Required</sup> <a name="NumberOfBrokerNodes" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.numberOfBrokerNodes"></a>

```go
func NumberOfBrokerNodes() *f64
```

- *Type:* *f64

---

##### `ZookeeperConnectString`<sup>Required</sup> <a name="ZookeeperConnectString" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.zookeeperConnectString"></a>

```go
func ZookeeperConnectString() *string
```

- *Type:* *string

---

##### `ZookeeperConnectStringTls`<sup>Required</sup> <a name="ZookeeperConnectStringTls" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.zookeeperConnectStringTls"></a>

```go
func ZookeeperConnectStringTls() *string
```

- *Type:* *string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsMskClusterBrokerNodeGroupInfo <a name="DataAwsMskClusterBrokerNodeGroupInfo" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

&dataawsmskcluster.DataAwsMskClusterBrokerNodeGroupInfo {

}
```


### DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfo <a name="DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfo" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

&dataawsmskcluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfo {

}
```


### DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess <a name="DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

&dataawsmskcluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess {

}
```


### DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity <a name="DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

&dataawsmskcluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity {

}
```


### DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication <a name="DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

&dataawsmskcluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication {

}
```


### DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl <a name="DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

&dataawsmskcluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl {

}
```


### DataAwsMskClusterBrokerNodeGroupInfoStorageInfo <a name="DataAwsMskClusterBrokerNodeGroupInfoStorageInfo" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

&dataawsmskcluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfo {

}
```


### DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo <a name="DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

&dataawsmskcluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo {

}
```


### DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput <a name="DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

&dataawsmskcluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput {

}
```


### DataAwsMskClusterConfig <a name="DataAwsMskClusterConfig" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

&dataawsmskcluster.DataAwsMskClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterName: *string,
	Id: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/msk_cluster#cluster_name DataAwsMskCluster#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/msk_cluster#id DataAwsMskCluster#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/msk_cluster#tags DataAwsMskCluster#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/msk_cluster#cluster_name DataAwsMskCluster#cluster_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/msk_cluster#id DataAwsMskCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/data-sources/msk_cluster#tags DataAwsMskCluster#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList <a name="DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

dataawsmskcluster.NewDataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList.get"></a>

```go
func Get(index *f64) DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference <a name="DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

dataawsmskcluster.NewDataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.publicAccess">PublicAccess</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList">DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.vpcConnectivity">VpcConnectivity</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList">DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfo">DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicAccess`<sup>Required</sup> <a name="PublicAccess" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.publicAccess"></a>

```go
func PublicAccess() DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList">DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList</a>

---

##### `VpcConnectivity`<sup>Required</sup> <a name="VpcConnectivity" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.vpcConnectivity"></a>

```go
func VpcConnectivity() DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList">DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfo
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfo">DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfo</a>

---


### DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList <a name="DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

dataawsmskcluster.NewDataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList.get"></a>

```go
func Get(index *f64) DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference <a name="DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

dataawsmskcluster.NewDataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a>

---


### DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList <a name="DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

dataawsmskcluster.NewDataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList.get"></a>

```go
func Get(index *f64) DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference <a name="DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

dataawsmskcluster.NewDataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.sasl">Sasl</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList">DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.tls">Tls</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication">DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Sasl`<sup>Required</sup> <a name="Sasl" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.sasl"></a>

```go
func Sasl() DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList">DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList</a>

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.tls"></a>

```go
func Tls() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication">DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication</a>

---


### DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList <a name="DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

dataawsmskcluster.NewDataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList.get"></a>

```go
func Get(index *f64) DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference <a name="DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

dataawsmskcluster.NewDataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.iam">Iam</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.scram">Scram</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl">DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Iam`<sup>Required</sup> <a name="Iam" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.iam"></a>

```go
func Iam() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Scram`<sup>Required</sup> <a name="Scram" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.scram"></a>

```go
func Scram() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl">DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl</a>

---


### DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList <a name="DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

dataawsmskcluster.NewDataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList.get"></a>

```go
func Get(index *f64) DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference <a name="DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

dataawsmskcluster.NewDataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.clientAuthentication">ClientAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList">DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity">DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientAuthentication`<sup>Required</sup> <a name="ClientAuthentication" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.clientAuthentication"></a>

```go
func ClientAuthentication() DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList">DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity">DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity</a>

---


### DataAwsMskClusterBrokerNodeGroupInfoList <a name="DataAwsMskClusterBrokerNodeGroupInfoList" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

dataawsmskcluster.NewDataAwsMskClusterBrokerNodeGroupInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsMskClusterBrokerNodeGroupInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoList.get"></a>

```go
func Get(index *f64) DataAwsMskClusterBrokerNodeGroupInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsMskClusterBrokerNodeGroupInfoOutputReference <a name="DataAwsMskClusterBrokerNodeGroupInfoOutputReference" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

dataawsmskcluster.NewDataAwsMskClusterBrokerNodeGroupInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsMskClusterBrokerNodeGroupInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.property.azDistribution">AzDistribution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.property.clientSubnets">ClientSubnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.property.connectivityInfo">ConnectivityInfo</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList">DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.property.storageInfo">StorageInfo</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList">DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfo">DataAwsMskClusterBrokerNodeGroupInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AzDistribution`<sup>Required</sup> <a name="AzDistribution" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.property.azDistribution"></a>

```go
func AzDistribution() *string
```

- *Type:* *string

---

##### `ClientSubnets`<sup>Required</sup> <a name="ClientSubnets" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.property.clientSubnets"></a>

```go
func ClientSubnets() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectivityInfo`<sup>Required</sup> <a name="ConnectivityInfo" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.property.connectivityInfo"></a>

```go
func ConnectivityInfo() DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList">DataAwsMskClusterBrokerNodeGroupInfoConnectivityInfoList</a>

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `StorageInfo`<sup>Required</sup> <a name="StorageInfo" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.property.storageInfo"></a>

```go
func StorageInfo() DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList">DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsMskClusterBrokerNodeGroupInfo
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfo">DataAwsMskClusterBrokerNodeGroupInfo</a>

---


### DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList <a name="DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

dataawsmskcluster.NewDataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList.get"></a>

```go
func Get(index *f64) DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference <a name="DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

dataawsmskcluster.NewDataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList">DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProvisionedThroughput`<sup>Required</sup> <a name="ProvisionedThroughput" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.provisionedThroughput"></a>

```go
func ProvisionedThroughput() DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList">DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList</a>

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.volumeSize"></a>

```go
func VolumeSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a>

---


### DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList <a name="DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

dataawsmskcluster.NewDataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList.get"></a>

```go
func Get(index *f64) DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference <a name="DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

dataawsmskcluster.NewDataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.volumeThroughput">VolumeThroughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `VolumeThroughput`<sup>Required</sup> <a name="VolumeThroughput" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.volumeThroughput"></a>

```go
func VolumeThroughput() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a>

---


### DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList <a name="DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

dataawsmskcluster.NewDataAwsMskClusterBrokerNodeGroupInfoStorageInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList.get"></a>

```go
func Get(index *f64) DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference <a name="DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskcluster"

dataawsmskcluster.NewDataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.ebsStorageInfo">EbsStorageInfo</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList">DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfo">DataAwsMskClusterBrokerNodeGroupInfoStorageInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EbsStorageInfo`<sup>Required</sup> <a name="EbsStorageInfo" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.ebsStorageInfo"></a>

```go
func EbsStorageInfo() DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList">DataAwsMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsMskClusterBrokerNodeGroupInfoStorageInfo
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMskCluster.DataAwsMskClusterBrokerNodeGroupInfoStorageInfo">DataAwsMskClusterBrokerNodeGroupInfoStorageInfo</a>

---



