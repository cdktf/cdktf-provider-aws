# `fsxOntapStorageVirtualMachine` Submodule <a name="`fsxOntapStorageVirtualMachine` Submodule" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxOntapStorageVirtualMachine <a name="FsxOntapStorageVirtualMachine" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine aws_fsx_ontap_storage_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapstoragevirtualmachine"

fsxontapstoragevirtualmachine.NewFsxOntapStorageVirtualMachine(scope Construct, id *string, config FsxOntapStorageVirtualMachineConfig) FsxOntapStorageVirtualMachine
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig">FsxOntapStorageVirtualMachineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig">FsxOntapStorageVirtualMachineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.putActiveDirectoryConfiguration">PutActiveDirectoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetActiveDirectoryConfiguration">ResetActiveDirectoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetRootVolumeSecurityStyle">ResetRootVolumeSecurityStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetSvmAdminPassword">ResetSvmAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutActiveDirectoryConfiguration` <a name="PutActiveDirectoryConfiguration" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.putActiveDirectoryConfiguration"></a>

```go
func PutActiveDirectoryConfiguration(value FsxOntapStorageVirtualMachineActiveDirectoryConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.putActiveDirectoryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.putTimeouts"></a>

```go
func PutTimeouts(value FsxOntapStorageVirtualMachineTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts">FsxOntapStorageVirtualMachineTimeouts</a>

---

##### `ResetActiveDirectoryConfiguration` <a name="ResetActiveDirectoryConfiguration" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetActiveDirectoryConfiguration"></a>

```go
func ResetActiveDirectoryConfiguration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetId"></a>

```go
func ResetId()
```

##### `ResetRootVolumeSecurityStyle` <a name="ResetRootVolumeSecurityStyle" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetRootVolumeSecurityStyle"></a>

```go
func ResetRootVolumeSecurityStyle()
```

##### `ResetSvmAdminPassword` <a name="ResetSvmAdminPassword" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetSvmAdminPassword"></a>

```go
func ResetSvmAdminPassword()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapstoragevirtualmachine"

fsxontapstoragevirtualmachine.FsxOntapStorageVirtualMachine_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapstoragevirtualmachine"

fsxontapstoragevirtualmachine.FsxOntapStorageVirtualMachine_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapstoragevirtualmachine"

fsxontapstoragevirtualmachine.FsxOntapStorageVirtualMachine_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.activeDirectoryConfiguration">ActiveDirectoryConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference">FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList">FsxOntapStorageVirtualMachineEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.subtype">Subtype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference">FsxOntapStorageVirtualMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.activeDirectoryConfigurationInput">ActiveDirectoryConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.fileSystemIdInput">FileSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.rootVolumeSecurityStyleInput">RootVolumeSecurityStyleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.svmAdminPasswordInput">SvmAdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.rootVolumeSecurityStyle">RootVolumeSecurityStyle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.svmAdminPassword">SvmAdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActiveDirectoryConfiguration`<sup>Required</sup> <a name="ActiveDirectoryConfiguration" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.activeDirectoryConfiguration"></a>

```go
func ActiveDirectoryConfiguration() FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference">FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.endpoints"></a>

```go
func Endpoints() FsxOntapStorageVirtualMachineEndpointsList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList">FsxOntapStorageVirtualMachineEndpointsList</a>

---

##### `Subtype`<sup>Required</sup> <a name="Subtype" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.subtype"></a>

```go
func Subtype() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.timeouts"></a>

```go
func Timeouts() FsxOntapStorageVirtualMachineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference">FsxOntapStorageVirtualMachineTimeoutsOutputReference</a>

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `ActiveDirectoryConfigurationInput`<sup>Optional</sup> <a name="ActiveDirectoryConfigurationInput" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.activeDirectoryConfigurationInput"></a>

```go
func ActiveDirectoryConfigurationInput() FsxOntapStorageVirtualMachineActiveDirectoryConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfiguration</a>

---

##### `FileSystemIdInput`<sup>Optional</sup> <a name="FileSystemIdInput" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.fileSystemIdInput"></a>

```go
func FileSystemIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RootVolumeSecurityStyleInput`<sup>Optional</sup> <a name="RootVolumeSecurityStyleInput" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.rootVolumeSecurityStyleInput"></a>

```go
func RootVolumeSecurityStyleInput() *string
```

- *Type:* *string

---

##### `SvmAdminPasswordInput`<sup>Optional</sup> <a name="SvmAdminPasswordInput" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.svmAdminPasswordInput"></a>

```go
func SvmAdminPasswordInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.fileSystemId"></a>

```go
func FileSystemId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RootVolumeSecurityStyle`<sup>Required</sup> <a name="RootVolumeSecurityStyle" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.rootVolumeSecurityStyle"></a>

```go
func RootVolumeSecurityStyle() *string
```

- *Type:* *string

---

##### `SvmAdminPassword`<sup>Required</sup> <a name="SvmAdminPassword" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.svmAdminPassword"></a>

```go
func SvmAdminPassword() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachine.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxOntapStorageVirtualMachineActiveDirectoryConfiguration <a name="FsxOntapStorageVirtualMachineActiveDirectoryConfiguration" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapstoragevirtualmachine"

&fsxontapstoragevirtualmachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration {
	NetbiosName: *string,
	SelfManagedActiveDirectoryConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration.property.netbiosName">NetbiosName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#netbios_name FsxOntapStorageVirtualMachine#netbios_name}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration.property.selfManagedActiveDirectoryConfiguration">SelfManagedActiveDirectoryConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a></code> | self_managed_active_directory_configuration block. |

---

##### `NetbiosName`<sup>Optional</sup> <a name="NetbiosName" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration.property.netbiosName"></a>

```go
NetbiosName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#netbios_name FsxOntapStorageVirtualMachine#netbios_name}.

---

##### `SelfManagedActiveDirectoryConfiguration`<sup>Optional</sup> <a name="SelfManagedActiveDirectoryConfiguration" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration.property.selfManagedActiveDirectoryConfiguration"></a>

```go
SelfManagedActiveDirectoryConfiguration FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a>

self_managed_active_directory_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#self_managed_active_directory_configuration FsxOntapStorageVirtualMachine#self_managed_active_directory_configuration}

---

### FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration <a name="FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapstoragevirtualmachine"

&fsxontapstoragevirtualmachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration {
	DnsIps: *[]*string,
	DomainName: *string,
	Password: *string,
	Username: *string,
	FileSystemAdministratorsGroup: *string,
	OrganizationalUnitDistinguishedName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.dnsIps">DnsIps</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#dns_ips FsxOntapStorageVirtualMachine#dns_ips}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#domain_name FsxOntapStorageVirtualMachine#domain_name}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#password FsxOntapStorageVirtualMachine#password}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#username FsxOntapStorageVirtualMachine#username}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.fileSystemAdministratorsGroup">FileSystemAdministratorsGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#file_system_administrators_group FsxOntapStorageVirtualMachine#file_system_administrators_group}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.organizationalUnitDistinguishedName">OrganizationalUnitDistinguishedName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#organizational_unit_distinguished_name FsxOntapStorageVirtualMachine#organizational_unit_distinguished_name}. |

---

##### `DnsIps`<sup>Required</sup> <a name="DnsIps" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.dnsIps"></a>

```go
DnsIps *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#dns_ips FsxOntapStorageVirtualMachine#dns_ips}.

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#domain_name FsxOntapStorageVirtualMachine#domain_name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#password FsxOntapStorageVirtualMachine#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#username FsxOntapStorageVirtualMachine#username}.

---

##### `FileSystemAdministratorsGroup`<sup>Optional</sup> <a name="FileSystemAdministratorsGroup" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.fileSystemAdministratorsGroup"></a>

```go
FileSystemAdministratorsGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#file_system_administrators_group FsxOntapStorageVirtualMachine#file_system_administrators_group}.

---

##### `OrganizationalUnitDistinguishedName`<sup>Optional</sup> <a name="OrganizationalUnitDistinguishedName" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.organizationalUnitDistinguishedName"></a>

```go
OrganizationalUnitDistinguishedName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#organizational_unit_distinguished_name FsxOntapStorageVirtualMachine#organizational_unit_distinguished_name}.

---

### FsxOntapStorageVirtualMachineConfig <a name="FsxOntapStorageVirtualMachineConfig" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapstoragevirtualmachine"

&fsxontapstoragevirtualmachine.FsxOntapStorageVirtualMachineConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FileSystemId: *string,
	Name: *string,
	ActiveDirectoryConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration,
	Id: *string,
	RootVolumeSecurityStyle: *string,
	SvmAdminPassword: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#file_system_id FsxOntapStorageVirtualMachine#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#name FsxOntapStorageVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.activeDirectoryConfiguration">ActiveDirectoryConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfiguration</a></code> | active_directory_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#id FsxOntapStorageVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.rootVolumeSecurityStyle">RootVolumeSecurityStyle</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#root_volume_security_style FsxOntapStorageVirtualMachine#root_volume_security_style}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.svmAdminPassword">SvmAdminPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#svm_admin_password FsxOntapStorageVirtualMachine#svm_admin_password}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#tags FsxOntapStorageVirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#tags_all FsxOntapStorageVirtualMachine#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts">FsxOntapStorageVirtualMachineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.fileSystemId"></a>

```go
FileSystemId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#file_system_id FsxOntapStorageVirtualMachine#file_system_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#name FsxOntapStorageVirtualMachine#name}.

---

##### `ActiveDirectoryConfiguration`<sup>Optional</sup> <a name="ActiveDirectoryConfiguration" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.activeDirectoryConfiguration"></a>

```go
ActiveDirectoryConfiguration FsxOntapStorageVirtualMachineActiveDirectoryConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfiguration</a>

active_directory_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#active_directory_configuration FsxOntapStorageVirtualMachine#active_directory_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#id FsxOntapStorageVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RootVolumeSecurityStyle`<sup>Optional</sup> <a name="RootVolumeSecurityStyle" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.rootVolumeSecurityStyle"></a>

```go
RootVolumeSecurityStyle *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#root_volume_security_style FsxOntapStorageVirtualMachine#root_volume_security_style}.

---

##### `SvmAdminPassword`<sup>Optional</sup> <a name="SvmAdminPassword" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.svmAdminPassword"></a>

```go
SvmAdminPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#svm_admin_password FsxOntapStorageVirtualMachine#svm_admin_password}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#tags FsxOntapStorageVirtualMachine#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#tags_all FsxOntapStorageVirtualMachine#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineConfig.property.timeouts"></a>

```go
Timeouts FsxOntapStorageVirtualMachineTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts">FsxOntapStorageVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#timeouts FsxOntapStorageVirtualMachine#timeouts}

---

### FsxOntapStorageVirtualMachineEndpoints <a name="FsxOntapStorageVirtualMachineEndpoints" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpoints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapstoragevirtualmachine"

&fsxontapstoragevirtualmachine.FsxOntapStorageVirtualMachineEndpoints {

}
```


### FsxOntapStorageVirtualMachineEndpointsIscsi <a name="FsxOntapStorageVirtualMachineEndpointsIscsi" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsi.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapstoragevirtualmachine"

&fsxontapstoragevirtualmachine.FsxOntapStorageVirtualMachineEndpointsIscsi {

}
```


### FsxOntapStorageVirtualMachineEndpointsManagement <a name="FsxOntapStorageVirtualMachineEndpointsManagement" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapstoragevirtualmachine"

&fsxontapstoragevirtualmachine.FsxOntapStorageVirtualMachineEndpointsManagement {

}
```


### FsxOntapStorageVirtualMachineEndpointsNfs <a name="FsxOntapStorageVirtualMachineEndpointsNfs" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapstoragevirtualmachine"

&fsxontapstoragevirtualmachine.FsxOntapStorageVirtualMachineEndpointsNfs {

}
```


### FsxOntapStorageVirtualMachineEndpointsSmb <a name="FsxOntapStorageVirtualMachineEndpointsSmb" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapstoragevirtualmachine"

&fsxontapstoragevirtualmachine.FsxOntapStorageVirtualMachineEndpointsSmb {

}
```


### FsxOntapStorageVirtualMachineTimeouts <a name="FsxOntapStorageVirtualMachineTimeouts" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapstoragevirtualmachine"

&fsxontapstoragevirtualmachine.FsxOntapStorageVirtualMachineTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#create FsxOntapStorageVirtualMachine#create}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#delete FsxOntapStorageVirtualMachine#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#update FsxOntapStorageVirtualMachine#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#create FsxOntapStorageVirtualMachine#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#delete FsxOntapStorageVirtualMachine#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine#update FsxOntapStorageVirtualMachine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference <a name="FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapstoragevirtualmachine"

fsxontapstoragevirtualmachine.NewFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.putSelfManagedActiveDirectoryConfiguration">PutSelfManagedActiveDirectoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resetNetbiosName">ResetNetbiosName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resetSelfManagedActiveDirectoryConfiguration">ResetSelfManagedActiveDirectoryConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelfManagedActiveDirectoryConfiguration` <a name="PutSelfManagedActiveDirectoryConfiguration" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.putSelfManagedActiveDirectoryConfiguration"></a>

```go
func PutSelfManagedActiveDirectoryConfiguration(value FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.putSelfManagedActiveDirectoryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a>

---

##### `ResetNetbiosName` <a name="ResetNetbiosName" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resetNetbiosName"></a>

```go
func ResetNetbiosName()
```

##### `ResetSelfManagedActiveDirectoryConfiguration` <a name="ResetSelfManagedActiveDirectoryConfiguration" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resetSelfManagedActiveDirectoryConfiguration"></a>

```go
func ResetSelfManagedActiveDirectoryConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.selfManagedActiveDirectoryConfiguration">SelfManagedActiveDirectoryConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference">FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.netbiosNameInput">NetbiosNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.selfManagedActiveDirectoryConfigurationInput">SelfManagedActiveDirectoryConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.netbiosName">NetbiosName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SelfManagedActiveDirectoryConfiguration`<sup>Required</sup> <a name="SelfManagedActiveDirectoryConfiguration" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.selfManagedActiveDirectoryConfiguration"></a>

```go
func SelfManagedActiveDirectoryConfiguration() FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference">FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference</a>

---

##### `NetbiosNameInput`<sup>Optional</sup> <a name="NetbiosNameInput" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.netbiosNameInput"></a>

```go
func NetbiosNameInput() *string
```

- *Type:* *string

---

##### `SelfManagedActiveDirectoryConfigurationInput`<sup>Optional</sup> <a name="SelfManagedActiveDirectoryConfigurationInput" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.selfManagedActiveDirectoryConfigurationInput"></a>

```go
func SelfManagedActiveDirectoryConfigurationInput() FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a>

---

##### `NetbiosName`<sup>Required</sup> <a name="NetbiosName" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.netbiosName"></a>

```go
func NetbiosName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxOntapStorageVirtualMachineActiveDirectoryConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfiguration</a>

---


### FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference <a name="FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapstoragevirtualmachine"

fsxontapstoragevirtualmachine.NewFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetFileSystemAdministratorsGroup">ResetFileSystemAdministratorsGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetOrganizationalUnitDistinguishedName">ResetOrganizationalUnitDistinguishedName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileSystemAdministratorsGroup` <a name="ResetFileSystemAdministratorsGroup" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetFileSystemAdministratorsGroup"></a>

```go
func ResetFileSystemAdministratorsGroup()
```

##### `ResetOrganizationalUnitDistinguishedName` <a name="ResetOrganizationalUnitDistinguishedName" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetOrganizationalUnitDistinguishedName"></a>

```go
func ResetOrganizationalUnitDistinguishedName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.dnsIpsInput">DnsIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fileSystemAdministratorsGroupInput">FileSystemAdministratorsGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedNameInput">OrganizationalUnitDistinguishedNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.dnsIps">DnsIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fileSystemAdministratorsGroup">FileSystemAdministratorsGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedName">OrganizationalUnitDistinguishedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsIpsInput`<sup>Optional</sup> <a name="DnsIpsInput" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.dnsIpsInput"></a>

```go
func DnsIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `FileSystemAdministratorsGroupInput`<sup>Optional</sup> <a name="FileSystemAdministratorsGroupInput" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fileSystemAdministratorsGroupInput"></a>

```go
func FileSystemAdministratorsGroupInput() *string
```

- *Type:* *string

---

##### `OrganizationalUnitDistinguishedNameInput`<sup>Optional</sup> <a name="OrganizationalUnitDistinguishedNameInput" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedNameInput"></a>

```go
func OrganizationalUnitDistinguishedNameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `DnsIps`<sup>Required</sup> <a name="DnsIps" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.dnsIps"></a>

```go
func DnsIps() *[]*string
```

- *Type:* *[]*string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `FileSystemAdministratorsGroup`<sup>Required</sup> <a name="FileSystemAdministratorsGroup" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fileSystemAdministratorsGroup"></a>

```go
func FileSystemAdministratorsGroup() *string
```

- *Type:* *string

---

##### `OrganizationalUnitDistinguishedName`<sup>Required</sup> <a name="OrganizationalUnitDistinguishedName" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedName"></a>

```go
func OrganizationalUnitDistinguishedName() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a>

---


### FsxOntapStorageVirtualMachineEndpointsIscsiList <a name="FsxOntapStorageVirtualMachineEndpointsIscsiList" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapstoragevirtualmachine"

fsxontapstoragevirtualmachine.NewFsxOntapStorageVirtualMachineEndpointsIscsiList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FsxOntapStorageVirtualMachineEndpointsIscsiList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.get"></a>

```go
func Get(index *f64) FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference <a name="FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapstoragevirtualmachine"

fsxontapstoragevirtualmachine.NewFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsi">FsxOntapStorageVirtualMachineEndpointsIscsi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxOntapStorageVirtualMachineEndpointsIscsi
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsi">FsxOntapStorageVirtualMachineEndpointsIscsi</a>

---


### FsxOntapStorageVirtualMachineEndpointsList <a name="FsxOntapStorageVirtualMachineEndpointsList" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapstoragevirtualmachine"

fsxontapstoragevirtualmachine.NewFsxOntapStorageVirtualMachineEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FsxOntapStorageVirtualMachineEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.get"></a>

```go
func Get(index *f64) FsxOntapStorageVirtualMachineEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FsxOntapStorageVirtualMachineEndpointsManagementList <a name="FsxOntapStorageVirtualMachineEndpointsManagementList" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapstoragevirtualmachine"

fsxontapstoragevirtualmachine.NewFsxOntapStorageVirtualMachineEndpointsManagementList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FsxOntapStorageVirtualMachineEndpointsManagementList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.get"></a>

```go
func Get(index *f64) FsxOntapStorageVirtualMachineEndpointsManagementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FsxOntapStorageVirtualMachineEndpointsManagementOutputReference <a name="FsxOntapStorageVirtualMachineEndpointsManagementOutputReference" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapstoragevirtualmachine"

fsxontapstoragevirtualmachine.NewFsxOntapStorageVirtualMachineEndpointsManagementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FsxOntapStorageVirtualMachineEndpointsManagementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagement">FsxOntapStorageVirtualMachineEndpointsManagement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxOntapStorageVirtualMachineEndpointsManagement
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagement">FsxOntapStorageVirtualMachineEndpointsManagement</a>

---


### FsxOntapStorageVirtualMachineEndpointsNfsList <a name="FsxOntapStorageVirtualMachineEndpointsNfsList" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapstoragevirtualmachine"

fsxontapstoragevirtualmachine.NewFsxOntapStorageVirtualMachineEndpointsNfsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FsxOntapStorageVirtualMachineEndpointsNfsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.get"></a>

```go
func Get(index *f64) FsxOntapStorageVirtualMachineEndpointsNfsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FsxOntapStorageVirtualMachineEndpointsNfsOutputReference <a name="FsxOntapStorageVirtualMachineEndpointsNfsOutputReference" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapstoragevirtualmachine"

fsxontapstoragevirtualmachine.NewFsxOntapStorageVirtualMachineEndpointsNfsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FsxOntapStorageVirtualMachineEndpointsNfsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfs">FsxOntapStorageVirtualMachineEndpointsNfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxOntapStorageVirtualMachineEndpointsNfs
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfs">FsxOntapStorageVirtualMachineEndpointsNfs</a>

---


### FsxOntapStorageVirtualMachineEndpointsOutputReference <a name="FsxOntapStorageVirtualMachineEndpointsOutputReference" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapstoragevirtualmachine"

fsxontapstoragevirtualmachine.NewFsxOntapStorageVirtualMachineEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FsxOntapStorageVirtualMachineEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.iscsi">Iscsi</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList">FsxOntapStorageVirtualMachineEndpointsIscsiList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.management">Management</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList">FsxOntapStorageVirtualMachineEndpointsManagementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.nfs">Nfs</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList">FsxOntapStorageVirtualMachineEndpointsNfsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.smb">Smb</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList">FsxOntapStorageVirtualMachineEndpointsSmbList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpoints">FsxOntapStorageVirtualMachineEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Iscsi`<sup>Required</sup> <a name="Iscsi" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.iscsi"></a>

```go
func Iscsi() FsxOntapStorageVirtualMachineEndpointsIscsiList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsIscsiList">FsxOntapStorageVirtualMachineEndpointsIscsiList</a>

---

##### `Management`<sup>Required</sup> <a name="Management" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.management"></a>

```go
func Management() FsxOntapStorageVirtualMachineEndpointsManagementList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsManagementList">FsxOntapStorageVirtualMachineEndpointsManagementList</a>

---

##### `Nfs`<sup>Required</sup> <a name="Nfs" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.nfs"></a>

```go
func Nfs() FsxOntapStorageVirtualMachineEndpointsNfsList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsNfsList">FsxOntapStorageVirtualMachineEndpointsNfsList</a>

---

##### `Smb`<sup>Required</sup> <a name="Smb" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.smb"></a>

```go
func Smb() FsxOntapStorageVirtualMachineEndpointsSmbList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList">FsxOntapStorageVirtualMachineEndpointsSmbList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxOntapStorageVirtualMachineEndpoints
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpoints">FsxOntapStorageVirtualMachineEndpoints</a>

---


### FsxOntapStorageVirtualMachineEndpointsSmbList <a name="FsxOntapStorageVirtualMachineEndpointsSmbList" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapstoragevirtualmachine"

fsxontapstoragevirtualmachine.NewFsxOntapStorageVirtualMachineEndpointsSmbList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FsxOntapStorageVirtualMachineEndpointsSmbList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.get"></a>

```go
func Get(index *f64) FsxOntapStorageVirtualMachineEndpointsSmbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FsxOntapStorageVirtualMachineEndpointsSmbOutputReference <a name="FsxOntapStorageVirtualMachineEndpointsSmbOutputReference" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapstoragevirtualmachine"

fsxontapstoragevirtualmachine.NewFsxOntapStorageVirtualMachineEndpointsSmbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FsxOntapStorageVirtualMachineEndpointsSmbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmb">FsxOntapStorageVirtualMachineEndpointsSmb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxOntapStorageVirtualMachineEndpointsSmb
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineEndpointsSmb">FsxOntapStorageVirtualMachineEndpointsSmb</a>

---


### FsxOntapStorageVirtualMachineTimeoutsOutputReference <a name="FsxOntapStorageVirtualMachineTimeoutsOutputReference" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxontapstoragevirtualmachine"

fsxontapstoragevirtualmachine.NewFsxOntapStorageVirtualMachineTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxOntapStorageVirtualMachineTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapStorageVirtualMachine.FsxOntapStorageVirtualMachineTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



