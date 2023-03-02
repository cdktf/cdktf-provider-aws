# `datasyncLocationEfs` Submodule <a name="`datasyncLocationEfs` Submodule" id="@cdktf/provider-aws.datasyncLocationEfs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationEfs <a name="DatasyncLocationEfs" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs aws_datasync_location_efs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datasynclocationefs"

datasynclocationefs.NewDatasyncLocationEfs(scope Construct, id *string, config DatasyncLocationEfsConfig) DatasyncLocationEfs
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig">DatasyncLocationEfsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig">DatasyncLocationEfsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.putEc2Config">PutEc2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetAccessPointArn">ResetAccessPointArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetFileSystemAccessRoleArn">ResetFileSystemAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetInTransitEncryption">ResetInTransitEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetSubdirectory">ResetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutEc2Config` <a name="PutEc2Config" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.putEc2Config"></a>

```go
func PutEc2Config(value DatasyncLocationEfsEc2Config)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.putEc2Config.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a>

---

##### `ResetAccessPointArn` <a name="ResetAccessPointArn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetAccessPointArn"></a>

```go
func ResetAccessPointArn()
```

##### `ResetFileSystemAccessRoleArn` <a name="ResetFileSystemAccessRoleArn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetFileSystemAccessRoleArn"></a>

```go
func ResetFileSystemAccessRoleArn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetId"></a>

```go
func ResetId()
```

##### `ResetInTransitEncryption` <a name="ResetInTransitEncryption" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetInTransitEncryption"></a>

```go
func ResetInTransitEncryption()
```

##### `ResetSubdirectory` <a name="ResetSubdirectory" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetSubdirectory"></a>

```go
func ResetSubdirectory()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datasynclocationefs"

datasynclocationefs.DatasyncLocationEfs_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datasynclocationefs"

datasynclocationefs.DatasyncLocationEfs_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datasynclocationefs"

datasynclocationefs.DatasyncLocationEfs_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.ec2Config">Ec2Config</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference">DatasyncLocationEfsEc2ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.accessPointArnInput">AccessPointArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.ec2ConfigInput">Ec2ConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.efsFileSystemArnInput">EfsFileSystemArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.fileSystemAccessRoleArnInput">FileSystemAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.inTransitEncryptionInput">InTransitEncryptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.subdirectoryInput">SubdirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.accessPointArn">AccessPointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.efsFileSystemArn">EfsFileSystemArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.fileSystemAccessRoleArn">FileSystemAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.inTransitEncryption">InTransitEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.subdirectory">Subdirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Ec2Config`<sup>Required</sup> <a name="Ec2Config" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.ec2Config"></a>

```go
func Ec2Config() DatasyncLocationEfsEc2ConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference">DatasyncLocationEfsEc2ConfigOutputReference</a>

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `AccessPointArnInput`<sup>Optional</sup> <a name="AccessPointArnInput" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.accessPointArnInput"></a>

```go
func AccessPointArnInput() *string
```

- *Type:* *string

---

##### `Ec2ConfigInput`<sup>Optional</sup> <a name="Ec2ConfigInput" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.ec2ConfigInput"></a>

```go
func Ec2ConfigInput() DatasyncLocationEfsEc2Config
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a>

---

##### `EfsFileSystemArnInput`<sup>Optional</sup> <a name="EfsFileSystemArnInput" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.efsFileSystemArnInput"></a>

```go
func EfsFileSystemArnInput() *string
```

- *Type:* *string

---

##### `FileSystemAccessRoleArnInput`<sup>Optional</sup> <a name="FileSystemAccessRoleArnInput" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.fileSystemAccessRoleArnInput"></a>

```go
func FileSystemAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InTransitEncryptionInput`<sup>Optional</sup> <a name="InTransitEncryptionInput" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.inTransitEncryptionInput"></a>

```go
func InTransitEncryptionInput() *string
```

- *Type:* *string

---

##### `SubdirectoryInput`<sup>Optional</sup> <a name="SubdirectoryInput" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.subdirectoryInput"></a>

```go
func SubdirectoryInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AccessPointArn`<sup>Required</sup> <a name="AccessPointArn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.accessPointArn"></a>

```go
func AccessPointArn() *string
```

- *Type:* *string

---

##### `EfsFileSystemArn`<sup>Required</sup> <a name="EfsFileSystemArn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.efsFileSystemArn"></a>

```go
func EfsFileSystemArn() *string
```

- *Type:* *string

---

##### `FileSystemAccessRoleArn`<sup>Required</sup> <a name="FileSystemAccessRoleArn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.fileSystemAccessRoleArn"></a>

```go
func FileSystemAccessRoleArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InTransitEncryption`<sup>Required</sup> <a name="InTransitEncryption" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.inTransitEncryption"></a>

```go
func InTransitEncryption() *string
```

- *Type:* *string

---

##### `Subdirectory`<sup>Required</sup> <a name="Subdirectory" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.subdirectory"></a>

