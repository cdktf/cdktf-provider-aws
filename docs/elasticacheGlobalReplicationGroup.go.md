# `elasticacheGlobalReplicationGroup` Submodule <a name="`elasticacheGlobalReplicationGroup` Submodule" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheGlobalReplicationGroup <a name="ElasticacheGlobalReplicationGroup" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group aws_elasticache_global_replication_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticacheglobalreplicationgroup"

elasticacheglobalreplicationgroup.NewElasticacheGlobalReplicationGroup(scope Construct, id *string, config ElasticacheGlobalReplicationGroupConfig) ElasticacheGlobalReplicationGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig">ElasticacheGlobalReplicationGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig">ElasticacheGlobalReplicationGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetAutomaticFailoverEnabled">ResetAutomaticFailoverEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetCacheNodeType">ResetCacheNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetGlobalReplicationGroupDescription">ResetGlobalReplicationGroupDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetNumNodeGroups">ResetNumNodeGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetParameterGroupName">ResetParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putTimeouts"></a>

```go
func PutTimeouts(value ElasticacheGlobalReplicationGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts">ElasticacheGlobalReplicationGroupTimeouts</a>

---

##### `ResetAutomaticFailoverEnabled` <a name="ResetAutomaticFailoverEnabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetAutomaticFailoverEnabled"></a>

```go
func ResetAutomaticFailoverEnabled()
```

##### `ResetCacheNodeType` <a name="ResetCacheNodeType" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetCacheNodeType"></a>

```go
func ResetCacheNodeType()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetEngineVersion"></a>

```go
func ResetEngineVersion()
```

##### `ResetGlobalReplicationGroupDescription` <a name="ResetGlobalReplicationGroupDescription" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetGlobalReplicationGroupDescription"></a>

```go
func ResetGlobalReplicationGroupDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetNumNodeGroups` <a name="ResetNumNodeGroups" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetNumNodeGroups"></a>

```go
func ResetNumNodeGroups()
```

##### `ResetParameterGroupName` <a name="ResetParameterGroupName" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetParameterGroupName"></a>

```go
func ResetParameterGroupName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticacheglobalreplicationgroup"

elasticacheglobalreplicationgroup.ElasticacheGlobalReplicationGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticacheglobalreplicationgroup"

elasticacheglobalreplicationgroup.ElasticacheGlobalReplicationGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticacheglobalreplicationgroup"

elasticacheglobalreplicationgroup.ElasticacheGlobalReplicationGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.atRestEncryptionEnabled">AtRestEncryptionEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.authTokenEnabled">AuthTokenEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.clusterEnabled">ClusterEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersionActual">EngineVersionActual</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalNodeGroups">GlobalNodeGroups</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList">ElasticacheGlobalReplicationGroupGlobalNodeGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupId">GlobalReplicationGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference">ElasticacheGlobalReplicationGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.transitEncryptionEnabled">TransitEncryptionEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabledInput">AutomaticFailoverEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeTypeInput">CacheNodeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersionInput">EngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescriptionInput">GlobalReplicationGroupDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffixInput">GlobalReplicationGroupIdSuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.numNodeGroupsInput">NumNodeGroupsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.parameterGroupNameInput">ParameterGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.primaryReplicationGroupIdInput">PrimaryReplicationGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabled">AutomaticFailoverEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeType">CacheNodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescription">GlobalReplicationGroupDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffix">GlobalReplicationGroupIdSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.numNodeGroups">NumNodeGroups</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.parameterGroupName">ParameterGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.primaryReplicationGroupId">PrimaryReplicationGroupId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AtRestEncryptionEnabled`<sup>Required</sup> <a name="AtRestEncryptionEnabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.atRestEncryptionEnabled"></a>

```go
func AtRestEncryptionEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AuthTokenEnabled`<sup>Required</sup> <a name="AuthTokenEnabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.authTokenEnabled"></a>

```go
func AuthTokenEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ClusterEnabled`<sup>Required</sup> <a name="ClusterEnabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.clusterEnabled"></a>

```go
func ClusterEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `EngineVersionActual`<sup>Required</sup> <a name="EngineVersionActual" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersionActual"></a>

```go
func EngineVersionActual() *string
```

- *Type:* *string

---

##### `GlobalNodeGroups`<sup>Required</sup> <a name="GlobalNodeGroups" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalNodeGroups"></a>

```go
func GlobalNodeGroups() ElasticacheGlobalReplicationGroupGlobalNodeGroupsList
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList">ElasticacheGlobalReplicationGroupGlobalNodeGroupsList</a>

---

##### `GlobalReplicationGroupId`<sup>Required</sup> <a name="GlobalReplicationGroupId" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupId"></a>

```go
func GlobalReplicationGroupId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.timeouts"></a>

```go
func Timeouts() ElasticacheGlobalReplicationGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference">ElasticacheGlobalReplicationGroupTimeoutsOutputReference</a>

