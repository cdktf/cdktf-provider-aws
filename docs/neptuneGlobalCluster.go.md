# `neptuneGlobalCluster` Submodule <a name="`neptuneGlobalCluster` Submodule" id="@cdktf/provider-aws.neptuneGlobalCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptuneGlobalCluster <a name="NeptuneGlobalCluster" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster aws_neptune_global_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/neptuneglobalcluster"

neptuneglobalcluster.NewNeptuneGlobalCluster(scope Construct, id *string, config NeptuneGlobalClusterConfig) NeptuneGlobalCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig">NeptuneGlobalClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig">NeptuneGlobalClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetSourceDbClusterIdentifier">ResetSourceDbClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetStorageEncrypted">ResetStorageEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.putTimeouts"></a>

```go
func PutTimeouts(value NeptuneGlobalClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts">NeptuneGlobalClusterTimeouts</a>

---

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetEngine` <a name="ResetEngine" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetEngine"></a>

```go
func ResetEngine()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetEngineVersion"></a>

```go
func ResetEngineVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetSourceDbClusterIdentifier` <a name="ResetSourceDbClusterIdentifier" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetSourceDbClusterIdentifier"></a>

```go
func ResetSourceDbClusterIdentifier()
```

##### `ResetStorageEncrypted` <a name="ResetStorageEncrypted" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetStorageEncrypted"></a>

```go
func ResetStorageEncrypted()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/neptuneglobalcluster"

neptuneglobalcluster.NeptuneGlobalCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/neptuneglobalcluster"

neptuneglobalcluster.NeptuneGlobalCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/neptuneglobalcluster"

neptuneglobalcluster.NeptuneGlobalCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.globalClusterMembers">GlobalClusterMembers</a></code> | <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList">NeptuneGlobalClusterGlobalClusterMembersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.globalClusterResourceId">GlobalClusterResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference">NeptuneGlobalClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.engineInput">EngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.engineVersionInput">EngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.globalClusterIdentifierInput">GlobalClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.sourceDbClusterIdentifierInput">SourceDbClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.storageEncryptedInput">StorageEncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.globalClusterIdentifier">GlobalClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.sourceDbClusterIdentifier">SourceDbClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.storageEncrypted">StorageEncrypted</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `GlobalClusterMembers`<sup>Required</sup> <a name="GlobalClusterMembers" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.globalClusterMembers"></a>

```go
func GlobalClusterMembers() NeptuneGlobalClusterGlobalClusterMembersList
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList">NeptuneGlobalClusterGlobalClusterMembersList</a>

---

##### `GlobalClusterResourceId`<sup>Required</sup> <a name="GlobalClusterResourceId" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.globalClusterResourceId"></a>

```go
func GlobalClusterResourceId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.timeouts"></a>

```go
func Timeouts() NeptuneGlobalClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference">NeptuneGlobalClusterTimeoutsOutputReference</a>

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.engineInput"></a>

```go
func EngineInput() *string
```

- *Type:* *string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.engineVersionInput"></a>

```go
func EngineVersionInput() *string
```

- *Type:* *string

---

##### `GlobalClusterIdentifierInput`<sup>Optional</sup> <a name="GlobalClusterIdentifierInput" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.globalClusterIdentifierInput"></a>

```go
func GlobalClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SourceDbClusterIdentifierInput`<sup>Optional</sup> <a name="SourceDbClusterIdentifierInput" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.sourceDbClusterIdentifierInput"></a>

```go
func SourceDbClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `StorageEncryptedInput`<sup>Optional</sup> <a name="StorageEncryptedInput" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.storageEncryptedInput"></a>

```go
func StorageEncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `GlobalClusterIdentifier`<sup>Required</sup> <a name="GlobalClusterIdentifier" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.globalClusterIdentifier"></a>

```go
func GlobalClusterIdentifier() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SourceDbClusterIdentifier`<sup>Required</sup> <a name="SourceDbClusterIdentifier" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.sourceDbClusterIdentifier"></a>

```go
func SourceDbClusterIdentifier() *string
```

- *Type:* *string

---

##### `StorageEncrypted`<sup>Required</sup> <a name="StorageEncrypted" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.storageEncrypted"></a>

```go
func StorageEncrypted() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NeptuneGlobalClusterConfig <a name="NeptuneGlobalClusterConfig" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/neptuneglobalcluster"

