# `dataAwsMskBrokerNodes` Submodule <a name="`dataAwsMskBrokerNodes` Submodule" id="@cdktf/provider-aws.dataAwsMskBrokerNodes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsMskBrokerNodes <a name="DataAwsMskBrokerNodes" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/data-sources/msk_broker_nodes aws_msk_broker_nodes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskbrokernodes"

dataawsmskbrokernodes.NewDataAwsMskBrokerNodes(scope Construct, id *string, config DataAwsMskBrokerNodesConfig) DataAwsMskBrokerNodes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig">DataAwsMskBrokerNodesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig">DataAwsMskBrokerNodesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsMskBrokerNodes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskbrokernodes"

dataawsmskbrokernodes.DataAwsMskBrokerNodes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskbrokernodes"

dataawsmskbrokernodes.DataAwsMskBrokerNodes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskbrokernodes"

dataawsmskbrokernodes.DataAwsMskBrokerNodes_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskbrokernodes"

dataawsmskbrokernodes.DataAwsMskBrokerNodes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsMskBrokerNodes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsMskBrokerNodes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsMskBrokerNodes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/data-sources/msk_broker_nodes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsMskBrokerNodes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.nodeInfoList">NodeInfoList</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList">DataAwsMskBrokerNodesNodeInfoListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.clusterArnInput">ClusterArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.clusterArn">ClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `NodeInfoList`<sup>Required</sup> <a name="NodeInfoList" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.nodeInfoList"></a>

```go
func NodeInfoList() DataAwsMskBrokerNodesNodeInfoListStructList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList">DataAwsMskBrokerNodesNodeInfoListStructList</a>

---

##### `ClusterArnInput`<sup>Optional</sup> <a name="ClusterArnInput" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.clusterArnInput"></a>

```go
func ClusterArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.clusterArn"></a>

```go
func ClusterArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsMskBrokerNodesConfig <a name="DataAwsMskBrokerNodesConfig" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskbrokernodes"

&dataawsmskbrokernodes.DataAwsMskBrokerNodesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterArn: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.clusterArn">ClusterArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/data-sources/msk_broker_nodes#cluster_arn DataAwsMskBrokerNodes#cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/data-sources/msk_broker_nodes#id DataAwsMskBrokerNodes#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.clusterArn"></a>

```go
ClusterArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/data-sources/msk_broker_nodes#cluster_arn DataAwsMskBrokerNodes#cluster_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/data-sources/msk_broker_nodes#id DataAwsMskBrokerNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsMskBrokerNodesNodeInfoListStruct <a name="DataAwsMskBrokerNodesNodeInfoListStruct" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStruct.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskbrokernodes"

&dataawsmskbrokernodes.DataAwsMskBrokerNodesNodeInfoListStruct {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsMskBrokerNodesNodeInfoListStructList <a name="DataAwsMskBrokerNodesNodeInfoListStructList" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskbrokernodes"

dataawsmskbrokernodes.NewDataAwsMskBrokerNodesNodeInfoListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsMskBrokerNodesNodeInfoListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.get"></a>

```go
func Get(index *f64) DataAwsMskBrokerNodesNodeInfoListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsMskBrokerNodesNodeInfoListStructOutputReference <a name="DataAwsMskBrokerNodesNodeInfoListStructOutputReference" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dataawsmskbrokernodes"

dataawsmskbrokernodes.NewDataAwsMskBrokerNodesNodeInfoListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsMskBrokerNodesNodeInfoListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.attachedEniId">AttachedEniId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.brokerId">BrokerId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.clientSubnet">ClientSubnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.clientVpcIpAddress">ClientVpcIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.endpoints">Endpoints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.nodeArn">NodeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStruct">DataAwsMskBrokerNodesNodeInfoListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachedEniId`<sup>Required</sup> <a name="AttachedEniId" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.attachedEniId"></a>

```go
func AttachedEniId() *string
```

- *Type:* *string

---

##### `BrokerId`<sup>Required</sup> <a name="BrokerId" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.brokerId"></a>

```go
func BrokerId() *f64
```

- *Type:* *f64

---

##### `ClientSubnet`<sup>Required</sup> <a name="ClientSubnet" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.clientSubnet"></a>

```go
func ClientSubnet() *string
```

- *Type:* *string

---

##### `ClientVpcIpAddress`<sup>Required</sup> <a name="ClientVpcIpAddress" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.clientVpcIpAddress"></a>

```go
func ClientVpcIpAddress() *string
```

- *Type:* *string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.endpoints"></a>

```go
func Endpoints() *[]*string
```

- *Type:* *[]*string

---

##### `NodeArn`<sup>Required</sup> <a name="NodeArn" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.nodeArn"></a>

```go
func NodeArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsMskBrokerNodesNodeInfoListStruct
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStruct">DataAwsMskBrokerNodesNodeInfoListStruct</a>

---