---

##### `TransitEncryptionEnabled`<sup>Required</sup> <a name="TransitEncryptionEnabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.transitEncryptionEnabled"></a>

```go
func TransitEncryptionEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AutomaticFailoverEnabledInput`<sup>Optional</sup> <a name="AutomaticFailoverEnabledInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabledInput"></a>

```go
func AutomaticFailoverEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CacheNodeTypeInput`<sup>Optional</sup> <a name="CacheNodeTypeInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeTypeInput"></a>

```go
func CacheNodeTypeInput() *string
```

- *Type:* *string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersionInput"></a>

```go
func EngineVersionInput() *string
```

- *Type:* *string

---

##### `GlobalReplicationGroupDescriptionInput`<sup>Optional</sup> <a name="GlobalReplicationGroupDescriptionInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescriptionInput"></a>

```go
func GlobalReplicationGroupDescriptionInput() *string
```

- *Type:* *string

---

##### `GlobalReplicationGroupIdSuffixInput`<sup>Optional</sup> <a name="GlobalReplicationGroupIdSuffixInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffixInput"></a>

```go
func GlobalReplicationGroupIdSuffixInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NumNodeGroupsInput`<sup>Optional</sup> <a name="NumNodeGroupsInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.numNodeGroupsInput"></a>

```go
func NumNodeGroupsInput() *f64
```

- *Type:* *f64

---

##### `ParameterGroupNameInput`<sup>Optional</sup> <a name="ParameterGroupNameInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.parameterGroupNameInput"></a>

```go
func ParameterGroupNameInput() *string
```

- *Type:* *string

---

##### `PrimaryReplicationGroupIdInput`<sup>Optional</sup> <a name="PrimaryReplicationGroupIdInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.primaryReplicationGroupIdInput"></a>

```go
func PrimaryReplicationGroupIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AutomaticFailoverEnabled`<sup>Required</sup> <a name="AutomaticFailoverEnabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabled"></a>

```go
func AutomaticFailoverEnabled() interface{}
```

- *Type:* interface{}

---

##### `CacheNodeType`<sup>Required</sup> <a name="CacheNodeType" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeType"></a>

```go
func CacheNodeType() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `GlobalReplicationGroupDescription`<sup>Required</sup> <a name="GlobalReplicationGroupDescription" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescription"></a>

```go
func GlobalReplicationGroupDescription() *string
```

- *Type:* *string

---

##### `GlobalReplicationGroupIdSuffix`<sup>Required</sup> <a name="GlobalReplicationGroupIdSuffix" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffix"></a>

```go
func GlobalReplicationGroupIdSuffix() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NumNodeGroups`<sup>Required</sup> <a name="NumNodeGroups" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.numNodeGroups"></a>

```go
func NumNodeGroups() *f64
```

- *Type:* *f64

---

##### `ParameterGroupName`<sup>Required</sup> <a name="ParameterGroupName" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.parameterGroupName"></a>

```go
func ParameterGroupName() *string
```

- *Type:* *string

---

##### `PrimaryReplicationGroupId`<sup>Required</sup> <a name="PrimaryReplicationGroupId" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.primaryReplicationGroupId"></a>

```go
func PrimaryReplicationGroupId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheGlobalReplicationGroupConfig <a name="ElasticacheGlobalReplicationGroupConfig" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticacheglobalreplicationgroup"

&elasticacheglobalreplicationgroup.ElasticacheGlobalReplicationGroupConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GlobalReplicationGroupIdSuffix: *string,
	PrimaryReplicationGroupId: *string,
	AutomaticFailoverEnabled: interface{},
	CacheNodeType: *string,
	EngineVersion: *string,
	GlobalReplicationGroupDescription: *string,
	Id: *string,
	NumNodeGroups: *f64,
	ParameterGroupName: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupIdSuffix">GlobalReplicationGroupIdSuffix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#global_replication_group_id_suffix ElasticacheGlobalReplicationGroup#global_replication_group_id_suffix}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.primaryReplicationGroupId">PrimaryReplicationGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#primary_replication_group_id ElasticacheGlobalReplicationGroup#primary_replication_group_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.automaticFailoverEnabled">AutomaticFailoverEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#automatic_failover_enabled ElasticacheGlobalReplicationGroup#automatic_failover_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.cacheNodeType">CacheNodeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#cache_node_type ElasticacheGlobalReplicationGroup#cache_node_type}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#engine_version ElasticacheGlobalReplicationGroup#engine_version}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupDescription">GlobalReplicationGroupDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#global_replication_group_description ElasticacheGlobalReplicationGroup#global_replication_group_description}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#id ElasticacheGlobalReplicationGroup#id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.numNodeGroups">NumNodeGroups</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#num_node_groups ElasticacheGlobalReplicationGroup#num_node_groups}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.parameterGroupName">ParameterGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#parameter_group_name ElasticacheGlobalReplicationGroup#parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts">ElasticacheGlobalReplicationGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GlobalReplicationGroupIdSuffix`<sup>Required</sup> <a name="GlobalReplicationGroupIdSuffix" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupIdSuffix"></a>

