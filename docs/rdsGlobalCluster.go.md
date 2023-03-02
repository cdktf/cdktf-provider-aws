# `rdsGlobalCluster` Submodule <a name="`rdsGlobalCluster` Submodule" id="@cdktf/provider-aws.rdsGlobalCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsGlobalCluster <a name="RdsGlobalCluster" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster aws_rds_global_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdsglobalcluster"

rdsglobalcluster.NewRdsGlobalCluster(scope Construct, id *string, config RdsGlobalClusterConfig) RdsGlobalCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig">RdsGlobalClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig">RdsGlobalClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.resetSourceDbClusterIdentifier">ResetSourceDbClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.resetStorageEncrypted">ResetStorageEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.putTimeouts"></a>

```go
func PutTimeouts(value RdsGlobalClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeouts">RdsGlobalClusterTimeouts</a>

---

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetEngine` <a name="ResetEngine" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.resetEngine"></a>

```go
func ResetEngine()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.resetEngineVersion"></a>

```go
func ResetEngineVersion()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.resetForceDestroy"></a>

```go
func ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetSourceDbClusterIdentifier` <a name="ResetSourceDbClusterIdentifier" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.resetSourceDbClusterIdentifier"></a>

```go
func ResetSourceDbClusterIdentifier()
```

##### `ResetStorageEncrypted` <a name="ResetStorageEncrypted" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.resetStorageEncrypted"></a>

```go
func ResetStorageEncrypted()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdsglobalcluster"

rdsglobalcluster.RdsGlobalCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdsglobalcluster"

rdsglobalcluster.RdsGlobalCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdsglobalcluster"

rdsglobalcluster.RdsGlobalCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.engineVersionActual">EngineVersionActual</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.globalClusterMembers">GlobalClusterMembers</a></code> | <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersList">RdsGlobalClusterGlobalClusterMembersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.globalClusterResourceId">GlobalClusterResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference">RdsGlobalClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.engineInput">EngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.engineVersionInput">EngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.globalClusterIdentifierInput">GlobalClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.sourceDbClusterIdentifierInput">SourceDbClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.storageEncryptedInput">StorageEncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.globalClusterIdentifier">GlobalClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.sourceDbClusterIdentifier">SourceDbClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.storageEncrypted">StorageEncrypted</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `EngineVersionActual`<sup>Required</sup> <a name="EngineVersionActual" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.engineVersionActual"></a>

```go
func EngineVersionActual() *string
```

- *Type:* *string

---

##### `GlobalClusterMembers`<sup>Required</sup> <a name="GlobalClusterMembers" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.globalClusterMembers"></a>

```go
func GlobalClusterMembers() RdsGlobalClusterGlobalClusterMembersList
```

- *Type:* <a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersList">RdsGlobalClusterGlobalClusterMembersList</a>

---

##### `GlobalClusterResourceId`<sup>Required</sup> <a name="GlobalClusterResourceId" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.globalClusterResourceId"></a>

```go
func GlobalClusterResourceId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.timeouts"></a>

```go
func Timeouts() RdsGlobalClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference">RdsGlobalClusterTimeoutsOutputReference</a>

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.engineInput"></a>

```go
func EngineInput() *string
```

- *Type:* *string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.engineVersionInput"></a>

```go
func EngineVersionInput() *string
```

- *Type:* *string

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.forceDestroyInput"></a>

```go
func ForceDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `GlobalClusterIdentifierInput`<sup>Optional</sup> <a name="GlobalClusterIdentifierInput" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.globalClusterIdentifierInput"></a>

```go
func GlobalClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SourceDbClusterIdentifierInput`<sup>Optional</sup> <a name="SourceDbClusterIdentifierInput" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.sourceDbClusterIdentifierInput"></a>

```go
func SourceDbClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `StorageEncryptedInput`<sup>Optional</sup> <a name="StorageEncryptedInput" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.storageEncryptedInput"></a>

```go
func StorageEncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.forceDestroy"></a>

```go
func ForceDestroy() interface{}
```

- *Type:* interface{}

---

##### `GlobalClusterIdentifier`<sup>Required</sup> <a name="GlobalClusterIdentifier" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.globalClusterIdentifier"></a>

```go
func GlobalClusterIdentifier() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SourceDbClusterIdentifier`<sup>Required</sup> <a name="SourceDbClusterIdentifier" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.sourceDbClusterIdentifier"></a>

```go
func SourceDbClusterIdentifier() *string
```

- *Type:* *string

---

##### `StorageEncrypted`<sup>Required</sup> <a name="StorageEncrypted" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.storageEncrypted"></a>

