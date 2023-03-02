# `dmsReplicationInstance` Submodule <a name="`dmsReplicationInstance` Submodule" id="@cdktf/provider-aws.dmsReplicationInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsReplicationInstance <a name="DmsReplicationInstance" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance aws_dms_replication_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dmsreplicationinstance"

dmsreplicationinstance.NewDmsReplicationInstance(scope Construct, id *string, config DmsReplicationInstanceConfig) DmsReplicationInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig">DmsReplicationInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig">DmsReplicationInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetAllocatedStorage">ResetAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetAllowMajorVersionUpgrade">ResetAllowMajorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetApplyImmediately">ResetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetAutoMinorVersionUpgrade">ResetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetMultiAz">ResetMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetPubliclyAccessible">ResetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetReplicationSubnetGroupId">ResetReplicationSubnetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.putTimeouts"></a>

```go
func PutTimeouts(value DmsReplicationInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts">DmsReplicationInstanceTimeouts</a>

---

##### `ResetAllocatedStorage` <a name="ResetAllocatedStorage" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetAllocatedStorage"></a>

```go
func ResetAllocatedStorage()
```

##### `ResetAllowMajorVersionUpgrade` <a name="ResetAllowMajorVersionUpgrade" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetAllowMajorVersionUpgrade"></a>

```go
func ResetAllowMajorVersionUpgrade()
```

##### `ResetApplyImmediately` <a name="ResetApplyImmediately" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetApplyImmediately"></a>

```go
func ResetApplyImmediately()
```

##### `ResetAutoMinorVersionUpgrade` <a name="ResetAutoMinorVersionUpgrade" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetAutoMinorVersionUpgrade"></a>

```go
func ResetAutoMinorVersionUpgrade()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetEngineVersion"></a>

```go
func ResetEngineVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetMultiAz` <a name="ResetMultiAz" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetMultiAz"></a>

```go
func ResetMultiAz()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetPreferredMaintenanceWindow"></a>

```go
func ResetPreferredMaintenanceWindow()
```

##### `ResetPubliclyAccessible` <a name="ResetPubliclyAccessible" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetPubliclyAccessible"></a>

```go
func ResetPubliclyAccessible()
```

##### `ResetReplicationSubnetGroupId` <a name="ResetReplicationSubnetGroupId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetReplicationSubnetGroupId"></a>

```go
func ResetReplicationSubnetGroupId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.resetVpcSecurityGroupIds"></a>

```go
func ResetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dmsreplicationinstance"

dmsreplicationinstance.DmsReplicationInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dmsreplicationinstance"

dmsreplicationinstance.DmsReplicationInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dmsreplicationinstance"

dmsreplicationinstance.DmsReplicationInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceArn">ReplicationInstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstancePrivateIps">ReplicationInstancePrivateIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstancePublicIps">ReplicationInstancePublicIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference">DmsReplicationInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.allocatedStorageInput">AllocatedStorageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.allowMajorVersionUpgradeInput">AllowMajorVersionUpgradeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.applyImmediatelyInput">ApplyImmediatelyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.autoMinorVersionUpgradeInput">AutoMinorVersionUpgradeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.engineVersionInput">EngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.multiAzInput">MultiAzInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.publiclyAccessibleInput">PubliclyAccessibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceClassInput">ReplicationInstanceClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceIdInput">ReplicationInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationSubnetGroupIdInput">ReplicationSubnetGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.allocatedStorage">AllocatedStorage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.allowMajorVersionUpgrade">AllowMajorVersionUpgrade</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.applyImmediately">ApplyImmediately</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.multiAz">MultiAz</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceClass">ReplicationInstanceClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceId">ReplicationInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationSubnetGroupId">ReplicationSubnetGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ReplicationInstanceArn`<sup>Required</sup> <a name="ReplicationInstanceArn" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceArn"></a>

```go
func ReplicationInstanceArn() *string
```

- *Type:* *string

---

##### `ReplicationInstancePrivateIps`<sup>Required</sup> <a name="ReplicationInstancePrivateIps" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstancePrivateIps"></a>

```go
func ReplicationInstancePrivateIps() *[]*string
```

- *Type:* *[]*string

---

##### `ReplicationInstancePublicIps`<sup>Required</sup> <a name="ReplicationInstancePublicIps" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstancePublicIps"></a>

```go
func ReplicationInstancePublicIps() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.timeouts"></a>

```go
func Timeouts() DmsReplicationInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference">DmsReplicationInstanceTimeoutsOutputReference</a>

---

##### `AllocatedStorageInput`<sup>Optional</sup> <a name="AllocatedStorageInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.allocatedStorageInput"></a>

```go
func AllocatedStorageInput() *f64
```

- *Type:* *f64

---

##### `AllowMajorVersionUpgradeInput`<sup>Optional</sup> <a name="AllowMajorVersionUpgradeInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.allowMajorVersionUpgradeInput"></a>