&neptuneglobalcluster.NeptuneGlobalClusterConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GlobalClusterIdentifier: *string,
	DeletionProtection: interface{},
	Engine: *string,
	EngineVersion: *string,
	Id: *string,
	SourceDbClusterIdentifier: *string,
	StorageEncrypted: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.globalClusterIdentifier">GlobalClusterIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#global_cluster_identifier NeptuneGlobalCluster#global_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#deletion_protection NeptuneGlobalCluster#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.engine">Engine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#engine NeptuneGlobalCluster#engine}. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#engine_version NeptuneGlobalCluster#engine_version}. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#id NeptuneGlobalCluster#id}. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.sourceDbClusterIdentifier">SourceDbClusterIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#source_db_cluster_identifier NeptuneGlobalCluster#source_db_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.storageEncrypted">StorageEncrypted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#storage_encrypted NeptuneGlobalCluster#storage_encrypted}. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts">NeptuneGlobalClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GlobalClusterIdentifier`<sup>Required</sup> <a name="GlobalClusterIdentifier" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.globalClusterIdentifier"></a>

```go
GlobalClusterIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#global_cluster_identifier NeptuneGlobalCluster#global_cluster_identifier}.

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#deletion_protection NeptuneGlobalCluster#deletion_protection}.

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.engine"></a>

```go
Engine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#engine NeptuneGlobalCluster#engine}.

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.engineVersion"></a>

```go
EngineVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#engine_version NeptuneGlobalCluster#engine_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#id NeptuneGlobalCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SourceDbClusterIdentifier`<sup>Optional</sup> <a name="SourceDbClusterIdentifier" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.sourceDbClusterIdentifier"></a>

```go
SourceDbClusterIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#source_db_cluster_identifier NeptuneGlobalCluster#source_db_cluster_identifier}.

---

##### `StorageEncrypted`<sup>Optional</sup> <a name="StorageEncrypted" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.storageEncrypted"></a>

```go
StorageEncrypted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#storage_encrypted NeptuneGlobalCluster#storage_encrypted}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterConfig.property.timeouts"></a>

```go
Timeouts NeptuneGlobalClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts">NeptuneGlobalClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#timeouts NeptuneGlobalCluster#timeouts}

---

### NeptuneGlobalClusterGlobalClusterMembers <a name="NeptuneGlobalClusterGlobalClusterMembers" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/neptuneglobalcluster"

&neptuneglobalcluster.NeptuneGlobalClusterGlobalClusterMembers {

}
```


### NeptuneGlobalClusterTimeouts <a name="NeptuneGlobalClusterTimeouts" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/neptuneglobalcluster"

&neptuneglobalcluster.NeptuneGlobalClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#create NeptuneGlobalCluster#create}. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#delete NeptuneGlobalCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#update NeptuneGlobalCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#create NeptuneGlobalCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#delete NeptuneGlobalCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_global_cluster#update NeptuneGlobalCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NeptuneGlobalClusterGlobalClusterMembersList <a name="NeptuneGlobalClusterGlobalClusterMembersList" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/neptuneglobalcluster"

neptuneglobalcluster.NewNeptuneGlobalClusterGlobalClusterMembersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NeptuneGlobalClusterGlobalClusterMembersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.get"></a>

```go
func Get(index *f64) NeptuneGlobalClusterGlobalClusterMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### NeptuneGlobalClusterGlobalClusterMembersOutputReference <a name="NeptuneGlobalClusterGlobalClusterMembersOutputReference" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/neptuneglobalcluster"

neptuneglobalcluster.NewNeptuneGlobalClusterGlobalClusterMembersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NeptuneGlobalClusterGlobalClusterMembersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.property.dbClusterArn">DbClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.property.isWriter">IsWriter</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembers">NeptuneGlobalClusterGlobalClusterMembers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbClusterArn`<sup>Required</sup> <a name="DbClusterArn" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.property.dbClusterArn"></a>

```go
func DbClusterArn() *string
```

- *Type:* *string

---

##### `IsWriter`<sup>Required</sup> <a name="IsWriter" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.property.isWriter"></a>

```go
func IsWriter() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembersOutputReference.property.internalValue"></a>

```go
func InternalValue() NeptuneGlobalClusterGlobalClusterMembers
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterGlobalClusterMembers">NeptuneGlobalClusterGlobalClusterMembers</a>

---


### NeptuneGlobalClusterTimeoutsOutputReference <a name="NeptuneGlobalClusterTimeoutsOutputReference" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/neptuneglobalcluster"

neptuneglobalcluster.NewNeptuneGlobalClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NeptuneGlobalClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.neptuneGlobalCluster.NeptuneGlobalClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



