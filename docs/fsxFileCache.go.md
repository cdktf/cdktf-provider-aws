# `fsxFileCache` Submodule <a name="`fsxFileCache` Submodule" id="@cdktf/provider-aws.fsxFileCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxFileCache <a name="FsxFileCache" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache aws_fsx_file_cache}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxfilecache"

fsxfilecache.NewFsxFileCache(scope Construct, id *string, config FsxFileCacheConfig) FsxFileCache
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig">FsxFileCacheConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig">FsxFileCacheConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.putDataRepositoryAssociation">PutDataRepositoryAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.putLustreConfiguration">PutLustreConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetCopyTagsToDataRepositoryAssociations">ResetCopyTagsToDataRepositoryAssociations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetDataRepositoryAssociation">ResetDataRepositoryAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetLustreConfiguration">ResetLustreConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDataRepositoryAssociation` <a name="PutDataRepositoryAssociation" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.putDataRepositoryAssociation"></a>

```go
func PutDataRepositoryAssociation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.putDataRepositoryAssociation.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLustreConfiguration` <a name="PutLustreConfiguration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.putLustreConfiguration"></a>

```go
func PutLustreConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.putLustreConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.putTimeouts"></a>

```go
func PutTimeouts(value FsxFileCacheTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts">FsxFileCacheTimeouts</a>

---

##### `ResetCopyTagsToDataRepositoryAssociations` <a name="ResetCopyTagsToDataRepositoryAssociations" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetCopyTagsToDataRepositoryAssociations"></a>

```go
func ResetCopyTagsToDataRepositoryAssociations()
```

##### `ResetDataRepositoryAssociation` <a name="ResetDataRepositoryAssociation" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetDataRepositoryAssociation"></a>

```go
func ResetDataRepositoryAssociation()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetLustreConfiguration` <a name="ResetLustreConfiguration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetLustreConfiguration"></a>

```go
func ResetLustreConfiguration()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxfilecache"

fsxfilecache.FsxFileCache_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxfilecache"

fsxfilecache.FsxFileCache_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxfilecache"

fsxfilecache.FsxFileCache_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dataRepositoryAssociation">DataRepositoryAssociation</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList">FsxFileCacheDataRepositoryAssociationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dataRepositoryAssociationIds">DataRepositoryAssociationIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheId">FileCacheId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.lustreConfiguration">LustreConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList">FsxFileCacheLustreConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.networkInterfaceIds">NetworkInterfaceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference">FsxFileCacheTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.copyTagsToDataRepositoryAssociationsInput">CopyTagsToDataRepositoryAssociationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dataRepositoryAssociationInput">DataRepositoryAssociationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheTypeInput">FileCacheTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheTypeVersionInput">FileCacheTypeVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.lustreConfigurationInput">LustreConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.storageCapacityInput">StorageCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.copyTagsToDataRepositoryAssociations">CopyTagsToDataRepositoryAssociations</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheType">FileCacheType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheTypeVersion">FileCacheTypeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.storageCapacity">StorageCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DataRepositoryAssociation`<sup>Required</sup> <a name="DataRepositoryAssociation" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dataRepositoryAssociation"></a>

```go
func DataRepositoryAssociation() FsxFileCacheDataRepositoryAssociationList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList">FsxFileCacheDataRepositoryAssociationList</a>

---

##### `DataRepositoryAssociationIds`<sup>Required</sup> <a name="DataRepositoryAssociationIds" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dataRepositoryAssociationIds"></a>

```go
func DataRepositoryAssociationIds() *[]*string
```

- *Type:* *[]*string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `FileCacheId`<sup>Required</sup> <a name="FileCacheId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheId"></a>

```go
func FileCacheId() *string
```

- *Type:* *string

---

##### `LustreConfiguration`<sup>Required</sup> <a name="LustreConfiguration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.lustreConfiguration"></a>

```go
func LustreConfiguration() FsxFileCacheLustreConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList">FsxFileCacheLustreConfigurationList</a>

---

##### `NetworkInterfaceIds`<sup>Required</sup> <a name="NetworkInterfaceIds" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.networkInterfaceIds"></a>

```go
func NetworkInterfaceIds() *[]*string
```

- *Type:* *[]*string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.timeouts"></a>

```go
func Timeouts() FsxFileCacheTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference">FsxFileCacheTimeoutsOutputReference</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `CopyTagsToDataRepositoryAssociationsInput`<sup>Optional</sup> <a name="CopyTagsToDataRepositoryAssociationsInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.copyTagsToDataRepositoryAssociationsInput"></a>

```go
func CopyTagsToDataRepositoryAssociationsInput() interface{}
```

- *Type:* interface{}

---

##### `DataRepositoryAssociationInput`<sup>Optional</sup> <a name="DataRepositoryAssociationInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dataRepositoryAssociationInput"></a>

```go
func DataRepositoryAssociationInput() interface{}
```

- *Type:* interface{}

---

##### `FileCacheTypeInput`<sup>Optional</sup> <a name="FileCacheTypeInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheTypeInput"></a>

```go
func FileCacheTypeInput() *string
```

- *Type:* *string

---

##### `FileCacheTypeVersionInput`<sup>Optional</sup> <a name="FileCacheTypeVersionInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheTypeVersionInput"></a>

```go
func FileCacheTypeVersionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `LustreConfigurationInput`<sup>Optional</sup> <a name="LustreConfigurationInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.lustreConfigurationInput"></a>

```go
func LustreConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StorageCapacityInput`<sup>Optional</sup> <a name="StorageCapacityInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.storageCapacityInput"></a>

```go
func StorageCapacityInput() *f64
```

- *Type:* *f64

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CopyTagsToDataRepositoryAssociations`<sup>Required</sup> <a name="CopyTagsToDataRepositoryAssociations" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.copyTagsToDataRepositoryAssociations"></a>

```go
func CopyTagsToDataRepositoryAssociations() interface{}
```

- *Type:* interface{}

---

##### `FileCacheType`<sup>Required</sup> <a name="FileCacheType" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheType"></a>

```go
func FileCacheType() *string
```

- *Type:* *string

---

##### `FileCacheTypeVersion`<sup>Required</sup> <a name="FileCacheTypeVersion" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheTypeVersion"></a>

```go
func FileCacheTypeVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `StorageCapacity`<sup>Required</sup> <a name="StorageCapacity" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.storageCapacity"></a>

```go
func StorageCapacity() *f64
```

- *Type:* *f64

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxFileCacheConfig <a name="FsxFileCacheConfig" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxfilecache"

&fsxfilecache.FsxFileCacheConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FileCacheType: *string,
	FileCacheTypeVersion: *string,
	StorageCapacity: *f64,
	SubnetIds: *[]*string,
	CopyTagsToDataRepositoryAssociations: interface{},
	DataRepositoryAssociation: interface{},
	Id: *string,
	KmsKeyId: *string,
	LustreConfiguration: interface{},
	SecurityGroupIds: *[]*string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.fsxFileCache.FsxFileCacheTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.fileCacheType">FileCacheType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#file_cache_type FsxFileCache#file_cache_type}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.fileCacheTypeVersion">FileCacheTypeVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#file_cache_type_version FsxFileCache#file_cache_type_version}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.storageCapacity">StorageCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#storage_capacity FsxFileCache#storage_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#subnet_ids FsxFileCache#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.copyTagsToDataRepositoryAssociations">CopyTagsToDataRepositoryAssociations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#copy_tags_to_data_repository_associations FsxFileCache#copy_tags_to_data_repository_associations}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.dataRepositoryAssociation">DataRepositoryAssociation</a></code> | <code>interface{}</code> | data_repository_association block. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#id FsxFileCache#id}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#kms_key_id FsxFileCache#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.lustreConfiguration">LustreConfiguration</a></code> | <code>interface{}</code> | lustre_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#security_group_ids FsxFileCache#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#tags FsxFileCache#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#tags_all FsxFileCache#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts">FsxFileCacheTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FileCacheType`<sup>Required</sup> <a name="FileCacheType" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.fileCacheType"></a>

```go
FileCacheType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#file_cache_type FsxFileCache#file_cache_type}.

---

##### `FileCacheTypeVersion`<sup>Required</sup> <a name="FileCacheTypeVersion" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.fileCacheTypeVersion"></a>

```go
FileCacheTypeVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#file_cache_type_version FsxFileCache#file_cache_type_version}.

---

##### `StorageCapacity`<sup>Required</sup> <a name="StorageCapacity" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.storageCapacity"></a>

```go
StorageCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#storage_capacity FsxFileCache#storage_capacity}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#subnet_ids FsxFileCache#subnet_ids}.

---

##### `CopyTagsToDataRepositoryAssociations`<sup>Optional</sup> <a name="CopyTagsToDataRepositoryAssociations" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.copyTagsToDataRepositoryAssociations"></a>

```go
CopyTagsToDataRepositoryAssociations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#copy_tags_to_data_repository_associations FsxFileCache#copy_tags_to_data_repository_associations}.

---

##### `DataRepositoryAssociation`<sup>Optional</sup> <a name="DataRepositoryAssociation" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.dataRepositoryAssociation"></a>

```go
DataRepositoryAssociation interface{}
```

- *Type:* interface{}

data_repository_association block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#data_repository_association FsxFileCache#data_repository_association}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#id FsxFileCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#kms_key_id FsxFileCache#kms_key_id}.

---

##### `LustreConfiguration`<sup>Optional</sup> <a name="LustreConfiguration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.lustreConfiguration"></a>

```go
LustreConfiguration interface{}
```

- *Type:* interface{}

lustre_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#lustre_configuration FsxFileCache#lustre_configuration}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#security_group_ids FsxFileCache#security_group_ids}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#tags FsxFileCache#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#tags_all FsxFileCache#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.timeouts"></a>

```go
Timeouts FsxFileCacheTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts">FsxFileCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#timeouts FsxFileCache#timeouts}

---

### FsxFileCacheDataRepositoryAssociation <a name="FsxFileCacheDataRepositoryAssociation" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxfilecache"

&fsxfilecache.FsxFileCacheDataRepositoryAssociation {
	DataRepositoryPath: *string,
	FileCachePath: *string,
	DataRepositorySubdirectories: *[]*string,
	Nfs: interface{},
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.dataRepositoryPath">DataRepositoryPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#data_repository_path FsxFileCache#data_repository_path}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.fileCachePath">FileCachePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#file_cache_path FsxFileCache#file_cache_path}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.dataRepositorySubdirectories">DataRepositorySubdirectories</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#data_repository_subdirectories FsxFileCache#data_repository_subdirectories}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.nfs">Nfs</a></code> | <code>interface{}</code> | nfs block. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#tags FsxFileCache#tags}. |

---

##### `DataRepositoryPath`<sup>Required</sup> <a name="DataRepositoryPath" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.dataRepositoryPath"></a>

```go
DataRepositoryPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#data_repository_path FsxFileCache#data_repository_path}.

---

##### `FileCachePath`<sup>Required</sup> <a name="FileCachePath" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.fileCachePath"></a>

```go
FileCachePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#file_cache_path FsxFileCache#file_cache_path}.

---

##### `DataRepositorySubdirectories`<sup>Optional</sup> <a name="DataRepositorySubdirectories" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.dataRepositorySubdirectories"></a>

```go
DataRepositorySubdirectories *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#data_repository_subdirectories FsxFileCache#data_repository_subdirectories}.

---

##### `Nfs`<sup>Optional</sup> <a name="Nfs" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.nfs"></a>

```go
Nfs interface{}
```

- *Type:* interface{}

nfs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#nfs FsxFileCache#nfs}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#tags FsxFileCache#tags}.

---

### FsxFileCacheDataRepositoryAssociationNfs <a name="FsxFileCacheDataRepositoryAssociationNfs" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxfilecache"

&fsxfilecache.FsxFileCacheDataRepositoryAssociationNfs {
	Version: *string,
	DnsIps: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#version FsxFileCache#version}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs.property.dnsIps">DnsIps</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#dns_ips FsxFileCache#dns_ips}. |

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#version FsxFileCache#version}.

---

##### `DnsIps`<sup>Optional</sup> <a name="DnsIps" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs.property.dnsIps"></a>

```go
DnsIps *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#dns_ips FsxFileCache#dns_ips}.

---

### FsxFileCacheLustreConfiguration <a name="FsxFileCacheLustreConfiguration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxfilecache"

&fsxfilecache.FsxFileCacheLustreConfiguration {
	DeploymentType: *string,
	MetadataConfiguration: interface{},
	PerUnitStorageThroughput: *f64,
	WeeklyMaintenanceStartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#deployment_type FsxFileCache#deployment_type}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration.property.metadataConfiguration">MetadataConfiguration</a></code> | <code>interface{}</code> | metadata_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration.property.perUnitStorageThroughput">PerUnitStorageThroughput</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#per_unit_storage_throughput FsxFileCache#per_unit_storage_throughput}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration.property.weeklyMaintenanceStartTime">WeeklyMaintenanceStartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#weekly_maintenance_start_time FsxFileCache#weekly_maintenance_start_time}. |

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration.property.deploymentType"></a>

```go
DeploymentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#deployment_type FsxFileCache#deployment_type}.

---

##### `MetadataConfiguration`<sup>Required</sup> <a name="MetadataConfiguration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration.property.metadataConfiguration"></a>

```go
MetadataConfiguration interface{}
```

- *Type:* interface{}

metadata_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#metadata_configuration FsxFileCache#metadata_configuration}

---

##### `PerUnitStorageThroughput`<sup>Required</sup> <a name="PerUnitStorageThroughput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration.property.perUnitStorageThroughput"></a>

```go
PerUnitStorageThroughput *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#per_unit_storage_throughput FsxFileCache#per_unit_storage_throughput}.

---

##### `WeeklyMaintenanceStartTime`<sup>Optional</sup> <a name="WeeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration.property.weeklyMaintenanceStartTime"></a>

```go
WeeklyMaintenanceStartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#weekly_maintenance_start_time FsxFileCache#weekly_maintenance_start_time}.

---

### FsxFileCacheLustreConfigurationLogConfiguration <a name="FsxFileCacheLustreConfigurationLogConfiguration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxfilecache"

&fsxfilecache.FsxFileCacheLustreConfigurationLogConfiguration {

}
```


### FsxFileCacheLustreConfigurationMetadataConfiguration <a name="FsxFileCacheLustreConfigurationMetadataConfiguration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxfilecache"

&fsxfilecache.FsxFileCacheLustreConfigurationMetadataConfiguration {
	StorageCapacity: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration.property.storageCapacity">StorageCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#storage_capacity FsxFileCache#storage_capacity}. |

---

##### `StorageCapacity`<sup>Required</sup> <a name="StorageCapacity" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration.property.storageCapacity"></a>

```go
StorageCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#storage_capacity FsxFileCache#storage_capacity}.

---

### FsxFileCacheTimeouts <a name="FsxFileCacheTimeouts" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxfilecache"

&fsxfilecache.FsxFileCacheTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#create FsxFileCache#create}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#delete FsxFileCache#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#update FsxFileCache#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#create FsxFileCache#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#delete FsxFileCache#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#update FsxFileCache#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxFileCacheDataRepositoryAssociationList <a name="FsxFileCacheDataRepositoryAssociationList" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxfilecache"

fsxfilecache.NewFsxFileCacheDataRepositoryAssociationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FsxFileCacheDataRepositoryAssociationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.get"></a>

```go
func Get(index *f64) FsxFileCacheDataRepositoryAssociationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxFileCacheDataRepositoryAssociationNfsList <a name="FsxFileCacheDataRepositoryAssociationNfsList" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxfilecache"

fsxfilecache.NewFsxFileCacheDataRepositoryAssociationNfsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FsxFileCacheDataRepositoryAssociationNfsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.get"></a>

```go
func Get(index *f64) FsxFileCacheDataRepositoryAssociationNfsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxFileCacheDataRepositoryAssociationNfsOutputReference <a name="FsxFileCacheDataRepositoryAssociationNfsOutputReference" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxfilecache"

fsxfilecache.NewFsxFileCacheDataRepositoryAssociationNfsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FsxFileCacheDataRepositoryAssociationNfsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.resetDnsIps">ResetDnsIps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDnsIps` <a name="ResetDnsIps" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.resetDnsIps"></a>

```go
func ResetDnsIps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.dnsIpsInput">DnsIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.dnsIps">DnsIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsIpsInput`<sup>Optional</sup> <a name="DnsIpsInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.dnsIpsInput"></a>

```go
func DnsIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `DnsIps`<sup>Required</sup> <a name="DnsIps" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.dnsIps"></a>

```go
func DnsIps() *[]*string
```

- *Type:* *[]*string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxFileCacheDataRepositoryAssociationOutputReference <a name="FsxFileCacheDataRepositoryAssociationOutputReference" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxfilecache"

fsxfilecache.NewFsxFileCacheDataRepositoryAssociationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FsxFileCacheDataRepositoryAssociationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.putNfs">PutNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.resetDataRepositorySubdirectories">ResetDataRepositorySubdirectories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.resetNfs">ResetNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNfs` <a name="PutNfs" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.putNfs"></a>

```go
func PutNfs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.putNfs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDataRepositorySubdirectories` <a name="ResetDataRepositorySubdirectories" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.resetDataRepositorySubdirectories"></a>

```go
func ResetDataRepositorySubdirectories()
```

##### `ResetNfs` <a name="ResetNfs" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.resetNfs"></a>

```go
func ResetNfs()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.associationId">AssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileCacheId">FileCacheId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileSystemPath">FileSystemPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.importedFileChunkSize">ImportedFileChunkSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.nfs">Nfs</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList">FsxFileCacheDataRepositoryAssociationNfsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.dataRepositoryPathInput">DataRepositoryPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.dataRepositorySubdirectoriesInput">DataRepositorySubdirectoriesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileCachePathInput">FileCachePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.nfsInput">NfsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.dataRepositoryPath">DataRepositoryPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.dataRepositorySubdirectories">DataRepositorySubdirectories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileCachePath">FileCachePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.associationId"></a>

```go
func AssociationId() *string
```

- *Type:* *string

---

##### `FileCacheId`<sup>Required</sup> <a name="FileCacheId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileCacheId"></a>

```go
func FileCacheId() *string
```

- *Type:* *string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileSystemId"></a>

```go
func FileSystemId() *string
```

- *Type:* *string

---

##### `FileSystemPath`<sup>Required</sup> <a name="FileSystemPath" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileSystemPath"></a>

```go
func FileSystemPath() *string
```

- *Type:* *string

---

##### `ImportedFileChunkSize`<sup>Required</sup> <a name="ImportedFileChunkSize" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.importedFileChunkSize"></a>

```go
func ImportedFileChunkSize() *f64
```

- *Type:* *f64

---

##### `Nfs`<sup>Required</sup> <a name="Nfs" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.nfs"></a>

```go
func Nfs() FsxFileCacheDataRepositoryAssociationNfsList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList">FsxFileCacheDataRepositoryAssociationNfsList</a>

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `DataRepositoryPathInput`<sup>Optional</sup> <a name="DataRepositoryPathInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.dataRepositoryPathInput"></a>

```go
func DataRepositoryPathInput() *string
```

- *Type:* *string

---

##### `DataRepositorySubdirectoriesInput`<sup>Optional</sup> <a name="DataRepositorySubdirectoriesInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.dataRepositorySubdirectoriesInput"></a>

```go
func DataRepositorySubdirectoriesInput() *[]*string
```

- *Type:* *[]*string

---

##### `FileCachePathInput`<sup>Optional</sup> <a name="FileCachePathInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileCachePathInput"></a>

```go
func FileCachePathInput() *string
```

- *Type:* *string

---

##### `NfsInput`<sup>Optional</sup> <a name="NfsInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.nfsInput"></a>

```go
func NfsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DataRepositoryPath`<sup>Required</sup> <a name="DataRepositoryPath" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.dataRepositoryPath"></a>

```go
func DataRepositoryPath() *string
```

- *Type:* *string

---

##### `DataRepositorySubdirectories`<sup>Required</sup> <a name="DataRepositorySubdirectories" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.dataRepositorySubdirectories"></a>

```go
func DataRepositorySubdirectories() *[]*string
```

- *Type:* *[]*string

---

##### `FileCachePath`<sup>Required</sup> <a name="FileCachePath" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileCachePath"></a>

```go
func FileCachePath() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxFileCacheLustreConfigurationList <a name="FsxFileCacheLustreConfigurationList" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxfilecache"

fsxfilecache.NewFsxFileCacheLustreConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FsxFileCacheLustreConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.get"></a>

```go
func Get(index *f64) FsxFileCacheLustreConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxFileCacheLustreConfigurationLogConfigurationList <a name="FsxFileCacheLustreConfigurationLogConfigurationList" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxfilecache"

fsxfilecache.NewFsxFileCacheLustreConfigurationLogConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FsxFileCacheLustreConfigurationLogConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.get"></a>

```go
func Get(index *f64) FsxFileCacheLustreConfigurationLogConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FsxFileCacheLustreConfigurationLogConfigurationOutputReference <a name="FsxFileCacheLustreConfigurationLogConfigurationOutputReference" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxfilecache"

fsxfilecache.NewFsxFileCacheLustreConfigurationLogConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FsxFileCacheLustreConfigurationLogConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfiguration">FsxFileCacheLustreConfigurationLogConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxFileCacheLustreConfigurationLogConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfiguration">FsxFileCacheLustreConfigurationLogConfiguration</a>

---


### FsxFileCacheLustreConfigurationMetadataConfigurationList <a name="FsxFileCacheLustreConfigurationMetadataConfigurationList" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxfilecache"

fsxfilecache.NewFsxFileCacheLustreConfigurationMetadataConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FsxFileCacheLustreConfigurationMetadataConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.get"></a>

```go
func Get(index *f64) FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference <a name="FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxfilecache"

fsxfilecache.NewFsxFileCacheLustreConfigurationMetadataConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.storageCapacityInput">StorageCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.storageCapacity">StorageCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StorageCapacityInput`<sup>Optional</sup> <a name="StorageCapacityInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.storageCapacityInput"></a>

```go
func StorageCapacityInput() *f64
```

- *Type:* *f64

---

##### `StorageCapacity`<sup>Required</sup> <a name="StorageCapacity" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.storageCapacity"></a>

```go
func StorageCapacity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxFileCacheLustreConfigurationOutputReference <a name="FsxFileCacheLustreConfigurationOutputReference" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxfilecache"

fsxfilecache.NewFsxFileCacheLustreConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FsxFileCacheLustreConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.putMetadataConfiguration">PutMetadataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.resetWeeklyMaintenanceStartTime">ResetWeeklyMaintenanceStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetadataConfiguration` <a name="PutMetadataConfiguration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.putMetadataConfiguration"></a>

```go
func PutMetadataConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.putMetadataConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetWeeklyMaintenanceStartTime` <a name="ResetWeeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.resetWeeklyMaintenanceStartTime"></a>

```go
func ResetWeeklyMaintenanceStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList">FsxFileCacheLustreConfigurationLogConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.metadataConfiguration">MetadataConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList">FsxFileCacheLustreConfigurationMetadataConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.mountName">MountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.metadataConfigurationInput">MetadataConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.perUnitStorageThroughputInput">PerUnitStorageThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.weeklyMaintenanceStartTimeInput">WeeklyMaintenanceStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.perUnitStorageThroughput">PerUnitStorageThroughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.weeklyMaintenanceStartTime">WeeklyMaintenanceStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogConfiguration`<sup>Required</sup> <a name="LogConfiguration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.logConfiguration"></a>

```go
func LogConfiguration() FsxFileCacheLustreConfigurationLogConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList">FsxFileCacheLustreConfigurationLogConfigurationList</a>

---

##### `MetadataConfiguration`<sup>Required</sup> <a name="MetadataConfiguration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.metadataConfiguration"></a>

```go
func MetadataConfiguration() FsxFileCacheLustreConfigurationMetadataConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList">FsxFileCacheLustreConfigurationMetadataConfigurationList</a>

---

##### `MountName`<sup>Required</sup> <a name="MountName" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.mountName"></a>

```go
func MountName() *string
```

- *Type:* *string

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.deploymentTypeInput"></a>

```go
func DeploymentTypeInput() *string
```

- *Type:* *string

---

##### `MetadataConfigurationInput`<sup>Optional</sup> <a name="MetadataConfigurationInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.metadataConfigurationInput"></a>

```go
func MetadataConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `PerUnitStorageThroughputInput`<sup>Optional</sup> <a name="PerUnitStorageThroughputInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.perUnitStorageThroughputInput"></a>

```go
func PerUnitStorageThroughputInput() *f64
```

- *Type:* *f64

---

##### `WeeklyMaintenanceStartTimeInput`<sup>Optional</sup> <a name="WeeklyMaintenanceStartTimeInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.weeklyMaintenanceStartTimeInput"></a>

```go
func WeeklyMaintenanceStartTimeInput() *string
```

- *Type:* *string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.deploymentType"></a>

```go
func DeploymentType() *string
```

- *Type:* *string

---

##### `PerUnitStorageThroughput`<sup>Required</sup> <a name="PerUnitStorageThroughput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.perUnitStorageThroughput"></a>

```go
func PerUnitStorageThroughput() *f64
```

- *Type:* *f64

---

##### `WeeklyMaintenanceStartTime`<sup>Required</sup> <a name="WeeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.weeklyMaintenanceStartTime"></a>

```go
func WeeklyMaintenanceStartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxFileCacheTimeoutsOutputReference <a name="FsxFileCacheTimeoutsOutputReference" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxfilecache"

fsxfilecache.NewFsxFileCacheTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxFileCacheTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