```go
func AllowMajorVersionUpgradeInput() interface{}
```

- *Type:* interface{}

---

##### `ApplyImmediatelyInput`<sup>Optional</sup> <a name="ApplyImmediatelyInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.applyImmediatelyInput"></a>

```go
func ApplyImmediatelyInput() interface{}
```

- *Type:* interface{}

---

##### `AutoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="AutoMinorVersionUpgradeInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.autoMinorVersionUpgradeInput"></a>

```go
func AutoMinorVersionUpgradeInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.engineVersionInput"></a>

```go
func EngineVersionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `MultiAzInput`<sup>Optional</sup> <a name="MultiAzInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.multiAzInput"></a>

```go
func MultiAzInput() interface{}
```

- *Type:* interface{}

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.preferredMaintenanceWindowInput"></a>

```go
func PreferredMaintenanceWindowInput() *string
```

- *Type:* *string

---

##### `PubliclyAccessibleInput`<sup>Optional</sup> <a name="PubliclyAccessibleInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.publiclyAccessibleInput"></a>

```go
func PubliclyAccessibleInput() interface{}
```

- *Type:* interface{}

---

##### `ReplicationInstanceClassInput`<sup>Optional</sup> <a name="ReplicationInstanceClassInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceClassInput"></a>

```go
func ReplicationInstanceClassInput() *string
```

- *Type:* *string

---

##### `ReplicationInstanceIdInput`<sup>Optional</sup> <a name="ReplicationInstanceIdInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceIdInput"></a>

```go
func ReplicationInstanceIdInput() *string
```

- *Type:* *string

---

##### `ReplicationSubnetGroupIdInput`<sup>Optional</sup> <a name="ReplicationSubnetGroupIdInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationSubnetGroupIdInput"></a>

```go
func ReplicationSubnetGroupIdInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.vpcSecurityGroupIdsInput"></a>

```go
func VpcSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllocatedStorage`<sup>Required</sup> <a name="AllocatedStorage" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.allocatedStorage"></a>

```go
func AllocatedStorage() *f64
```

- *Type:* *f64

---

##### `AllowMajorVersionUpgrade`<sup>Required</sup> <a name="AllowMajorVersionUpgrade" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.allowMajorVersionUpgrade"></a>

```go
func AllowMajorVersionUpgrade() interface{}
```

- *Type:* interface{}

---

##### `ApplyImmediately`<sup>Required</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.applyImmediately"></a>

```go
func ApplyImmediately() interface{}
```

- *Type:* interface{}

---

##### `AutoMinorVersionUpgrade`<sup>Required</sup> <a name="AutoMinorVersionUpgrade" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.autoMinorVersionUpgrade"></a>

```go
func AutoMinorVersionUpgrade() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `MultiAz`<sup>Required</sup> <a name="MultiAz" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.multiAz"></a>

```go
func MultiAz() interface{}
```

- *Type:* interface{}

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.preferredMaintenanceWindow"></a>

```go
func PreferredMaintenanceWindow() *string
```

- *Type:* *string

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.publiclyAccessible"></a>

```go
func PubliclyAccessible() interface{}
```

- *Type:* interface{}

---

##### `ReplicationInstanceClass`<sup>Required</sup> <a name="ReplicationInstanceClass" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceClass"></a>

```go
func ReplicationInstanceClass() *string
```

- *Type:* *string

---

##### `ReplicationInstanceId`<sup>Required</sup> <a name="ReplicationInstanceId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceId"></a>

```go
func ReplicationInstanceId() *string
```

- *Type:* *string

---

##### `ReplicationSubnetGroupId`<sup>Required</sup> <a name="ReplicationSubnetGroupId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.replicationSubnetGroupId"></a>

```go
func ReplicationSubnetGroupId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.vpcSecurityGroupIds"></a>

```go
func VpcSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsReplicationInstanceConfig <a name="DmsReplicationInstanceConfig" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dmsreplicationinstance"

