# `mskCluster` Submodule <a name="`mskCluster` Submodule" id="@cdktf/provider-aws.mskCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskCluster <a name="MskCluster" id="@cdktf/provider-aws.mskCluster.MskCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster aws_msk_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

mskcluster.NewMskCluster(scope Construct, id *string, config MskClusterConfig) MskCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig">MskClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig">MskClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.putBrokerNodeGroupInfo">PutBrokerNodeGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.putClientAuthentication">PutClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.putConfigurationInfo">PutConfigurationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.putEncryptionInfo">PutEncryptionInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.putLoggingInfo">PutLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.putOpenMonitoring">PutOpenMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetClientAuthentication">ResetClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetConfigurationInfo">ResetConfigurationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetEncryptionInfo">ResetEncryptionInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetEnhancedMonitoring">ResetEnhancedMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetLoggingInfo">ResetLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetOpenMonitoring">ResetOpenMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetStorageMode">ResetStorageMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.mskCluster.MskCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.mskCluster.MskCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.mskCluster.MskCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.mskCluster.MskCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.mskCluster.MskCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.mskCluster.MskCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.mskCluster.MskCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutBrokerNodeGroupInfo` <a name="PutBrokerNodeGroupInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.putBrokerNodeGroupInfo"></a>