```go
func StorageEncrypted() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsGlobalClusterConfig <a name="RdsGlobalClusterConfig" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdsglobalcluster"

&rdsglobalcluster.RdsGlobalClusterConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GlobalClusterIdentifier: *string,
	DatabaseName: *string,
	DeletionProtection: interface{},
	Engine: *string,
	EngineVersion: *string,
	ForceDestroy: interface{},
	Id: *string,
	SourceDbClusterIdentifier: *string,
	StorageEncrypted: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.rdsGlobalCluster.RdsGlobalClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.globalClusterIdentifier">GlobalClusterIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster#global_cluster_identifier RdsGlobalCluster#global_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster#database_name RdsGlobalCluster#database_name}. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster#deletion_protection RdsGlobalCluster#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.engine">Engine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster#engine RdsGlobalCluster#engine}. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster#engine_version RdsGlobalCluster#engine_version}. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster#force_destroy RdsGlobalCluster#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster#id RdsGlobalCluster#id}. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.sourceDbClusterIdentifier">SourceDbClusterIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster#source_db_cluster_identifier RdsGlobalCluster#source_db_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.storageEncrypted">StorageEncrypted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster#storage_encrypted RdsGlobalCluster#storage_encrypted}. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeouts">RdsGlobalClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GlobalClusterIdentifier`<sup>Required</sup> <a name="GlobalClusterIdentifier" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.globalClusterIdentifier"></a>

```go
GlobalClusterIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster#global_cluster_identifier RdsGlobalCluster#global_cluster_identifier}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster#database_name RdsGlobalCluster#database_name}.

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster#deletion_protection RdsGlobalCluster#deletion_protection}.

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.engine"></a>

```go
Engine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster#engine RdsGlobalCluster#engine}.

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.engineVersion"></a>

```go
EngineVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster#engine_version RdsGlobalCluster#engine_version}.

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.forceDestroy"></a>

```go
ForceDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster#force_destroy RdsGlobalCluster#force_destroy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster#id RdsGlobalCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SourceDbClusterIdentifier`<sup>Optional</sup> <a name="SourceDbClusterIdentifier" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.sourceDbClusterIdentifier"></a>

```go
SourceDbClusterIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster#source_db_cluster_identifier RdsGlobalCluster#source_db_cluster_identifier}.

---

##### `StorageEncrypted`<sup>Optional</sup> <a name="StorageEncrypted" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.storageEncrypted"></a>

```go
StorageEncrypted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster#storage_encrypted RdsGlobalCluster#storage_encrypted}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterConfig.property.timeouts"></a>

```go
Timeouts RdsGlobalClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeouts">RdsGlobalClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster#timeouts RdsGlobalCluster#timeouts}

---

### RdsGlobalClusterGlobalClusterMembers <a name="RdsGlobalClusterGlobalClusterMembers" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdsglobalcluster"

&rdsglobalcluster.RdsGlobalClusterGlobalClusterMembers {

}
```


### RdsGlobalClusterTimeouts <a name="RdsGlobalClusterTimeouts" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdsglobalcluster"

&rdsglobalcluster.RdsGlobalClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster#create RdsGlobalCluster#create}. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster#delete RdsGlobalCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster#update RdsGlobalCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster#create RdsGlobalCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster#delete RdsGlobalCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster#update RdsGlobalCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsGlobalClusterGlobalClusterMembersList <a name="RdsGlobalClusterGlobalClusterMembersList" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdsglobalcluster"

rdsglobalcluster.NewRdsGlobalClusterGlobalClusterMembersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RdsGlobalClusterGlobalClusterMembersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersList.get"></a>

```go
func Get(index *f64) RdsGlobalClusterGlobalClusterMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### RdsGlobalClusterGlobalClusterMembersOutputReference <a name="RdsGlobalClusterGlobalClusterMembersOutputReference" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdsglobalcluster"

rdsglobalcluster.NewRdsGlobalClusterGlobalClusterMembersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RdsGlobalClusterGlobalClusterMembersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.property.dbClusterArn">DbClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.property.isWriter">IsWriter</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembers">RdsGlobalClusterGlobalClusterMembers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbClusterArn`<sup>Required</sup> <a name="DbClusterArn" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.property.dbClusterArn"></a>

```go
func DbClusterArn() *string
```

- *Type:* *string

---

##### `IsWriter`<sup>Required</sup> <a name="IsWriter" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.property.isWriter"></a>

```go
func IsWriter() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembersOutputReference.property.internalValue"></a>

```go
func InternalValue() RdsGlobalClusterGlobalClusterMembers
```

- *Type:* <a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterGlobalClusterMembers">RdsGlobalClusterGlobalClusterMembers</a>

---


### RdsGlobalClusterTimeoutsOutputReference <a name="RdsGlobalClusterTimeoutsOutputReference" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdsglobalcluster"

rdsglobalcluster.NewRdsGlobalClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RdsGlobalClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rdsGlobalCluster.RdsGlobalClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