&dmsreplicationinstance.DmsReplicationInstanceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ReplicationInstanceClass: *string,
	ReplicationInstanceId: *string,
	AllocatedStorage: *f64,
	AllowMajorVersionUpgrade: interface{},
	ApplyImmediately: interface{},
	AutoMinorVersionUpgrade: interface{},
	AvailabilityZone: *string,
	EngineVersion: *string,
	Id: *string,
	KmsKeyArn: *string,
	MultiAz: interface{},
	PreferredMaintenanceWindow: *string,
	PubliclyAccessible: interface{},
	ReplicationSubnetGroupId: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts,
	VpcSecurityGroupIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationInstanceClass">ReplicationInstanceClass</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#replication_instance_class DmsReplicationInstance#replication_instance_class}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationInstanceId">ReplicationInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#replication_instance_id DmsReplicationInstance#replication_instance_id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.allocatedStorage">AllocatedStorage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#allocated_storage DmsReplicationInstance#allocated_storage}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.allowMajorVersionUpgrade">AllowMajorVersionUpgrade</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#allow_major_version_upgrade DmsReplicationInstance#allow_major_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.applyImmediately">ApplyImmediately</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#apply_immediately DmsReplicationInstance#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#auto_minor_version_upgrade DmsReplicationInstance#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#availability_zone DmsReplicationInstance#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#engine_version DmsReplicationInstance#engine_version}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#id DmsReplicationInstance#id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#kms_key_arn DmsReplicationInstance#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.multiAz">MultiAz</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#multi_az DmsReplicationInstance#multi_az}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#preferred_maintenance_window DmsReplicationInstance#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#publicly_accessible DmsReplicationInstance#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationSubnetGroupId">ReplicationSubnetGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#replication_subnet_group_id DmsReplicationInstance#replication_subnet_group_id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#tags DmsReplicationInstance#tags}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#tags_all DmsReplicationInstance#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts">DmsReplicationInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#vpc_security_group_ids DmsReplicationInstance#vpc_security_group_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ReplicationInstanceClass`<sup>Required</sup> <a name="ReplicationInstanceClass" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationInstanceClass"></a>

```go
ReplicationInstanceClass *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#replication_instance_class DmsReplicationInstance#replication_instance_class}.

---

##### `ReplicationInstanceId`<sup>Required</sup> <a name="ReplicationInstanceId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationInstanceId"></a>

```go
ReplicationInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#replication_instance_id DmsReplicationInstance#replication_instance_id}.

---

##### `AllocatedStorage`<sup>Optional</sup> <a name="AllocatedStorage" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.allocatedStorage"></a>

```go
AllocatedStorage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#allocated_storage DmsReplicationInstance#allocated_storage}.

---

##### `AllowMajorVersionUpgrade`<sup>Optional</sup> <a name="AllowMajorVersionUpgrade" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.allowMajorVersionUpgrade"></a>

```go
AllowMajorVersionUpgrade interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#allow_major_version_upgrade DmsReplicationInstance#allow_major_version_upgrade}.

---

##### `ApplyImmediately`<sup>Optional</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.applyImmediately"></a>

```go
ApplyImmediately interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#apply_immediately DmsReplicationInstance#apply_immediately}.

---

##### `AutoMinorVersionUpgrade`<sup>Optional</sup> <a name="AutoMinorVersionUpgrade" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.autoMinorVersionUpgrade"></a>

```go
AutoMinorVersionUpgrade interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#auto_minor_version_upgrade DmsReplicationInstance#auto_minor_version_upgrade}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#availability_zone DmsReplicationInstance#availability_zone}.

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.engineVersion"></a>

```go
EngineVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#engine_version DmsReplicationInstance#engine_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#id DmsReplicationInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#kms_key_arn DmsReplicationInstance#kms_key_arn}.

---

##### `MultiAz`<sup>Optional</sup> <a name="MultiAz" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.multiAz"></a>

```go
MultiAz interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#multi_az DmsReplicationInstance#multi_az}.

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.preferredMaintenanceWindow"></a>

```go
PreferredMaintenanceWindow *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#preferred_maintenance_window DmsReplicationInstance#preferred_maintenance_window}.

---

##### `PubliclyAccessible`<sup>Optional</sup> <a name="PubliclyAccessible" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.publiclyAccessible"></a>

```go
PubliclyAccessible interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#publicly_accessible DmsReplicationInstance#publicly_accessible}.

---

##### `ReplicationSubnetGroupId`<sup>Optional</sup> <a name="ReplicationSubnetGroupId" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationSubnetGroupId"></a>

```go
ReplicationSubnetGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#replication_subnet_group_id DmsReplicationInstance#replication_subnet_group_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#tags DmsReplicationInstance#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#tags_all DmsReplicationInstance#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.timeouts"></a>

```go
Timeouts DmsReplicationInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts">DmsReplicationInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#timeouts DmsReplicationInstance#timeouts}

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceConfig.property.vpcSecurityGroupIds"></a>

```go
VpcSecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#vpc_security_group_ids DmsReplicationInstance#vpc_security_group_ids}.

---

### DmsReplicationInstanceTimeouts <a name="DmsReplicationInstanceTimeouts" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dmsreplicationinstance"

&dmsreplicationinstance.DmsReplicationInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#create DmsReplicationInstance#create}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#delete DmsReplicationInstance#delete}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#update DmsReplicationInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#create DmsReplicationInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#delete DmsReplicationInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance#update DmsReplicationInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsReplicationInstanceTimeoutsOutputReference <a name="DmsReplicationInstanceTimeoutsOutputReference" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dmsreplicationinstance"

dmsreplicationinstance.NewDmsReplicationInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsReplicationInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dmsReplicationInstance.DmsReplicationInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