```go
func Subdirectory() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationEfsConfig <a name="DatasyncLocationEfsConfig" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datasynclocationefs"

&datasynclocationefs.DatasyncLocationEfsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Ec2Config: github.com/cdktf/cdktf-provider-aws-go/aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config,
	EfsFileSystemArn: *string,
	AccessPointArn: *string,
	FileSystemAccessRoleArn: *string,
	Id: *string,
	InTransitEncryption: *string,
	Subdirectory: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.ec2Config">Ec2Config</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a></code> | ec2_config block. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.efsFileSystemArn">EfsFileSystemArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#efs_file_system_arn DatasyncLocationEfs#efs_file_system_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.accessPointArn">AccessPointArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#access_point_arn DatasyncLocationEfs#access_point_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.fileSystemAccessRoleArn">FileSystemAccessRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#file_system_access_role_arn DatasyncLocationEfs#file_system_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#id DatasyncLocationEfs#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.inTransitEncryption">InTransitEncryption</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#in_transit_encryption DatasyncLocationEfs#in_transit_encryption}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.subdirectory">Subdirectory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#subdirectory DatasyncLocationEfs#subdirectory}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#tags DatasyncLocationEfs#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#tags_all DatasyncLocationEfs#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Ec2Config`<sup>Required</sup> <a name="Ec2Config" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.ec2Config"></a>

```go
Ec2Config DatasyncLocationEfsEc2Config
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a>

ec2_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#ec2_config DatasyncLocationEfs#ec2_config}

---

##### `EfsFileSystemArn`<sup>Required</sup> <a name="EfsFileSystemArn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.efsFileSystemArn"></a>

```go
EfsFileSystemArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#efs_file_system_arn DatasyncLocationEfs#efs_file_system_arn}.

---

##### `AccessPointArn`<sup>Optional</sup> <a name="AccessPointArn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.accessPointArn"></a>

```go
AccessPointArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#access_point_arn DatasyncLocationEfs#access_point_arn}.

---

##### `FileSystemAccessRoleArn`<sup>Optional</sup> <a name="FileSystemAccessRoleArn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.fileSystemAccessRoleArn"></a>

```go
FileSystemAccessRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#file_system_access_role_arn DatasyncLocationEfs#file_system_access_role_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#id DatasyncLocationEfs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InTransitEncryption`<sup>Optional</sup> <a name="InTransitEncryption" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.inTransitEncryption"></a>

```go
InTransitEncryption *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#in_transit_encryption DatasyncLocationEfs#in_transit_encryption}.

---

##### `Subdirectory`<sup>Optional</sup> <a name="Subdirectory" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.subdirectory"></a>

```go
Subdirectory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#subdirectory DatasyncLocationEfs#subdirectory}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#tags DatasyncLocationEfs#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#tags_all DatasyncLocationEfs#tags_all}.

---

### DatasyncLocationEfsEc2Config <a name="DatasyncLocationEfsEc2Config" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datasynclocationefs"

&datasynclocationefs.DatasyncLocationEfsEc2Config {
	SecurityGroupArns: *[]*string,
	SubnetArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config.property.securityGroupArns">SecurityGroupArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#security_group_arns DatasyncLocationEfs#security_group_arns}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config.property.subnetArn">SubnetArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#subnet_arn DatasyncLocationEfs#subnet_arn}. |

---

##### `SecurityGroupArns`<sup>Required</sup> <a name="SecurityGroupArns" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config.property.securityGroupArns"></a>

```go
SecurityGroupArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#security_group_arns DatasyncLocationEfs#security_group_arns}.

---

##### `SubnetArn`<sup>Required</sup> <a name="SubnetArn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config.property.subnetArn"></a>

```go
SubnetArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#subnet_arn DatasyncLocationEfs#subnet_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationEfsEc2ConfigOutputReference <a name="DatasyncLocationEfsEc2ConfigOutputReference" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datasynclocationefs"

datasynclocationefs.NewDatasyncLocationEfsEc2ConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncLocationEfsEc2ConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.securityGroupArnsInput">SecurityGroupArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.subnetArnInput">SubnetArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.securityGroupArns">SecurityGroupArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.subnetArn">SubnetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupArnsInput`<sup>Optional</sup> <a name="SecurityGroupArnsInput" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.securityGroupArnsInput"></a>

```go
func SecurityGroupArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetArnInput`<sup>Optional</sup> <a name="SubnetArnInput" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.subnetArnInput"></a>

```go
func SubnetArnInput() *string
```

- *Type:* *string

---

##### `SecurityGroupArns`<sup>Required</sup> <a name="SecurityGroupArns" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.securityGroupArns"></a>

```go
func SecurityGroupArns() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetArn`<sup>Required</sup> <a name="SubnetArn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.subnetArn"></a>

```go
func SubnetArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DatasyncLocationEfsEc2Config
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a>

---



