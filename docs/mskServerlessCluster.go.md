# `mskServerlessCluster` Submodule <a name="`mskServerlessCluster` Submodule" id="@cdktf/provider-aws.mskServerlessCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskServerlessCluster <a name="MskServerlessCluster" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/msk_serverless_cluster aws_msk_serverless_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskserverlesscluster"

mskserverlesscluster.NewMskServerlessCluster(scope Construct, id *string, config MskServerlessClusterConfig) MskServerlessCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig">MskServerlessClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig">MskServerlessClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.putClientAuthentication">PutClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutClientAuthentication` <a name="PutClientAuthentication" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.putClientAuthentication"></a>

```go
func PutClientAuthentication(value MskServerlessClusterClientAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.putClientAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthentication">MskServerlessClusterClientAuthentication</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.putTimeouts"></a>

```go
func PutTimeouts(value MskServerlessClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeouts">MskServerlessClusterTimeouts</a>

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.putVpcConfig"></a>

```go
func PutVpcConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.putVpcConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskserverlesscluster"

mskserverlesscluster.MskServerlessCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskserverlesscluster"

mskserverlesscluster.MskServerlessCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskserverlesscluster"

mskserverlesscluster.MskServerlessCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.clientAuthentication">ClientAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference">MskServerlessClusterClientAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference">MskServerlessClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigList">MskServerlessClusterVpcConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.clientAuthenticationInput">ClientAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthentication">MskServerlessClusterClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.vpcConfigInput">VpcConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ClientAuthentication`<sup>Required</sup> <a name="ClientAuthentication" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.clientAuthentication"></a>

```go
func ClientAuthentication() MskServerlessClusterClientAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference">MskServerlessClusterClientAuthenticationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.timeouts"></a>

```go
func Timeouts() MskServerlessClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference">MskServerlessClusterTimeoutsOutputReference</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.vpcConfig"></a>

```go
func VpcConfig() MskServerlessClusterVpcConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigList">MskServerlessClusterVpcConfigList</a>

---

##### `ClientAuthenticationInput`<sup>Optional</sup> <a name="ClientAuthenticationInput" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.clientAuthenticationInput"></a>

```go
func ClientAuthenticationInput() MskServerlessClusterClientAuthentication
```

- *Type:* <a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthentication">MskServerlessClusterClientAuthentication</a>

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.vpcConfigInput"></a>

```go
func VpcConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MskServerlessClusterClientAuthentication <a name="MskServerlessClusterClientAuthentication" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthentication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskserverlesscluster"

&mskserverlesscluster.MskServerlessClusterClientAuthentication {
	Sasl: github.com/cdktf/cdktf-provider-aws-go/aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSasl,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthentication.property.sasl">Sasl</a></code> | <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSasl">MskServerlessClusterClientAuthenticationSasl</a></code> | sasl block. |

---

##### `Sasl`<sup>Required</sup> <a name="Sasl" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthentication.property.sasl"></a>

```go
Sasl MskServerlessClusterClientAuthenticationSasl
```

- *Type:* <a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSasl">MskServerlessClusterClientAuthenticationSasl</a>

sasl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_serverless_cluster#sasl MskServerlessCluster#sasl}

---

### MskServerlessClusterClientAuthenticationSasl <a name="MskServerlessClusterClientAuthenticationSasl" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSasl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSasl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskserverlesscluster"

&mskserverlesscluster.MskServerlessClusterClientAuthenticationSasl {
	Iam: github.com/cdktf/cdktf-provider-aws-go/aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIam,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSasl.property.iam">Iam</a></code> | <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIam">MskServerlessClusterClientAuthenticationSaslIam</a></code> | iam block. |

---

##### `Iam`<sup>Required</sup> <a name="Iam" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSasl.property.iam"></a>

```go
Iam MskServerlessClusterClientAuthenticationSaslIam
```

- *Type:* <a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIam">MskServerlessClusterClientAuthenticationSaslIam</a>

iam block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_serverless_cluster#iam MskServerlessCluster#iam}

---

### MskServerlessClusterClientAuthenticationSaslIam <a name="MskServerlessClusterClientAuthenticationSaslIam" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIam.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskserverlesscluster"

&mskserverlesscluster.MskServerlessClusterClientAuthenticationSaslIam {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIam.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_serverless_cluster#enabled MskServerlessCluster#enabled}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIam.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_serverless_cluster#enabled MskServerlessCluster#enabled}.

---

### MskServerlessClusterConfig <a name="MskServerlessClusterConfig" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskserverlesscluster"

&mskserverlesscluster.MskServerlessClusterConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClientAuthentication: github.com/cdktf/cdktf-provider-aws-go/aws.mskServerlessCluster.MskServerlessClusterClientAuthentication,
	ClusterName: *string,
	VpcConfig: interface{},
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.mskServerlessCluster.MskServerlessClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.clientAuthentication">ClientAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthentication">MskServerlessClusterClientAuthentication</a></code> | client_authentication block. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_serverless_cluster#cluster_name MskServerlessCluster#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.vpcConfig">VpcConfig</a></code> | <code>interface{}</code> | vpc_config block. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_serverless_cluster#id MskServerlessCluster#id}. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_serverless_cluster#tags MskServerlessCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_serverless_cluster#tags_all MskServerlessCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeouts">MskServerlessClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientAuthentication`<sup>Required</sup> <a name="ClientAuthentication" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.clientAuthentication"></a>

```go
ClientAuthentication MskServerlessClusterClientAuthentication
```

- *Type:* <a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthentication">MskServerlessClusterClientAuthentication</a>

client_authentication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_serverless_cluster#client_authentication MskServerlessCluster#client_authentication}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_serverless_cluster#cluster_name MskServerlessCluster#cluster_name}.

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.vpcConfig"></a>

```go
VpcConfig interface{}
```

- *Type:* interface{}

vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_serverless_cluster#vpc_config MskServerlessCluster#vpc_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_serverless_cluster#id MskServerlessCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_serverless_cluster#tags MskServerlessCluster#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_serverless_cluster#tags_all MskServerlessCluster#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterConfig.property.timeouts"></a>

```go
Timeouts MskServerlessClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeouts">MskServerlessClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_serverless_cluster#timeouts MskServerlessCluster#timeouts}

---

### MskServerlessClusterTimeouts <a name="MskServerlessClusterTimeouts" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskserverlesscluster"

&mskserverlesscluster.MskServerlessClusterTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_serverless_cluster#create MskServerlessCluster#create}. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_serverless_cluster#delete MskServerlessCluster#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_serverless_cluster#create MskServerlessCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_serverless_cluster#delete MskServerlessCluster#delete}.

---

### MskServerlessClusterVpcConfig <a name="MskServerlessClusterVpcConfig" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskserverlesscluster"

&mskserverlesscluster.MskServerlessClusterVpcConfig {
	SubnetIds: *[]*string,
	SecurityGroupIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_serverless_cluster#subnet_ids MskServerlessCluster#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_serverless_cluster#security_group_ids MskServerlessCluster#security_group_ids}. |

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_serverless_cluster#subnet_ids MskServerlessCluster#subnet_ids}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_serverless_cluster#security_group_ids MskServerlessCluster#security_group_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### MskServerlessClusterClientAuthenticationOutputReference <a name="MskServerlessClusterClientAuthenticationOutputReference" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskserverlesscluster"

mskserverlesscluster.NewMskServerlessClusterClientAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskServerlessClusterClientAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.putSasl">PutSasl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSasl` <a name="PutSasl" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.putSasl"></a>

```go
func PutSasl(value MskServerlessClusterClientAuthenticationSasl)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.putSasl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSasl">MskServerlessClusterClientAuthenticationSasl</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.property.sasl">Sasl</a></code> | <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference">MskServerlessClusterClientAuthenticationSaslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.property.saslInput">SaslInput</a></code> | <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSasl">MskServerlessClusterClientAuthenticationSasl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthentication">MskServerlessClusterClientAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Sasl`<sup>Required</sup> <a name="Sasl" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.property.sasl"></a>

```go
func Sasl() MskServerlessClusterClientAuthenticationSaslOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference">MskServerlessClusterClientAuthenticationSaslOutputReference</a>

---

##### `SaslInput`<sup>Optional</sup> <a name="SaslInput" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.property.saslInput"></a>

```go
func SaslInput() MskServerlessClusterClientAuthenticationSasl
```

- *Type:* <a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSasl">MskServerlessClusterClientAuthenticationSasl</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() MskServerlessClusterClientAuthentication
```

- *Type:* <a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthentication">MskServerlessClusterClientAuthentication</a>

---


### MskServerlessClusterClientAuthenticationSaslIamOutputReference <a name="MskServerlessClusterClientAuthenticationSaslIamOutputReference" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskserverlesscluster"

mskserverlesscluster.NewMskServerlessClusterClientAuthenticationSaslIamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskServerlessClusterClientAuthenticationSaslIamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIam">MskServerlessClusterClientAuthenticationSaslIam</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference.property.internalValue"></a>

```go
func InternalValue() MskServerlessClusterClientAuthenticationSaslIam
```

- *Type:* <a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIam">MskServerlessClusterClientAuthenticationSaslIam</a>

---


### MskServerlessClusterClientAuthenticationSaslOutputReference <a name="MskServerlessClusterClientAuthenticationSaslOutputReference" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskserverlesscluster"

mskserverlesscluster.NewMskServerlessClusterClientAuthenticationSaslOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskServerlessClusterClientAuthenticationSaslOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.putIam">PutIam</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIam` <a name="PutIam" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.putIam"></a>

```go
func PutIam(value MskServerlessClusterClientAuthenticationSaslIam)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.putIam.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIam">MskServerlessClusterClientAuthenticationSaslIam</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.property.iam">Iam</a></code> | <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference">MskServerlessClusterClientAuthenticationSaslIamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.property.iamInput">IamInput</a></code> | <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIam">MskServerlessClusterClientAuthenticationSaslIam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSasl">MskServerlessClusterClientAuthenticationSasl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Iam`<sup>Required</sup> <a name="Iam" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.property.iam"></a>

```go
func Iam() MskServerlessClusterClientAuthenticationSaslIamOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIamOutputReference">MskServerlessClusterClientAuthenticationSaslIamOutputReference</a>

---

##### `IamInput`<sup>Optional</sup> <a name="IamInput" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.property.iamInput"></a>

```go
func IamInput() MskServerlessClusterClientAuthenticationSaslIam
```

- *Type:* <a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslIam">MskServerlessClusterClientAuthenticationSaslIam</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSaslOutputReference.property.internalValue"></a>

```go
func InternalValue() MskServerlessClusterClientAuthenticationSasl
```

- *Type:* <a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterClientAuthenticationSasl">MskServerlessClusterClientAuthenticationSasl</a>

---


### MskServerlessClusterTimeoutsOutputReference <a name="MskServerlessClusterTimeoutsOutputReference" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskserverlesscluster"

mskserverlesscluster.NewMskServerlessClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskServerlessClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskServerlessClusterVpcConfigList <a name="MskServerlessClusterVpcConfigList" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskserverlesscluster"

mskserverlesscluster.NewMskServerlessClusterVpcConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MskServerlessClusterVpcConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigList.get"></a>

```go
func Get(index *f64) MskServerlessClusterVpcConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskServerlessClusterVpcConfigOutputReference <a name="MskServerlessClusterVpcConfigOutputReference" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskserverlesscluster"

mskserverlesscluster.NewMskServerlessClusterVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MskServerlessClusterVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskServerlessCluster.MskServerlessClusterVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