```go
func PutBrokerNodeGroupInfo(value MskClusterBrokerNodeGroupInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskCluster.putBrokerNodeGroupInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a>

---

##### `PutClientAuthentication` <a name="PutClientAuthentication" id="@cdktf/provider-aws.mskCluster.MskCluster.putClientAuthentication"></a>

```go
func PutClientAuthentication(value MskClusterClientAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskCluster.putClientAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a>

---

##### `PutConfigurationInfo` <a name="PutConfigurationInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.putConfigurationInfo"></a>

```go
func PutConfigurationInfo(value MskClusterConfigurationInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskCluster.putConfigurationInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a>

---

##### `PutEncryptionInfo` <a name="PutEncryptionInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.putEncryptionInfo"></a>

```go
func PutEncryptionInfo(value MskClusterEncryptionInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskCluster.putEncryptionInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a>

---

##### `PutLoggingInfo` <a name="PutLoggingInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.putLoggingInfo"></a>

```go
func PutLoggingInfo(value MskClusterLoggingInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskCluster.putLoggingInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a>

---

##### `PutOpenMonitoring` <a name="PutOpenMonitoring" id="@cdktf/provider-aws.mskCluster.MskCluster.putOpenMonitoring"></a>

```go
func PutOpenMonitoring(value MskClusterOpenMonitoring)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskCluster.putOpenMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.mskCluster.MskCluster.putTimeouts"></a>

```go
func PutTimeouts(value MskClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeouts">MskClusterTimeouts</a>

---

##### `ResetClientAuthentication` <a name="ResetClientAuthentication" id="@cdktf/provider-aws.mskCluster.MskCluster.resetClientAuthentication"></a>

```go
func ResetClientAuthentication()
```

##### `ResetConfigurationInfo` <a name="ResetConfigurationInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.resetConfigurationInfo"></a>

```go
func ResetConfigurationInfo()
```

##### `ResetEncryptionInfo` <a name="ResetEncryptionInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.resetEncryptionInfo"></a>

```go
func ResetEncryptionInfo()
```

##### `ResetEnhancedMonitoring` <a name="ResetEnhancedMonitoring" id="@cdktf/provider-aws.mskCluster.MskCluster.resetEnhancedMonitoring"></a>

```go
func ResetEnhancedMonitoring()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.mskCluster.MskCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetLoggingInfo` <a name="ResetLoggingInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.resetLoggingInfo"></a>

```go
func ResetLoggingInfo()
```

##### `ResetOpenMonitoring` <a name="ResetOpenMonitoring" id="@cdktf/provider-aws.mskCluster.MskCluster.resetOpenMonitoring"></a>

```go
func ResetOpenMonitoring()
```

##### `ResetStorageMode` <a name="ResetStorageMode" id="@cdktf/provider-aws.mskCluster.MskCluster.resetStorageMode"></a>

```go
func ResetStorageMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.mskCluster.MskCluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.mskCluster.MskCluster.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.mskCluster.MskCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.mskCluster.MskCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

mskcluster.MskCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mskCluster.MskCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.mskCluster.MskCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

mskcluster.MskCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mskCluster.MskCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.mskCluster.MskCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

mskcluster.MskCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mskCluster.MskCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokers">BootstrapBrokers</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersPublicSaslIam">BootstrapBrokersPublicSaslIam</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersPublicSaslScram">BootstrapBrokersPublicSaslScram</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersPublicTls">BootstrapBrokersPublicTls</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersSaslIam">BootstrapBrokersSaslIam</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersSaslScram">BootstrapBrokersSaslScram</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersTls">BootstrapBrokersTls</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.brokerNodeGroupInfo">BrokerNodeGroupInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference">MskClusterBrokerNodeGroupInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.clientAuthentication">ClientAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference">MskClusterClientAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.configurationInfo">ConfigurationInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference">MskClusterConfigurationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.currentVersion">CurrentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.encryptionInfo">EncryptionInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference">MskClusterEncryptionInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.loggingInfo">LoggingInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference">MskClusterLoggingInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.openMonitoring">OpenMonitoring</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference">MskClusterOpenMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference">MskClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.zookeeperConnectString">ZookeeperConnectString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.zookeeperConnectStringTls">ZookeeperConnectStringTls</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.brokerNodeGroupInfoInput">BrokerNodeGroupInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.clientAuthenticationInput">ClientAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.configurationInfoInput">ConfigurationInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.encryptionInfoInput">EncryptionInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.enhancedMonitoringInput">EnhancedMonitoringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.kafkaVersionInput">KafkaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.loggingInfoInput">LoggingInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.numberOfBrokerNodesInput">NumberOfBrokerNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.openMonitoringInput">OpenMonitoringInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.storageModeInput">StorageModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.enhancedMonitoring">EnhancedMonitoring</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.kafkaVersion">KafkaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.numberOfBrokerNodes">NumberOfBrokerNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.storageMode">StorageMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.mskCluster.MskCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.mskCluster.MskCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.mskCluster.MskCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.mskCluster.MskCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.mskCluster.MskCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.mskCluster.MskCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.mskCluster.MskCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.mskCluster.MskCluster.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.mskCluster.MskCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.mskCluster.MskCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.mskCluster.MskCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mskCluster.MskCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.mskCluster.MskCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.mskCluster.MskCluster.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `BootstrapBrokers`<sup>Required</sup> <a name="BootstrapBrokers" id="@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokers"></a>

```go
func BootstrapBrokers() *string
```

- *Type:* *string

---

##### `BootstrapBrokersPublicSaslIam`<sup>Required</sup> <a name="BootstrapBrokersPublicSaslIam" id="@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersPublicSaslIam"></a>

```go
func BootstrapBrokersPublicSaslIam() *string
```

- *Type:* *string

---

##### `BootstrapBrokersPublicSaslScram`<sup>Required</sup> <a name="BootstrapBrokersPublicSaslScram" id="@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersPublicSaslScram"></a>

```go
func BootstrapBrokersPublicSaslScram() *string
```

- *Type:* *string

---

##### `BootstrapBrokersPublicTls`<sup>Required</sup> <a name="BootstrapBrokersPublicTls" id="@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersPublicTls"></a>

```go
func BootstrapBrokersPublicTls() *string
```

- *Type:* *string

---

##### `BootstrapBrokersSaslIam`<sup>Required</sup> <a name="BootstrapBrokersSaslIam" id="@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersSaslIam"></a>

```go
func BootstrapBrokersSaslIam() *string
```

- *Type:* *string

---

##### `BootstrapBrokersSaslScram`<sup>Required</sup> <a name="BootstrapBrokersSaslScram" id="@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersSaslScram"></a>

```go
func BootstrapBrokersSaslScram() *string
```

- *Type:* *string

---

##### `BootstrapBrokersTls`<sup>Required</sup> <a name="BootstrapBrokersTls" id="@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersTls"></a>

```go
func BootstrapBrokersTls() *string
```

- *Type:* *string

---

##### `BrokerNodeGroupInfo`<sup>Required</sup> <a name="BrokerNodeGroupInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.property.brokerNodeGroupInfo"></a>

```go
func BrokerNodeGroupInfo() MskClusterBrokerNodeGroupInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference">MskClusterBrokerNodeGroupInfoOutputReference</a>

---

##### `ClientAuthentication`<sup>Required</sup> <a name="ClientAuthentication" id="@cdktf/provider-aws.mskCluster.MskCluster.property.clientAuthentication"></a>

```go
func ClientAuthentication() MskClusterClientAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference">MskClusterClientAuthenticationOutputReference</a>

---

##### `ConfigurationInfo`<sup>Required</sup> <a name="ConfigurationInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.property.configurationInfo"></a>

```go
func ConfigurationInfo() MskClusterConfigurationInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference">MskClusterConfigurationInfoOutputReference</a>

---

##### `CurrentVersion`<sup>Required</sup> <a name="CurrentVersion" id="@cdktf/provider-aws.mskCluster.MskCluster.property.currentVersion"></a>

```go
func CurrentVersion() *string
```

- *Type:* *string

---

##### `EncryptionInfo`<sup>Required</sup> <a name="EncryptionInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.property.encryptionInfo"></a>

```go
func EncryptionInfo() MskClusterEncryptionInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference">MskClusterEncryptionInfoOutputReference</a>

---

##### `LoggingInfo`<sup>Required</sup> <a name="LoggingInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.property.loggingInfo"></a>

```go
func LoggingInfo() MskClusterLoggingInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference">MskClusterLoggingInfoOutputReference</a>

---

##### `OpenMonitoring`<sup>Required</sup> <a name="OpenMonitoring" id="@cdktf/provider-aws.mskCluster.MskCluster.property.openMonitoring"></a>

```go
func OpenMonitoring() MskClusterOpenMonitoringOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference">MskClusterOpenMonitoringOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.mskCluster.MskCluster.property.timeouts"></a>

```go
func Timeouts() MskClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference">MskClusterTimeoutsOutputReference</a>

---

##### `ZookeeperConnectString`<sup>Required</sup> <a name="ZookeeperConnectString" id="@cdktf/provider-aws.mskCluster.MskCluster.property.zookeeperConnectString"></a>

```go
func ZookeeperConnectString() *string
```

- *Type:* *string

---

##### `ZookeeperConnectStringTls`<sup>Required</sup> <a name="ZookeeperConnectStringTls" id="@cdktf/provider-aws.mskCluster.MskCluster.property.zookeeperConnectStringTls"></a>

```go
func ZookeeperConnectStringTls() *string
```

- *Type:* *string

---

##### `BrokerNodeGroupInfoInput`<sup>Optional</sup> <a name="BrokerNodeGroupInfoInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.brokerNodeGroupInfoInput"></a>

```go
func BrokerNodeGroupInfoInput() MskClusterBrokerNodeGroupInfo
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a>

---

##### `ClientAuthenticationInput`<sup>Optional</sup> <a name="ClientAuthenticationInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.clientAuthenticationInput"></a>

```go
func ClientAuthenticationInput() MskClusterClientAuthentication
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a>

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `ConfigurationInfoInput`<sup>Optional</sup> <a name="ConfigurationInfoInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.configurationInfoInput"></a>

```go
func ConfigurationInfoInput() MskClusterConfigurationInfo
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a>

---

##### `EncryptionInfoInput`<sup>Optional</sup> <a name="EncryptionInfoInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.encryptionInfoInput"></a>

```go
func EncryptionInfoInput() MskClusterEncryptionInfo
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a>

---

##### `EnhancedMonitoringInput`<sup>Optional</sup> <a name="EnhancedMonitoringInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.enhancedMonitoringInput"></a>

```go
func EnhancedMonitoringInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KafkaVersionInput`<sup>Optional</sup> <a name="KafkaVersionInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.kafkaVersionInput"></a>

```go
func KafkaVersionInput() *string
```

- *Type:* *string

---

##### `LoggingInfoInput`<sup>Optional</sup> <a name="LoggingInfoInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.loggingInfoInput"></a>

```go
func LoggingInfoInput() MskClusterLoggingInfo
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a>

---

##### `NumberOfBrokerNodesInput`<sup>Optional</sup> <a name="NumberOfBrokerNodesInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.numberOfBrokerNodesInput"></a>

```go
func NumberOfBrokerNodesInput() *f64
```

- *Type:* *f64

---

##### `OpenMonitoringInput`<sup>Optional</sup> <a name="OpenMonitoringInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.openMonitoringInput"></a>

```go
func OpenMonitoringInput() MskClusterOpenMonitoring
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a>

---

##### `StorageModeInput`<sup>Optional</sup> <a name="StorageModeInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.storageModeInput"></a>

```go
func StorageModeInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.mskCluster.MskCluster.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `EnhancedMonitoring`<sup>Required</sup> <a name="EnhancedMonitoring" id="@cdktf/provider-aws.mskCluster.MskCluster.property.enhancedMonitoring"></a>

```go
func EnhancedMonitoring() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.mskCluster.MskCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KafkaVersion`<sup>Required</sup> <a name="KafkaVersion" id="@cdktf/provider-aws.mskCluster.MskCluster.property.kafkaVersion"></a>

```go
func KafkaVersion() *string
```

- *Type:* *string

---

##### `NumberOfBrokerNodes`<sup>Required</sup> <a name="NumberOfBrokerNodes" id="@cdktf/provider-aws.mskCluster.MskCluster.property.numberOfBrokerNodes"></a>

```go
func NumberOfBrokerNodes() *f64
```

- *Type:* *f64

---

##### `StorageMode`<sup>Required</sup> <a name="StorageMode" id="@cdktf/provider-aws.mskCluster.MskCluster.property.storageMode"></a>

```go
func StorageMode() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.mskCluster.MskCluster.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.mskCluster.MskCluster.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.mskCluster.MskCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MskClusterBrokerNodeGroupInfo <a name="MskClusterBrokerNodeGroupInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

&mskcluster.MskClusterBrokerNodeGroupInfo {
	ClientSubnets: *[]*string,
	InstanceType: *string,
	SecurityGroups: *[]*string,
	AzDistribution: *string,
	ConnectivityInfo: github.com/cdktf/cdktf-provider-aws-go/aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo,
	EbsVolumeSize: *f64,
	StorageInfo: github.com/cdktf/cdktf-provider-aws-go/aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.clientSubnets">ClientSubnets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#client_subnets MskCluster#client_subnets}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#instance_type MskCluster#instance_type}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#security_groups MskCluster#security_groups}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.azDistribution">AzDistribution</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#az_distribution MskCluster#az_distribution}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.connectivityInfo">ConnectivityInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a></code> | connectivity_info block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.ebsVolumeSize">EbsVolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#ebs_volume_size MskCluster#ebs_volume_size}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.storageInfo">StorageInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a></code> | storage_info block. |

---

##### `ClientSubnets`<sup>Required</sup> <a name="ClientSubnets" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.clientSubnets"></a>

```go
ClientSubnets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#client_subnets MskCluster#client_subnets}.

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#instance_type MskCluster#instance_type}.

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.securityGroups"></a>

```go
SecurityGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#security_groups MskCluster#security_groups}.

---

##### `AzDistribution`<sup>Optional</sup> <a name="AzDistribution" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.azDistribution"></a>

```go
AzDistribution *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#az_distribution MskCluster#az_distribution}.

---

##### `ConnectivityInfo`<sup>Optional</sup> <a name="ConnectivityInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.connectivityInfo"></a>

```go
ConnectivityInfo MskClusterBrokerNodeGroupInfoConnectivityInfo
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a>

connectivity_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#connectivity_info MskCluster#connectivity_info}

---

##### `EbsVolumeSize`<sup>Optional</sup> <a name="EbsVolumeSize" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.ebsVolumeSize"></a>

```go
EbsVolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#ebs_volume_size MskCluster#ebs_volume_size}.

---

##### `StorageInfo`<sup>Optional</sup> <a name="StorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.storageInfo"></a>

```go
StorageInfo MskClusterBrokerNodeGroupInfoStorageInfo
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a>

storage_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#storage_info MskCluster#storage_info}

---

### MskClusterBrokerNodeGroupInfoConnectivityInfo <a name="MskClusterBrokerNodeGroupInfoConnectivityInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

&mskcluster.MskClusterBrokerNodeGroupInfoConnectivityInfo {
	PublicAccess: github.com/cdktf/cdktf-provider-aws-go/aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo.property.publicAccess">PublicAccess</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a></code> | public_access block. |

---

##### `PublicAccess`<sup>Optional</sup> <a name="PublicAccess" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo.property.publicAccess"></a>

```go
PublicAccess MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a>

public_access block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#public_access MskCluster#public_access}

---

### MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

&mskcluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#type MskCluster#type}. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#type MskCluster#type}.

---

### MskClusterBrokerNodeGroupInfoStorageInfo <a name="MskClusterBrokerNodeGroupInfoStorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

&mskcluster.MskClusterBrokerNodeGroupInfoStorageInfo {
	EbsStorageInfo: github.com/cdktf/cdktf-provider-aws-go/aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo.property.ebsStorageInfo">EbsStorageInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a></code> | ebs_storage_info block. |

---

##### `EbsStorageInfo`<sup>Optional</sup> <a name="EbsStorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo.property.ebsStorageInfo"></a>

```go
EbsStorageInfo MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a>

ebs_storage_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#ebs_storage_info MskCluster#ebs_storage_info}

---

### MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo <a name="MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

&mskcluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo {
	ProvisionedThroughput: github.com/cdktf/cdktf-provider-aws-go/aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput,
	VolumeSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a></code> | provisioned_throughput block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#volume_size MskCluster#volume_size}. |

---

##### `ProvisionedThroughput`<sup>Optional</sup> <a name="ProvisionedThroughput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.property.provisionedThroughput"></a>

```go
ProvisionedThroughput MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a>

provisioned_throughput block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#provisioned_throughput MskCluster#provisioned_throughput}

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.property.volumeSize"></a>

```go
VolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#volume_size MskCluster#volume_size}.

---

### MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput <a name="MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

&mskcluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput {
	Enabled: interface{},
	VolumeThroughput: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled MskCluster#enabled}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.property.volumeThroughput">VolumeThroughput</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#volume_throughput MskCluster#volume_throughput}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled MskCluster#enabled}.

---

##### `VolumeThroughput`<sup>Optional</sup> <a name="VolumeThroughput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.property.volumeThroughput"></a>

```go
VolumeThroughput *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#volume_throughput MskCluster#volume_throughput}.

---

### MskClusterClientAuthentication <a name="MskClusterClientAuthentication" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

&mskcluster.MskClusterClientAuthentication {
	Sasl: github.com/cdktf/cdktf-provider-aws-go/aws.mskCluster.MskClusterClientAuthenticationSasl,
	Tls: github.com/cdktf/cdktf-provider-aws-go/aws.mskCluster.MskClusterClientAuthenticationTls,
	Unauthenticated: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication.property.sasl">Sasl</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a></code> | sasl block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication.property.tls">Tls</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a></code> | tls block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication.property.unauthenticated">Unauthenticated</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#unauthenticated MskCluster#unauthenticated}. |

---

##### `Sasl`<sup>Optional</sup> <a name="Sasl" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication.property.sasl"></a>

```go
Sasl MskClusterClientAuthenticationSasl
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a>

sasl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#sasl MskCluster#sasl}

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication.property.tls"></a>

```go
Tls MskClusterClientAuthenticationTls
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a>

tls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#tls MskCluster#tls}

---

##### `Unauthenticated`<sup>Optional</sup> <a name="Unauthenticated" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication.property.unauthenticated"></a>

```go
Unauthenticated interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#unauthenticated MskCluster#unauthenticated}.

---

### MskClusterClientAuthenticationSasl <a name="MskClusterClientAuthenticationSasl" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

&mskcluster.MskClusterClientAuthenticationSasl {
	Iam: interface{},
	Scram: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl.property.iam">Iam</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#iam MskCluster#iam}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl.property.scram">Scram</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#scram MskCluster#scram}. |

---

##### `Iam`<sup>Optional</sup> <a name="Iam" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl.property.iam"></a>

```go
Iam interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#iam MskCluster#iam}.

---

##### `Scram`<sup>Optional</sup> <a name="Scram" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl.property.scram"></a>

```go
Scram interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#scram MskCluster#scram}.

---

### MskClusterClientAuthenticationTls <a name="MskClusterClientAuthenticationTls" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

&mskcluster.MskClusterClientAuthenticationTls {
	CertificateAuthorityArns: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls.property.certificateAuthorityArns">CertificateAuthorityArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#certificate_authority_arns MskCluster#certificate_authority_arns}. |

---

##### `CertificateAuthorityArns`<sup>Optional</sup> <a name="CertificateAuthorityArns" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls.property.certificateAuthorityArns"></a>

```go
CertificateAuthorityArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#certificate_authority_arns MskCluster#certificate_authority_arns}.

---

### MskClusterConfig <a name="MskClusterConfig" id="@cdktf/provider-aws.mskCluster.MskClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

&mskcluster.MskClusterConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BrokerNodeGroupInfo: github.com/cdktf/cdktf-provider-aws-go/aws.mskCluster.MskClusterBrokerNodeGroupInfo,
	ClusterName: *string,
	KafkaVersion: *string,
	NumberOfBrokerNodes: *f64,
	ClientAuthentication: github.com/cdktf/cdktf-provider-aws-go/aws.mskCluster.MskClusterClientAuthentication,
	ConfigurationInfo: github.com/cdktf/cdktf-provider-aws-go/aws.mskCluster.MskClusterConfigurationInfo,
	EncryptionInfo: github.com/cdktf/cdktf-provider-aws-go/aws.mskCluster.MskClusterEncryptionInfo,
	EnhancedMonitoring: *string,
	Id: *string,
	LoggingInfo: github.com/cdktf/cdktf-provider-aws-go/aws.mskCluster.MskClusterLoggingInfo,
	OpenMonitoring: github.com/cdktf/cdktf-provider-aws-go/aws.mskCluster.MskClusterOpenMonitoring,
	StorageMode: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.mskCluster.MskClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.brokerNodeGroupInfo">BrokerNodeGroupInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a></code> | broker_node_group_info block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#cluster_name MskCluster#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.kafkaVersion">KafkaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#kafka_version MskCluster#kafka_version}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.numberOfBrokerNodes">NumberOfBrokerNodes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#number_of_broker_nodes MskCluster#number_of_broker_nodes}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.clientAuthentication">ClientAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a></code> | client_authentication block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.configurationInfo">ConfigurationInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a></code> | configuration_info block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.encryptionInfo">EncryptionInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a></code> | encryption_info block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.enhancedMonitoring">EnhancedMonitoring</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enhanced_monitoring MskCluster#enhanced_monitoring}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#id MskCluster#id}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.loggingInfo">LoggingInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a></code> | logging_info block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.openMonitoring">OpenMonitoring</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a></code> | open_monitoring block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.storageMode">StorageMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#storage_mode MskCluster#storage_mode}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#tags MskCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#tags_all MskCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeouts">MskClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BrokerNodeGroupInfo`<sup>Required</sup> <a name="BrokerNodeGroupInfo" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.brokerNodeGroupInfo"></a>

```go
BrokerNodeGroupInfo MskClusterBrokerNodeGroupInfo
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a>

broker_node_group_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#broker_node_group_info MskCluster#broker_node_group_info}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#cluster_name MskCluster#cluster_name}.

---

##### `KafkaVersion`<sup>Required</sup> <a name="KafkaVersion" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.kafkaVersion"></a>

```go
KafkaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#kafka_version MskCluster#kafka_version}.

---

##### `NumberOfBrokerNodes`<sup>Required</sup> <a name="NumberOfBrokerNodes" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.numberOfBrokerNodes"></a>

```go
NumberOfBrokerNodes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#number_of_broker_nodes MskCluster#number_of_broker_nodes}.

---

##### `ClientAuthentication`<sup>Optional</sup> <a name="ClientAuthentication" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.clientAuthentication"></a>

```go
ClientAuthentication MskClusterClientAuthentication
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a>

client_authentication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#client_authentication MskCluster#client_authentication}

---

##### `ConfigurationInfo`<sup>Optional</sup> <a name="ConfigurationInfo" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.configurationInfo"></a>

```go
ConfigurationInfo MskClusterConfigurationInfo
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a>

configuration_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#configuration_info MskCluster#configuration_info}

---

##### `EncryptionInfo`<sup>Optional</sup> <a name="EncryptionInfo" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.encryptionInfo"></a>

```go
EncryptionInfo MskClusterEncryptionInfo
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a>

encryption_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#encryption_info MskCluster#encryption_info}

---

##### `EnhancedMonitoring`<sup>Optional</sup> <a name="EnhancedMonitoring" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.enhancedMonitoring"></a>

```go
EnhancedMonitoring *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enhanced_monitoring MskCluster#enhanced_monitoring}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#id MskCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoggingInfo`<sup>Optional</sup> <a name="LoggingInfo" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.loggingInfo"></a>

```go
LoggingInfo MskClusterLoggingInfo
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a>

logging_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#logging_info MskCluster#logging_info}

---

##### `OpenMonitoring`<sup>Optional</sup> <a name="OpenMonitoring" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.openMonitoring"></a>

```go
OpenMonitoring MskClusterOpenMonitoring
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a>

open_monitoring block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#open_monitoring MskCluster#open_monitoring}

---

##### `StorageMode`<sup>Optional</sup> <a name="StorageMode" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.storageMode"></a>

```go
StorageMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#storage_mode MskCluster#storage_mode}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#tags MskCluster#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#tags_all MskCluster#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.timeouts"></a>

```go
Timeouts MskClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeouts">MskClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#timeouts MskCluster#timeouts}

---

### MskClusterConfigurationInfo <a name="MskClusterConfigurationInfo" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

&mskcluster.MskClusterConfigurationInfo {
	Arn: *string,
	Revision: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#arn MskCluster#arn}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo.property.revision">Revision</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#revision MskCluster#revision}. |

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#arn MskCluster#arn}.

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo.property.revision"></a>

```go
Revision *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#revision MskCluster#revision}.

---

### MskClusterEncryptionInfo <a name="MskClusterEncryptionInfo" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

&mskcluster.MskClusterEncryptionInfo {
	EncryptionAtRestKmsKeyArn: *string,
	EncryptionInTransit: github.com/cdktf/cdktf-provider-aws-go/aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo.property.encryptionAtRestKmsKeyArn">EncryptionAtRestKmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#encryption_at_rest_kms_key_arn MskCluster#encryption_at_rest_kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo.property.encryptionInTransit">EncryptionInTransit</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a></code> | encryption_in_transit block. |

---

##### `EncryptionAtRestKmsKeyArn`<sup>Optional</sup> <a name="EncryptionAtRestKmsKeyArn" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo.property.encryptionAtRestKmsKeyArn"></a>

```go
EncryptionAtRestKmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#encryption_at_rest_kms_key_arn MskCluster#encryption_at_rest_kms_key_arn}.

---

##### `EncryptionInTransit`<sup>Optional</sup> <a name="EncryptionInTransit" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo.property.encryptionInTransit"></a>

```go
EncryptionInTransit MskClusterEncryptionInfoEncryptionInTransit
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a>

encryption_in_transit block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#encryption_in_transit MskCluster#encryption_in_transit}

---

### MskClusterEncryptionInfoEncryptionInTransit <a name="MskClusterEncryptionInfoEncryptionInTransit" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

&mskcluster.MskClusterEncryptionInfoEncryptionInTransit {
	ClientBroker: *string,
	InCluster: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit.property.clientBroker">ClientBroker</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#client_broker MskCluster#client_broker}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit.property.inCluster">InCluster</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#in_cluster MskCluster#in_cluster}. |

---

##### `ClientBroker`<sup>Optional</sup> <a name="ClientBroker" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit.property.clientBroker"></a>

```go
ClientBroker *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#client_broker MskCluster#client_broker}.

---

##### `InCluster`<sup>Optional</sup> <a name="InCluster" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit.property.inCluster"></a>

```go
InCluster interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#in_cluster MskCluster#in_cluster}.

---

### MskClusterLoggingInfo <a name="MskClusterLoggingInfo" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

&mskcluster.MskClusterLoggingInfo {
	BrokerLogs: github.com/cdktf/cdktf-provider-aws-go/aws.mskCluster.MskClusterLoggingInfoBrokerLogs,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo.property.brokerLogs">BrokerLogs</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a></code> | broker_logs block. |

---

##### `BrokerLogs`<sup>Required</sup> <a name="BrokerLogs" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo.property.brokerLogs"></a>

```go
BrokerLogs MskClusterLoggingInfoBrokerLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a>

broker_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#broker_logs MskCluster#broker_logs}

---

### MskClusterLoggingInfoBrokerLogs <a name="MskClusterLoggingInfoBrokerLogs" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

&mskcluster.MskClusterLoggingInfoBrokerLogs {
	CloudwatchLogs: github.com/cdktf/cdktf-provider-aws-go/aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs,
	Firehose: github.com/cdktf/cdktf-provider-aws-go/aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose,
	S3: github.com/cdktf/cdktf-provider-aws-go/aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a></code> | cloudwatch_logs block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs.property.firehose">Firehose</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a></code> | firehose block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a></code> | s3 block. |

---

##### `CloudwatchLogs`<sup>Optional</sup> <a name="CloudwatchLogs" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs.property.cloudwatchLogs"></a>

```go
CloudwatchLogs MskClusterLoggingInfoBrokerLogsCloudwatchLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#cloudwatch_logs MskCluster#cloudwatch_logs}

---

##### `Firehose`<sup>Optional</sup> <a name="Firehose" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs.property.firehose"></a>

```go
Firehose MskClusterLoggingInfoBrokerLogsFirehose
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a>

firehose block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#firehose MskCluster#firehose}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs.property.s3"></a>

```go
S3 MskClusterLoggingInfoBrokerLogsS3
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#s3 MskCluster#s3}

---

### MskClusterLoggingInfoBrokerLogsCloudwatchLogs <a name="MskClusterLoggingInfoBrokerLogsCloudwatchLogs" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

&mskcluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs {
	Enabled: interface{},
	LogGroup: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled MskCluster#enabled}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs.property.logGroup">LogGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#log_group MskCluster#log_group}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled MskCluster#enabled}.

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs.property.logGroup"></a>

```go
LogGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#log_group MskCluster#log_group}.

---

### MskClusterLoggingInfoBrokerLogsFirehose <a name="MskClusterLoggingInfoBrokerLogsFirehose" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

&mskcluster.MskClusterLoggingInfoBrokerLogsFirehose {
	Enabled: interface{},
	DeliveryStream: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled MskCluster#enabled}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose.property.deliveryStream">DeliveryStream</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#delivery_stream MskCluster#delivery_stream}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled MskCluster#enabled}.

---

##### `DeliveryStream`<sup>Optional</sup> <a name="DeliveryStream" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose.property.deliveryStream"></a>

```go
DeliveryStream *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#delivery_stream MskCluster#delivery_stream}.

---

### MskClusterLoggingInfoBrokerLogsS3 <a name="MskClusterLoggingInfoBrokerLogsS3" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

&mskcluster.MskClusterLoggingInfoBrokerLogsS3 {
	Enabled: interface{},
	Bucket: *string,
	Prefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled MskCluster#enabled}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#bucket MskCluster#bucket}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#prefix MskCluster#prefix}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled MskCluster#enabled}.

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#bucket MskCluster#bucket}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#prefix MskCluster#prefix}.

---

### MskClusterOpenMonitoring <a name="MskClusterOpenMonitoring" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

&mskcluster.MskClusterOpenMonitoring {
	Prometheus: github.com/cdktf/cdktf-provider-aws-go/aws.mskCluster.MskClusterOpenMonitoringPrometheus,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring.property.prometheus">Prometheus</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a></code> | prometheus block. |

---

##### `Prometheus`<sup>Required</sup> <a name="Prometheus" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring.property.prometheus"></a>

```go
Prometheus MskClusterOpenMonitoringPrometheus
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a>

prometheus block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#prometheus MskCluster#prometheus}

---

### MskClusterOpenMonitoringPrometheus <a name="MskClusterOpenMonitoringPrometheus" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

&mskcluster.MskClusterOpenMonitoringPrometheus {
	JmxExporter: github.com/cdktf/cdktf-provider-aws-go/aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter,
	NodeExporter: github.com/cdktf/cdktf-provider-aws-go/aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus.property.jmxExporter">JmxExporter</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a></code> | jmx_exporter block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus.property.nodeExporter">NodeExporter</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a></code> | node_exporter block. |

---

##### `JmxExporter`<sup>Optional</sup> <a name="JmxExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus.property.jmxExporter"></a>

```go
JmxExporter MskClusterOpenMonitoringPrometheusJmxExporter
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a>

jmx_exporter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#jmx_exporter MskCluster#jmx_exporter}

---

##### `NodeExporter`<sup>Optional</sup> <a name="NodeExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus.property.nodeExporter"></a>

```go
NodeExporter MskClusterOpenMonitoringPrometheusNodeExporter
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a>

node_exporter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#node_exporter MskCluster#node_exporter}

---

### MskClusterOpenMonitoringPrometheusJmxExporter <a name="MskClusterOpenMonitoringPrometheusJmxExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

&mskcluster.MskClusterOpenMonitoringPrometheusJmxExporter {
	EnabledInBroker: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter.property.enabledInBroker">EnabledInBroker</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled_in_broker MskCluster#enabled_in_broker}. |

---

##### `EnabledInBroker`<sup>Required</sup> <a name="EnabledInBroker" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter.property.enabledInBroker"></a>

```go
EnabledInBroker interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled_in_broker MskCluster#enabled_in_broker}.

---

### MskClusterOpenMonitoringPrometheusNodeExporter <a name="MskClusterOpenMonitoringPrometheusNodeExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

&mskcluster.MskClusterOpenMonitoringPrometheusNodeExporter {
	EnabledInBroker: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter.property.enabledInBroker">EnabledInBroker</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled_in_broker MskCluster#enabled_in_broker}. |

---

##### `EnabledInBroker`<sup>Required</sup> <a name="EnabledInBroker" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter.property.enabledInBroker"></a>

```go
EnabledInBroker interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled_in_broker MskCluster#enabled_in_broker}.

---

### MskClusterTimeouts <a name="MskClusterTimeouts" id="@cdktf/provider-aws.mskCluster.MskClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

&mskcluster.MskClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#create MskCluster#create}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#delete MskCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#update MskCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.mskCluster.MskClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#create MskCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.mskCluster.MskClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#delete MskCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.mskCluster.MskClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#update MskCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

mskcluster.NewMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.putPublicAccess">PutPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resetPublicAccess">ResetPublicAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublicAccess` <a name="PutPublicAccess" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.putPublicAccess"></a>

```go
func PutPublicAccess(value MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.putPublicAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a>

---

##### `ResetPublicAccess` <a name="ResetPublicAccess" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resetPublicAccess"></a>

```go
func ResetPublicAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.publicAccess">PublicAccess</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.publicAccessInput">PublicAccessInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicAccess`<sup>Required</sup> <a name="PublicAccess" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.publicAccess"></a>

```go
func PublicAccess() MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference</a>

---

##### `PublicAccessInput`<sup>Optional</sup> <a name="PublicAccessInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.publicAccessInput"></a>

```go
func PublicAccessInput() MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() MskClusterBrokerNodeGroupInfoConnectivityInfo
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a>

---


### MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

mskcluster.NewMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a>

---


### MskClusterBrokerNodeGroupInfoOutputReference <a name="MskClusterBrokerNodeGroupInfoOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

mskcluster.NewMskClusterBrokerNodeGroupInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskClusterBrokerNodeGroupInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putConnectivityInfo">PutConnectivityInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putStorageInfo">PutStorageInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetAzDistribution">ResetAzDistribution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetConnectivityInfo">ResetConnectivityInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetEbsVolumeSize">ResetEbsVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetStorageInfo">ResetStorageInfo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConnectivityInfo` <a name="PutConnectivityInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putConnectivityInfo"></a>

```go
func PutConnectivityInfo(value MskClusterBrokerNodeGroupInfoConnectivityInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putConnectivityInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a>

---

##### `PutStorageInfo` <a name="PutStorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putStorageInfo"></a>

```go
func PutStorageInfo(value MskClusterBrokerNodeGroupInfoStorageInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putStorageInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a>

---

##### `ResetAzDistribution` <a name="ResetAzDistribution" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetAzDistribution"></a>

```go
func ResetAzDistribution()
```

##### `ResetConnectivityInfo` <a name="ResetConnectivityInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetConnectivityInfo"></a>

```go
func ResetConnectivityInfo()
```

##### `ResetEbsVolumeSize` <a name="ResetEbsVolumeSize" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetEbsVolumeSize"></a>

```go
func ResetEbsVolumeSize()
```

##### `ResetStorageInfo` <a name="ResetStorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetStorageInfo"></a>

```go
func ResetStorageInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.connectivityInfo">ConnectivityInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.storageInfo">StorageInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.azDistributionInput">AzDistributionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.clientSubnetsInput">ClientSubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.connectivityInfoInput">ConnectivityInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.ebsVolumeSizeInput">EbsVolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.storageInfoInput">StorageInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.azDistribution">AzDistribution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.clientSubnets">ClientSubnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.ebsVolumeSize">EbsVolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectivityInfo`<sup>Required</sup> <a name="ConnectivityInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.connectivityInfo"></a>

```go
func ConnectivityInfo() MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference</a>

---

##### `StorageInfo`<sup>Required</sup> <a name="StorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.storageInfo"></a>

```go
func StorageInfo() MskClusterBrokerNodeGroupInfoStorageInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoOutputReference</a>

---

##### `AzDistributionInput`<sup>Optional</sup> <a name="AzDistributionInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.azDistributionInput"></a>

```go
func AzDistributionInput() *string
```

- *Type:* *string

---

##### `ClientSubnetsInput`<sup>Optional</sup> <a name="ClientSubnetsInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.clientSubnetsInput"></a>

```go
func ClientSubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectivityInfoInput`<sup>Optional</sup> <a name="ConnectivityInfoInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.connectivityInfoInput"></a>

```go
func ConnectivityInfoInput() MskClusterBrokerNodeGroupInfoConnectivityInfo
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a>

---

##### `EbsVolumeSizeInput`<sup>Optional</sup> <a name="EbsVolumeSizeInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.ebsVolumeSizeInput"></a>

```go
func EbsVolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.securityGroupsInput"></a>

```go
func SecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StorageInfoInput`<sup>Optional</sup> <a name="StorageInfoInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.storageInfoInput"></a>

```go
func StorageInfoInput() MskClusterBrokerNodeGroupInfoStorageInfo
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a>

---

##### `AzDistribution`<sup>Required</sup> <a name="AzDistribution" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.azDistribution"></a>

```go
func AzDistribution() *string
```

- *Type:* *string

---

##### `ClientSubnets`<sup>Required</sup> <a name="ClientSubnets" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.clientSubnets"></a>

```go
func ClientSubnets() *[]*string
```

- *Type:* *[]*string

---

##### `EbsVolumeSize`<sup>Required</sup> <a name="EbsVolumeSize" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.ebsVolumeSize"></a>

```go
func EbsVolumeSize() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() MskClusterBrokerNodeGroupInfo
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a>

---


### MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference <a name="MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

mskcluster.NewMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.putProvisionedThroughput">PutProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resetProvisionedThroughput">ResetProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProvisionedThroughput` <a name="PutProvisionedThroughput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.putProvisionedThroughput"></a>

```go
func PutProvisionedThroughput(value MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.putProvisionedThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a>

---

##### `ResetProvisionedThroughput` <a name="ResetProvisionedThroughput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resetProvisionedThroughput"></a>

```go
func ResetProvisionedThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resetVolumeSize"></a>

```go
func ResetVolumeSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.provisionedThroughputInput">ProvisionedThroughputInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProvisionedThroughput`<sup>Required</sup> <a name="ProvisionedThroughput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.provisionedThroughput"></a>

```go
func ProvisionedThroughput() MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference</a>

---

##### `ProvisionedThroughputInput`<sup>Optional</sup> <a name="ProvisionedThroughputInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.provisionedThroughputInput"></a>

```go
func ProvisionedThroughputInput() MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a>

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.volumeSizeInput"></a>

```go
func VolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.volumeSize"></a>

```go
func VolumeSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a>

---


### MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference <a name="MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

mskcluster.NewMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resetVolumeThroughput">ResetVolumeThroughput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetVolumeThroughput` <a name="ResetVolumeThroughput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resetVolumeThroughput"></a>

```go
func ResetVolumeThroughput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.volumeThroughputInput">VolumeThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.volumeThroughput">VolumeThroughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeThroughputInput`<sup>Optional</sup> <a name="VolumeThroughputInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.volumeThroughputInput"></a>

```go
func VolumeThroughputInput() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `VolumeThroughput`<sup>Required</sup> <a name="VolumeThroughput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.volumeThroughput"></a>

```go
func VolumeThroughput() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.internalValue"></a>

```go
func InternalValue() MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a>

---


### MskClusterBrokerNodeGroupInfoStorageInfoOutputReference <a name="MskClusterBrokerNodeGroupInfoStorageInfoOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

mskcluster.NewMskClusterBrokerNodeGroupInfoStorageInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskClusterBrokerNodeGroupInfoStorageInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.putEbsStorageInfo">PutEbsStorageInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resetEbsStorageInfo">ResetEbsStorageInfo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbsStorageInfo` <a name="PutEbsStorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.putEbsStorageInfo"></a>

```go
func PutEbsStorageInfo(value MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.putEbsStorageInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a>

---

##### `ResetEbsStorageInfo` <a name="ResetEbsStorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resetEbsStorageInfo"></a>

```go
func ResetEbsStorageInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.ebsStorageInfo">EbsStorageInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.ebsStorageInfoInput">EbsStorageInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EbsStorageInfo`<sup>Required</sup> <a name="EbsStorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.ebsStorageInfo"></a>

```go
func EbsStorageInfo() MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference</a>

---

##### `EbsStorageInfoInput`<sup>Optional</sup> <a name="EbsStorageInfoInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.ebsStorageInfoInput"></a>

```go
func EbsStorageInfoInput() MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() MskClusterBrokerNodeGroupInfoStorageInfo
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a>

---


### MskClusterClientAuthenticationOutputReference <a name="MskClusterClientAuthenticationOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

mskcluster.NewMskClusterClientAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskClusterClientAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.putSasl">PutSasl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.putTls">PutTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.resetSasl">ResetSasl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.resetTls">ResetTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.resetUnauthenticated">ResetUnauthenticated</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSasl` <a name="PutSasl" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.putSasl"></a>

```go
func PutSasl(value MskClusterClientAuthenticationSasl)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.putSasl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a>

---

##### `PutTls` <a name="PutTls" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.putTls"></a>

```go
func PutTls(value MskClusterClientAuthenticationTls)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.putTls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a>

---

##### `ResetSasl` <a name="ResetSasl" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.resetSasl"></a>

```go
func ResetSasl()
```

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.resetTls"></a>

```go
func ResetTls()
```

##### `ResetUnauthenticated` <a name="ResetUnauthenticated" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.resetUnauthenticated"></a>

```go
func ResetUnauthenticated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.sasl">Sasl</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference">MskClusterClientAuthenticationSaslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.tls">Tls</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference">MskClusterClientAuthenticationTlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.saslInput">SaslInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.tlsInput">TlsInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.unauthenticatedInput">UnauthenticatedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.unauthenticated">Unauthenticated</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Sasl`<sup>Required</sup> <a name="Sasl" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.sasl"></a>

```go
func Sasl() MskClusterClientAuthenticationSaslOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference">MskClusterClientAuthenticationSaslOutputReference</a>

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.tls"></a>

```go
func Tls() MskClusterClientAuthenticationTlsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference">MskClusterClientAuthenticationTlsOutputReference</a>

---

##### `SaslInput`<sup>Optional</sup> <a name="SaslInput" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.saslInput"></a>

```go
func SaslInput() MskClusterClientAuthenticationSasl
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a>

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.tlsInput"></a>

```go
func TlsInput() MskClusterClientAuthenticationTls
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a>

---

##### `UnauthenticatedInput`<sup>Optional</sup> <a name="UnauthenticatedInput" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.unauthenticatedInput"></a>

```go
func UnauthenticatedInput() interface{}
```

- *Type:* interface{}

---

##### `Unauthenticated`<sup>Required</sup> <a name="Unauthenticated" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.unauthenticated"></a>

```go
func Unauthenticated() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() MskClusterClientAuthentication
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a>

---


### MskClusterClientAuthenticationSaslOutputReference <a name="MskClusterClientAuthenticationSaslOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

mskcluster.NewMskClusterClientAuthenticationSaslOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskClusterClientAuthenticationSaslOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resetIam">ResetIam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resetScram">ResetScram</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIam` <a name="ResetIam" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resetIam"></a>

```go
func ResetIam()
```

##### `ResetScram` <a name="ResetScram" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resetScram"></a>

```go
func ResetScram()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.iamInput">IamInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.scramInput">ScramInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.iam">Iam</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.scram">Scram</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IamInput`<sup>Optional</sup> <a name="IamInput" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.iamInput"></a>

```go
func IamInput() interface{}
```

- *Type:* interface{}

---

##### `ScramInput`<sup>Optional</sup> <a name="ScramInput" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.scramInput"></a>

```go
func ScramInput() interface{}
```

- *Type:* interface{}

---

##### `Iam`<sup>Required</sup> <a name="Iam" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.iam"></a>

```go
func Iam() interface{}
```

- *Type:* interface{}

---

##### `Scram`<sup>Required</sup> <a name="Scram" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.scram"></a>

```go
func Scram() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.internalValue"></a>

```go
func InternalValue() MskClusterClientAuthenticationSasl
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a>

---


### MskClusterClientAuthenticationTlsOutputReference <a name="MskClusterClientAuthenticationTlsOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

mskcluster.NewMskClusterClientAuthenticationTlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskClusterClientAuthenticationTlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resetCertificateAuthorityArns">ResetCertificateAuthorityArns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateAuthorityArns` <a name="ResetCertificateAuthorityArns" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resetCertificateAuthorityArns"></a>

```go
func ResetCertificateAuthorityArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.certificateAuthorityArnsInput">CertificateAuthorityArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.certificateAuthorityArns">CertificateAuthorityArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateAuthorityArnsInput`<sup>Optional</sup> <a name="CertificateAuthorityArnsInput" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.certificateAuthorityArnsInput"></a>

```go
func CertificateAuthorityArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CertificateAuthorityArns`<sup>Required</sup> <a name="CertificateAuthorityArns" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.certificateAuthorityArns"></a>

```go
func CertificateAuthorityArns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.internalValue"></a>

```go
func InternalValue() MskClusterClientAuthenticationTls
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a>

---


### MskClusterConfigurationInfoOutputReference <a name="MskClusterConfigurationInfoOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

mskcluster.NewMskClusterConfigurationInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskClusterConfigurationInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.revisionInput">RevisionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.revision">Revision</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.revisionInput"></a>

```go
func RevisionInput() *f64
```

- *Type:* *f64

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.revision"></a>

```go
func Revision() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() MskClusterConfigurationInfo
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a>

---


### MskClusterEncryptionInfoEncryptionInTransitOutputReference <a name="MskClusterEncryptionInfoEncryptionInTransitOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

mskcluster.NewMskClusterEncryptionInfoEncryptionInTransitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskClusterEncryptionInfoEncryptionInTransitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resetClientBroker">ResetClientBroker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resetInCluster">ResetInCluster</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientBroker` <a name="ResetClientBroker" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resetClientBroker"></a>

```go
func ResetClientBroker()
```

##### `ResetInCluster` <a name="ResetInCluster" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resetInCluster"></a>

```go
func ResetInCluster()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.clientBrokerInput">ClientBrokerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.inClusterInput">InClusterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.clientBroker">ClientBroker</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.inCluster">InCluster</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientBrokerInput`<sup>Optional</sup> <a name="ClientBrokerInput" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.clientBrokerInput"></a>

```go
func ClientBrokerInput() *string
```

- *Type:* *string

---

##### `InClusterInput`<sup>Optional</sup> <a name="InClusterInput" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.inClusterInput"></a>

```go
func InClusterInput() interface{}
```

- *Type:* interface{}

---

##### `ClientBroker`<sup>Required</sup> <a name="ClientBroker" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.clientBroker"></a>

```go
func ClientBroker() *string
```

- *Type:* *string

---

##### `InCluster`<sup>Required</sup> <a name="InCluster" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.inCluster"></a>

```go
func InCluster() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.internalValue"></a>

```go
func InternalValue() MskClusterEncryptionInfoEncryptionInTransit
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a>

---


### MskClusterEncryptionInfoOutputReference <a name="MskClusterEncryptionInfoOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

mskcluster.NewMskClusterEncryptionInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskClusterEncryptionInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.putEncryptionInTransit">PutEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.resetEncryptionAtRestKmsKeyArn">ResetEncryptionAtRestKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.resetEncryptionInTransit">ResetEncryptionInTransit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionInTransit` <a name="PutEncryptionInTransit" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.putEncryptionInTransit"></a>

```go
func PutEncryptionInTransit(value MskClusterEncryptionInfoEncryptionInTransit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.putEncryptionInTransit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a>

---

##### `ResetEncryptionAtRestKmsKeyArn` <a name="ResetEncryptionAtRestKmsKeyArn" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.resetEncryptionAtRestKmsKeyArn"></a>

```go
func ResetEncryptionAtRestKmsKeyArn()
```

##### `ResetEncryptionInTransit` <a name="ResetEncryptionInTransit" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.resetEncryptionInTransit"></a>

```go
func ResetEncryptionInTransit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionInTransit">EncryptionInTransit</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference">MskClusterEncryptionInfoEncryptionInTransitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionAtRestKmsKeyArnInput">EncryptionAtRestKmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionInTransitInput">EncryptionInTransitInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionAtRestKmsKeyArn">EncryptionAtRestKmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionInTransit`<sup>Required</sup> <a name="EncryptionInTransit" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionInTransit"></a>

```go
func EncryptionInTransit() MskClusterEncryptionInfoEncryptionInTransitOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference">MskClusterEncryptionInfoEncryptionInTransitOutputReference</a>

---

##### `EncryptionAtRestKmsKeyArnInput`<sup>Optional</sup> <a name="EncryptionAtRestKmsKeyArnInput" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionAtRestKmsKeyArnInput"></a>

```go
func EncryptionAtRestKmsKeyArnInput() *string
```

- *Type:* *string

---

##### `EncryptionInTransitInput`<sup>Optional</sup> <a name="EncryptionInTransitInput" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionInTransitInput"></a>

```go
func EncryptionInTransitInput() MskClusterEncryptionInfoEncryptionInTransit
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a>

---

##### `EncryptionAtRestKmsKeyArn`<sup>Required</sup> <a name="EncryptionAtRestKmsKeyArn" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionAtRestKmsKeyArn"></a>

```go
func EncryptionAtRestKmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() MskClusterEncryptionInfo
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a>

---


### MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference <a name="MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

mskcluster.NewMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resetLogGroup"></a>

```go
func ResetLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.logGroup">LogGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.logGroupInput"></a>

```go
func LogGroupInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.logGroup"></a>

```go
func LogGroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() MskClusterLoggingInfoBrokerLogsCloudwatchLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a>

---


### MskClusterLoggingInfoBrokerLogsFirehoseOutputReference <a name="MskClusterLoggingInfoBrokerLogsFirehoseOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

mskcluster.NewMskClusterLoggingInfoBrokerLogsFirehoseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskClusterLoggingInfoBrokerLogsFirehoseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resetDeliveryStream">ResetDeliveryStream</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeliveryStream` <a name="ResetDeliveryStream" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resetDeliveryStream"></a>

```go
func ResetDeliveryStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.deliveryStreamInput">DeliveryStreamInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.deliveryStream">DeliveryStream</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeliveryStreamInput`<sup>Optional</sup> <a name="DeliveryStreamInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.deliveryStreamInput"></a>

```go
func DeliveryStreamInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DeliveryStream`<sup>Required</sup> <a name="DeliveryStream" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.deliveryStream"></a>

```go
func DeliveryStream() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.internalValue"></a>

```go
func InternalValue() MskClusterLoggingInfoBrokerLogsFirehose
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a>

---


### MskClusterLoggingInfoBrokerLogsOutputReference <a name="MskClusterLoggingInfoBrokerLogsOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

mskcluster.NewMskClusterLoggingInfoBrokerLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskClusterLoggingInfoBrokerLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putCloudwatchLogs">PutCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putFirehose">PutFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetCloudwatchLogs">ResetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetFirehose">ResetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogs` <a name="PutCloudwatchLogs" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putCloudwatchLogs"></a>

```go
func PutCloudwatchLogs(value MskClusterLoggingInfoBrokerLogsCloudwatchLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a>

---

##### `PutFirehose` <a name="PutFirehose" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putFirehose"></a>

```go
func PutFirehose(value MskClusterLoggingInfoBrokerLogsFirehose)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a>

---

##### `PutS3` <a name="PutS3" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putS3"></a>

```go
func PutS3(value MskClusterLoggingInfoBrokerLogsS3)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a>

---

##### `ResetCloudwatchLogs` <a name="ResetCloudwatchLogs" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetCloudwatchLogs"></a>

```go
func ResetCloudwatchLogs()
```

##### `ResetFirehose` <a name="ResetFirehose" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetFirehose"></a>

```go
func ResetFirehose()
```

##### `ResetS3` <a name="ResetS3" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetS3"></a>

```go
func ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference">MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.firehose">Firehose</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference">MskClusterLoggingInfoBrokerLogsFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference">MskClusterLoggingInfoBrokerLogsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.cloudwatchLogsInput">CloudwatchLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.firehoseInput">FirehoseInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.s3Input">S3Input</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.cloudwatchLogs"></a>

```go
func CloudwatchLogs() MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference">MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference</a>

---

##### `Firehose`<sup>Required</sup> <a name="Firehose" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.firehose"></a>

```go
func Firehose() MskClusterLoggingInfoBrokerLogsFirehoseOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference">MskClusterLoggingInfoBrokerLogsFirehoseOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.s3"></a>

```go
func S3() MskClusterLoggingInfoBrokerLogsS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference">MskClusterLoggingInfoBrokerLogsS3OutputReference</a>

---

##### `CloudwatchLogsInput`<sup>Optional</sup> <a name="CloudwatchLogsInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.cloudwatchLogsInput"></a>

```go
func CloudwatchLogsInput() MskClusterLoggingInfoBrokerLogsCloudwatchLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a>

---

##### `FirehoseInput`<sup>Optional</sup> <a name="FirehoseInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.firehoseInput"></a>

```go
func FirehoseInput() MskClusterLoggingInfoBrokerLogsFirehose
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.s3Input"></a>

```go
func S3Input() MskClusterLoggingInfoBrokerLogsS3
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() MskClusterLoggingInfoBrokerLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a>

---


### MskClusterLoggingInfoBrokerLogsS3OutputReference <a name="MskClusterLoggingInfoBrokerLogsS3OutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

mskcluster.NewMskClusterLoggingInfoBrokerLogsS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskClusterLoggingInfoBrokerLogsS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.internalValue"></a>

```go
func InternalValue() MskClusterLoggingInfoBrokerLogsS3
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a>

---


### MskClusterLoggingInfoOutputReference <a name="MskClusterLoggingInfoOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

mskcluster.NewMskClusterLoggingInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskClusterLoggingInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.putBrokerLogs">PutBrokerLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBrokerLogs` <a name="PutBrokerLogs" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.putBrokerLogs"></a>

```go
func PutBrokerLogs(value MskClusterLoggingInfoBrokerLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.putBrokerLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.brokerLogs">BrokerLogs</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference">MskClusterLoggingInfoBrokerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.brokerLogsInput">BrokerLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BrokerLogs`<sup>Required</sup> <a name="BrokerLogs" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.brokerLogs"></a>

```go
func BrokerLogs() MskClusterLoggingInfoBrokerLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference">MskClusterLoggingInfoBrokerLogsOutputReference</a>

---

##### `BrokerLogsInput`<sup>Optional</sup> <a name="BrokerLogsInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.brokerLogsInput"></a>

```go
func BrokerLogsInput() MskClusterLoggingInfoBrokerLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() MskClusterLoggingInfo
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a>

---


### MskClusterOpenMonitoringOutputReference <a name="MskClusterOpenMonitoringOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

mskcluster.NewMskClusterOpenMonitoringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskClusterOpenMonitoringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.putPrometheus">PutPrometheus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrometheus` <a name="PutPrometheus" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.putPrometheus"></a>

```go
func PutPrometheus(value MskClusterOpenMonitoringPrometheus)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.putPrometheus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.prometheus">Prometheus</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference">MskClusterOpenMonitoringPrometheusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.prometheusInput">PrometheusInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Prometheus`<sup>Required</sup> <a name="Prometheus" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.prometheus"></a>

```go
func Prometheus() MskClusterOpenMonitoringPrometheusOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference">MskClusterOpenMonitoringPrometheusOutputReference</a>

---

##### `PrometheusInput`<sup>Optional</sup> <a name="PrometheusInput" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.prometheusInput"></a>

```go
func PrometheusInput() MskClusterOpenMonitoringPrometheus
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.internalValue"></a>

```go
func InternalValue() MskClusterOpenMonitoring
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a>

---


### MskClusterOpenMonitoringPrometheusJmxExporterOutputReference <a name="MskClusterOpenMonitoringPrometheusJmxExporterOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

mskcluster.NewMskClusterOpenMonitoringPrometheusJmxExporterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskClusterOpenMonitoringPrometheusJmxExporterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.enabledInBrokerInput">EnabledInBrokerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.enabledInBroker">EnabledInBroker</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInBrokerInput`<sup>Optional</sup> <a name="EnabledInBrokerInput" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.enabledInBrokerInput"></a>

```go
func EnabledInBrokerInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInBroker`<sup>Required</sup> <a name="EnabledInBroker" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.enabledInBroker"></a>

```go
func EnabledInBroker() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.internalValue"></a>

```go
func InternalValue() MskClusterOpenMonitoringPrometheusJmxExporter
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a>

---


### MskClusterOpenMonitoringPrometheusNodeExporterOutputReference <a name="MskClusterOpenMonitoringPrometheusNodeExporterOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

mskcluster.NewMskClusterOpenMonitoringPrometheusNodeExporterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskClusterOpenMonitoringPrometheusNodeExporterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.enabledInBrokerInput">EnabledInBrokerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.enabledInBroker">EnabledInBroker</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInBrokerInput`<sup>Optional</sup> <a name="EnabledInBrokerInput" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.enabledInBrokerInput"></a>

```go
func EnabledInBrokerInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInBroker`<sup>Required</sup> <a name="EnabledInBroker" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.enabledInBroker"></a>

```go
func EnabledInBroker() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.internalValue"></a>

```go
func InternalValue() MskClusterOpenMonitoringPrometheusNodeExporter
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a>

---


### MskClusterOpenMonitoringPrometheusOutputReference <a name="MskClusterOpenMonitoringPrometheusOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

mskcluster.NewMskClusterOpenMonitoringPrometheusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskClusterOpenMonitoringPrometheusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putJmxExporter">PutJmxExporter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putNodeExporter">PutNodeExporter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resetJmxExporter">ResetJmxExporter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resetNodeExporter">ResetNodeExporter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJmxExporter` <a name="PutJmxExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putJmxExporter"></a>

```go
func PutJmxExporter(value MskClusterOpenMonitoringPrometheusJmxExporter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putJmxExporter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a>

---

##### `PutNodeExporter` <a name="PutNodeExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putNodeExporter"></a>

```go
func PutNodeExporter(value MskClusterOpenMonitoringPrometheusNodeExporter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putNodeExporter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a>

---

##### `ResetJmxExporter` <a name="ResetJmxExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resetJmxExporter"></a>

```go
func ResetJmxExporter()
```

##### `ResetNodeExporter` <a name="ResetNodeExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resetNodeExporter"></a>

```go
func ResetNodeExporter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.jmxExporter">JmxExporter</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference">MskClusterOpenMonitoringPrometheusJmxExporterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.nodeExporter">NodeExporter</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference">MskClusterOpenMonitoringPrometheusNodeExporterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.jmxExporterInput">JmxExporterInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.nodeExporterInput">NodeExporterInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JmxExporter`<sup>Required</sup> <a name="JmxExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.jmxExporter"></a>

```go
func JmxExporter() MskClusterOpenMonitoringPrometheusJmxExporterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference">MskClusterOpenMonitoringPrometheusJmxExporterOutputReference</a>

---

##### `NodeExporter`<sup>Required</sup> <a name="NodeExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.nodeExporter"></a>

```go
func NodeExporter() MskClusterOpenMonitoringPrometheusNodeExporterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference">MskClusterOpenMonitoringPrometheusNodeExporterOutputReference</a>

---

##### `JmxExporterInput`<sup>Optional</sup> <a name="JmxExporterInput" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.jmxExporterInput"></a>

```go
func JmxExporterInput() MskClusterOpenMonitoringPrometheusJmxExporter
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a>

---

##### `NodeExporterInput`<sup>Optional</sup> <a name="NodeExporterInput" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.nodeExporterInput"></a>

```go
func NodeExporterInput() MskClusterOpenMonitoringPrometheusNodeExporter
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.internalValue"></a>

```go
func InternalValue() MskClusterOpenMonitoringPrometheus
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a>

---


### MskClusterTimeoutsOutputReference <a name="MskClusterTimeoutsOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/mskcluster"

mskcluster.NewMskClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