```go
GlobalReplicationGroupIdSuffix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#global_replication_group_id_suffix ElasticacheGlobalReplicationGroup#global_replication_group_id_suffix}.

---

##### `PrimaryReplicationGroupId`<sup>Required</sup> <a name="PrimaryReplicationGroupId" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.primaryReplicationGroupId"></a>

```go
PrimaryReplicationGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#primary_replication_group_id ElasticacheGlobalReplicationGroup#primary_replication_group_id}.

---

##### `AutomaticFailoverEnabled`<sup>Optional</sup> <a name="AutomaticFailoverEnabled" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.automaticFailoverEnabled"></a>

```go
AutomaticFailoverEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#automatic_failover_enabled ElasticacheGlobalReplicationGroup#automatic_failover_enabled}.

---

##### `CacheNodeType`<sup>Optional</sup> <a name="CacheNodeType" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.cacheNodeType"></a>

```go
CacheNodeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#cache_node_type ElasticacheGlobalReplicationGroup#cache_node_type}.

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.engineVersion"></a>

```go
EngineVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#engine_version ElasticacheGlobalReplicationGroup#engine_version}.

---

##### `GlobalReplicationGroupDescription`<sup>Optional</sup> <a name="GlobalReplicationGroupDescription" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupDescription"></a>

```go
GlobalReplicationGroupDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#global_replication_group_description ElasticacheGlobalReplicationGroup#global_replication_group_description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#id ElasticacheGlobalReplicationGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NumNodeGroups`<sup>Optional</sup> <a name="NumNodeGroups" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.numNodeGroups"></a>

```go
NumNodeGroups *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#num_node_groups ElasticacheGlobalReplicationGroup#num_node_groups}.

---

##### `ParameterGroupName`<sup>Optional</sup> <a name="ParameterGroupName" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.parameterGroupName"></a>

```go
ParameterGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#parameter_group_name ElasticacheGlobalReplicationGroup#parameter_group_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.timeouts"></a>

```go
Timeouts ElasticacheGlobalReplicationGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts">ElasticacheGlobalReplicationGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#timeouts ElasticacheGlobalReplicationGroup#timeouts}

---

### ElasticacheGlobalReplicationGroupGlobalNodeGroups <a name="ElasticacheGlobalReplicationGroupGlobalNodeGroups" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticacheglobalreplicationgroup"

&elasticacheglobalreplicationgroup.ElasticacheGlobalReplicationGroupGlobalNodeGroups {

}
```


### ElasticacheGlobalReplicationGroupTimeouts <a name="ElasticacheGlobalReplicationGroupTimeouts" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticacheglobalreplicationgroup"

&elasticacheglobalreplicationgroup.ElasticacheGlobalReplicationGroupTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#create ElasticacheGlobalReplicationGroup#create}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#delete ElasticacheGlobalReplicationGroup#delete}. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#update ElasticacheGlobalReplicationGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#create ElasticacheGlobalReplicationGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#delete ElasticacheGlobalReplicationGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group#update ElasticacheGlobalReplicationGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheGlobalReplicationGroupGlobalNodeGroupsList <a name="ElasticacheGlobalReplicationGroupGlobalNodeGroupsList" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticacheglobalreplicationgroup"

elasticacheglobalreplicationgroup.NewElasticacheGlobalReplicationGroupGlobalNodeGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ElasticacheGlobalReplicationGroupGlobalNodeGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.get"></a>

```go
func Get(index *f64) ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference <a name="ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticacheglobalreplicationgroup"

elasticacheglobalreplicationgroup.NewElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.globalNodeGroupId">GlobalNodeGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.slots">Slots</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroups">ElasticacheGlobalReplicationGroupGlobalNodeGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GlobalNodeGroupId`<sup>Required</sup> <a name="GlobalNodeGroupId" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.globalNodeGroupId"></a>

```go
func GlobalNodeGroupId() *string
```

- *Type:* *string

---

##### `Slots`<sup>Required</sup> <a name="Slots" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.slots"></a>

```go
func Slots() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() ElasticacheGlobalReplicationGroupGlobalNodeGroups
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupGlobalNodeGroups">ElasticacheGlobalReplicationGroupGlobalNodeGroups</a>

---


### ElasticacheGlobalReplicationGroupTimeoutsOutputReference <a name="ElasticacheGlobalReplicationGroupTimeoutsOutputReference" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticacheglobalreplicationgroup"

elasticacheglobalreplicationgroup.NewElasticacheGlobalReplicationGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElasticacheGlobalReplicationGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



