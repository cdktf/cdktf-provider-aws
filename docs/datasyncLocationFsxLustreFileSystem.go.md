# `datasyncLocationFsxLustreFileSystem` Submodule <a name="`datasyncLocationFsxLustreFileSystem` Submodule" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationFsxLustreFileSystem <a name="DatasyncLocationFsxLustreFileSystem" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system aws_datasync_location_fsx_lustre_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datasynclocationfsxlustrefilesystem"

datasynclocationfsxlustrefilesystem.NewDatasyncLocationFsxLustreFileSystem(scope Construct, id *string, config DatasyncLocationFsxLustreFileSystemConfig) DatasyncLocationFsxLustreFileSystem
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig">DatasyncLocationFsxLustreFileSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig">DatasyncLocationFsxLustreFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetSubdirectory">ResetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetId"></a>

```go
func ResetId()
```

##### `ResetSubdirectory` <a name="ResetSubdirectory" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetSubdirectory"></a>

```go
func ResetSubdirectory()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datasynclocationfsxlustrefilesystem"

datasynclocationfsxlustrefilesystem.DatasyncLocationFsxLustreFileSystem_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datasynclocationfsxlustrefilesystem"

datasynclocationfsxlustrefilesystem.DatasyncLocationFsxLustreFileSystem_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datasynclocationfsxlustrefilesystem"

datasynclocationfsxlustrefilesystem.DatasyncLocationFsxLustreFileSystem_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.fsxFilesystemArnInput">FsxFilesystemArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.securityGroupArnsInput">SecurityGroupArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.subdirectoryInput">SubdirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.fsxFilesystemArn">FsxFilesystemArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.securityGroupArns">SecurityGroupArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.subdirectory">Subdirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `FsxFilesystemArnInput`<sup>Optional</sup> <a name="FsxFilesystemArnInput" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.fsxFilesystemArnInput"></a>

```go
func FsxFilesystemArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SecurityGroupArnsInput`<sup>Optional</sup> <a name="SecurityGroupArnsInput" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.securityGroupArnsInput"></a>

```go
func SecurityGroupArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubdirectoryInput`<sup>Optional</sup> <a name="SubdirectoryInput" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.subdirectoryInput"></a>

```go
func SubdirectoryInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FsxFilesystemArn`<sup>Required</sup> <a name="FsxFilesystemArn" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.fsxFilesystemArn"></a>

```go
func FsxFilesystemArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SecurityGroupArns`<sup>Required</sup> <a name="SecurityGroupArns" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.securityGroupArns"></a>

```go
func SecurityGroupArns() *[]*string
```

- *Type:* *[]*string

---

##### `Subdirectory`<sup>Required</sup> <a name="Subdirectory" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.subdirectory"></a>

```go
func Subdirectory() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationFsxLustreFileSystemConfig <a name="DatasyncLocationFsxLustreFileSystemConfig" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datasynclocationfsxlustrefilesystem"

&datasynclocationfsxlustrefilesystem.DatasyncLocationFsxLustreFileSystemConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FsxFilesystemArn: *string,
	SecurityGroupArns: *[]*string,
	Id: *string,
	Subdirectory: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.fsxFilesystemArn">FsxFilesystemArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#fsx_filesystem_arn DatasyncLocationFsxLustreFileSystem#fsx_filesystem_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.securityGroupArns">SecurityGroupArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#security_group_arns DatasyncLocationFsxLustreFileSystem#security_group_arns}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#id DatasyncLocationFsxLustreFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.subdirectory">Subdirectory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#subdirectory DatasyncLocationFsxLustreFileSystem#subdirectory}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#tags DatasyncLocationFsxLustreFileSystem#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#tags_all DatasyncLocationFsxLustreFileSystem#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FsxFilesystemArn`<sup>Required</sup> <a name="FsxFilesystemArn" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.fsxFilesystemArn"></a>

```go
FsxFilesystemArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#fsx_filesystem_arn DatasyncLocationFsxLustreFileSystem#fsx_filesystem_arn}.

---

##### `SecurityGroupArns`<sup>Required</sup> <a name="SecurityGroupArns" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.securityGroupArns"></a>

```go
SecurityGroupArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#security_group_arns DatasyncLocationFsxLustreFileSystem#security_group_arns}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#id DatasyncLocationFsxLustreFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Subdirectory`<sup>Optional</sup> <a name="Subdirectory" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.subdirectory"></a>

```go
Subdirectory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#subdirectory DatasyncLocationFsxLustreFileSystem#subdirectory}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#tags DatasyncLocationFsxLustreFileSystem#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_lustre_file_system#tags_all DatasyncLocationFsxLustreFileSystem#tags_all}.

---



