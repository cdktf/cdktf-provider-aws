# `opsworksStack` Submodule <a name="`opsworksStack` Submodule" id="@cdktf/provider-aws.opsworksStack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksStack <a name="OpsworksStack" id="@cdktf/provider-aws.opsworksStack.OpsworksStack"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack aws_opsworks_stack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksstack"

opsworksstack.NewOpsworksStack(scope Construct, id *string, config OpsworksStackConfig) OpsworksStack
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig">OpsworksStackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig">OpsworksStackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.putCustomCookbooksSource">PutCustomCookbooksSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetAgentVersion">ResetAgentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetBerkshelfVersion">ResetBerkshelfVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetColor">ResetColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetConfigurationManagerName">ResetConfigurationManagerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetConfigurationManagerVersion">ResetConfigurationManagerVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetCustomCookbooksSource">ResetCustomCookbooksSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetCustomJson">ResetCustomJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultAvailabilityZone">ResetDefaultAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultOs">ResetDefaultOs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultRootDeviceType">ResetDefaultRootDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultSshKeyName">ResetDefaultSshKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultSubnetId">ResetDefaultSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetHostnameTheme">ResetHostnameTheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetManageBerkshelf">ResetManageBerkshelf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetUseCustomCookbooks">ResetUseCustomCookbooks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetUseOpsworksSecurityGroups">ResetUseOpsworksSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCustomCookbooksSource` <a name="PutCustomCookbooksSource" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.putCustomCookbooksSource"></a>

```go
func PutCustomCookbooksSource(value OpsworksStackCustomCookbooksSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.putCustomCookbooksSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.putTimeouts"></a>

```go
func PutTimeouts(value OpsworksStackTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a>

---

##### `ResetAgentVersion` <a name="ResetAgentVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetAgentVersion"></a>

```go
func ResetAgentVersion()
```

##### `ResetBerkshelfVersion` <a name="ResetBerkshelfVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetBerkshelfVersion"></a>

```go
func ResetBerkshelfVersion()
```

##### `ResetColor` <a name="ResetColor" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetColor"></a>

```go
func ResetColor()
```

##### `ResetConfigurationManagerName` <a name="ResetConfigurationManagerName" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetConfigurationManagerName"></a>

```go
func ResetConfigurationManagerName()
```

##### `ResetConfigurationManagerVersion` <a name="ResetConfigurationManagerVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetConfigurationManagerVersion"></a>

```go
func ResetConfigurationManagerVersion()
```

##### `ResetCustomCookbooksSource` <a name="ResetCustomCookbooksSource" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetCustomCookbooksSource"></a>

```go
func ResetCustomCookbooksSource()
```

##### `ResetCustomJson` <a name="ResetCustomJson" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetCustomJson"></a>

```go
func ResetCustomJson()
```

##### `ResetDefaultAvailabilityZone` <a name="ResetDefaultAvailabilityZone" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultAvailabilityZone"></a>

```go
func ResetDefaultAvailabilityZone()
```

##### `ResetDefaultOs` <a name="ResetDefaultOs" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultOs"></a>

```go
func ResetDefaultOs()
```

##### `ResetDefaultRootDeviceType` <a name="ResetDefaultRootDeviceType" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultRootDeviceType"></a>

```go
func ResetDefaultRootDeviceType()
```

##### `ResetDefaultSshKeyName` <a name="ResetDefaultSshKeyName" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultSshKeyName"></a>

```go
func ResetDefaultSshKeyName()
```

##### `ResetDefaultSubnetId` <a name="ResetDefaultSubnetId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultSubnetId"></a>

```go
func ResetDefaultSubnetId()
```

##### `ResetHostnameTheme` <a name="ResetHostnameTheme" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetHostnameTheme"></a>

```go
func ResetHostnameTheme()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetId"></a>

```go
func ResetId()
```

##### `ResetManageBerkshelf` <a name="ResetManageBerkshelf" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetManageBerkshelf"></a>

```go
func ResetManageBerkshelf()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUseCustomCookbooks` <a name="ResetUseCustomCookbooks" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetUseCustomCookbooks"></a>

```go
func ResetUseCustomCookbooks()
```

##### `ResetUseOpsworksSecurityGroups` <a name="ResetUseOpsworksSecurityGroups" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetUseOpsworksSecurityGroups"></a>

```go
func ResetUseOpsworksSecurityGroups()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetVpcId"></a>

```go
func ResetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksstack"

opsworksstack.OpsworksStack_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksstack"

opsworksstack.OpsworksStack_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksstack"

opsworksstack.OpsworksStack_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customCookbooksSource">CustomCookbooksSource</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference">OpsworksStackCustomCookbooksSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.stackEndpoint">StackEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference">OpsworksStackTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.agentVersionInput">AgentVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.berkshelfVersionInput">BerkshelfVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.colorInput">ColorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerNameInput">ConfigurationManagerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerVersionInput">ConfigurationManagerVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customCookbooksSourceInput">CustomCookbooksSourceInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customJsonInput">CustomJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultAvailabilityZoneInput">DefaultAvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultInstanceProfileArnInput">DefaultInstanceProfileArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultOsInput">DefaultOsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultRootDeviceTypeInput">DefaultRootDeviceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSshKeyNameInput">DefaultSshKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSubnetIdInput">DefaultSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.hostnameThemeInput">HostnameThemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.manageBerkshelfInput">ManageBerkshelfInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.serviceRoleArnInput">ServiceRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useCustomCookbooksInput">UseCustomCookbooksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useOpsworksSecurityGroupsInput">UseOpsworksSecurityGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.agentVersion">AgentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.berkshelfVersion">BerkshelfVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.color">Color</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerName">ConfigurationManagerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerVersion">ConfigurationManagerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customJson">CustomJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultAvailabilityZone">DefaultAvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultInstanceProfileArn">DefaultInstanceProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultOs">DefaultOs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultRootDeviceType">DefaultRootDeviceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSshKeyName">DefaultSshKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSubnetId">DefaultSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.hostnameTheme">HostnameTheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.manageBerkshelf">ManageBerkshelf</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.serviceRoleArn">ServiceRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useCustomCookbooks">UseCustomCookbooks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useOpsworksSecurityGroups">UseOpsworksSecurityGroups</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CustomCookbooksSource`<sup>Required</sup> <a name="CustomCookbooksSource" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customCookbooksSource"></a>

```go
func CustomCookbooksSource() OpsworksStackCustomCookbooksSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference">OpsworksStackCustomCookbooksSourceOutputReference</a>

---

##### `StackEndpoint`<sup>Required</sup> <a name="StackEndpoint" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.stackEndpoint"></a>

```go
func StackEndpoint() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.timeouts"></a>

```go
func Timeouts() OpsworksStackTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference">OpsworksStackTimeoutsOutputReference</a>

---

##### `AgentVersionInput`<sup>Optional</sup> <a name="AgentVersionInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.agentVersionInput"></a>

```go
func AgentVersionInput() *string
```

- *Type:* *string

---

##### `BerkshelfVersionInput`<sup>Optional</sup> <a name="BerkshelfVersionInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.berkshelfVersionInput"></a>

```go
func BerkshelfVersionInput() *string
```

- *Type:* *string

---

##### `ColorInput`<sup>Optional</sup> <a name="ColorInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.colorInput"></a>

```go
func ColorInput() *string
```

- *Type:* *string

---

##### `ConfigurationManagerNameInput`<sup>Optional</sup> <a name="ConfigurationManagerNameInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerNameInput"></a>

```go
func ConfigurationManagerNameInput() *string
```

- *Type:* *string

---

##### `ConfigurationManagerVersionInput`<sup>Optional</sup> <a name="ConfigurationManagerVersionInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerVersionInput"></a>

```go
func ConfigurationManagerVersionInput() *string
```

- *Type:* *string

---

##### `CustomCookbooksSourceInput`<sup>Optional</sup> <a name="CustomCookbooksSourceInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customCookbooksSourceInput"></a>

```go
func CustomCookbooksSourceInput() OpsworksStackCustomCookbooksSource
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>

---

##### `CustomJsonInput`<sup>Optional</sup> <a name="CustomJsonInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customJsonInput"></a>

```go
func CustomJsonInput() *string
```

- *Type:* *string

---

##### `DefaultAvailabilityZoneInput`<sup>Optional</sup> <a name="DefaultAvailabilityZoneInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultAvailabilityZoneInput"></a>

```go
func DefaultAvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `DefaultInstanceProfileArnInput`<sup>Optional</sup> <a name="DefaultInstanceProfileArnInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultInstanceProfileArnInput"></a>

```go
func DefaultInstanceProfileArnInput() *string
```

- *Type:* *string

---

##### `DefaultOsInput`<sup>Optional</sup> <a name="DefaultOsInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultOsInput"></a>

```go
func DefaultOsInput() *string
```

- *Type:* *string

---

##### `DefaultRootDeviceTypeInput`<sup>Optional</sup> <a name="DefaultRootDeviceTypeInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultRootDeviceTypeInput"></a>

```go
func DefaultRootDeviceTypeInput() *string
```

- *Type:* *string

---

##### `DefaultSshKeyNameInput`<sup>Optional</sup> <a name="DefaultSshKeyNameInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSshKeyNameInput"></a>

```go
func DefaultSshKeyNameInput() *string
```

- *Type:* *string

---

##### `DefaultSubnetIdInput`<sup>Optional</sup> <a name="DefaultSubnetIdInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSubnetIdInput"></a>

```go
func DefaultSubnetIdInput() *string
```

- *Type:* *string

---

##### `HostnameThemeInput`<sup>Optional</sup> <a name="HostnameThemeInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.hostnameThemeInput"></a>

```go
func HostnameThemeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManageBerkshelfInput`<sup>Optional</sup> <a name="ManageBerkshelfInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.manageBerkshelfInput"></a>

```go
func ManageBerkshelfInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServiceRoleArnInput`<sup>Optional</sup> <a name="ServiceRoleArnInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.serviceRoleArnInput"></a>

```go
func ServiceRoleArnInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UseCustomCookbooksInput`<sup>Optional</sup> <a name="UseCustomCookbooksInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useCustomCookbooksInput"></a>

```go
func UseCustomCookbooksInput() interface{}
```

- *Type:* interface{}

---

##### `UseOpsworksSecurityGroupsInput`<sup>Optional</sup> <a name="UseOpsworksSecurityGroupsInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useOpsworksSecurityGroupsInput"></a>

```go
func UseOpsworksSecurityGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `AgentVersion`<sup>Required</sup> <a name="AgentVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.agentVersion"></a>

```go
func AgentVersion() *string
```

- *Type:* *string

---

##### `BerkshelfVersion`<sup>Required</sup> <a name="BerkshelfVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.berkshelfVersion"></a>

```go
func BerkshelfVersion() *string
```

- *Type:* *string

---

##### `Color`<sup>Required</sup> <a name="Color" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.color"></a>

```go
func Color() *string
```

- *Type:* *string

---

##### `ConfigurationManagerName`<sup>Required</sup> <a name="ConfigurationManagerName" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerName"></a>

```go
func ConfigurationManagerName() *string
```

- *Type:* *string

---

##### `ConfigurationManagerVersion`<sup>Required</sup> <a name="ConfigurationManagerVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerVersion"></a>

```go
func ConfigurationManagerVersion() *string
```

- *Type:* *string

---

##### `CustomJson`<sup>Required</sup> <a name="CustomJson" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customJson"></a>

```go
func CustomJson() *string
```

- *Type:* *string

---

##### `DefaultAvailabilityZone`<sup>Required</sup> <a name="DefaultAvailabilityZone" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultAvailabilityZone"></a>

```go
func DefaultAvailabilityZone() *string
```

- *Type:* *string

---

##### `DefaultInstanceProfileArn`<sup>Required</sup> <a name="DefaultInstanceProfileArn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultInstanceProfileArn"></a>

```go
func DefaultInstanceProfileArn() *string
```

- *Type:* *string

---

##### `DefaultOs`<sup>Required</sup> <a name="DefaultOs" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultOs"></a>

```go
func DefaultOs() *string
```

- *Type:* *string

---

##### `DefaultRootDeviceType`<sup>Required</sup> <a name="DefaultRootDeviceType" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultRootDeviceType"></a>

```go
func DefaultRootDeviceType() *string
```

- *Type:* *string

---

##### `DefaultSshKeyName`<sup>Required</sup> <a name="DefaultSshKeyName" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSshKeyName"></a>

```go
func DefaultSshKeyName() *string
```

- *Type:* *string

---

##### `DefaultSubnetId`<sup>Required</sup> <a name="DefaultSubnetId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSubnetId"></a>

```go
func DefaultSubnetId() *string
```

- *Type:* *string

---

##### `HostnameTheme`<sup>Required</sup> <a name="HostnameTheme" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.hostnameTheme"></a>

```go
func HostnameTheme() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManageBerkshelf`<sup>Required</sup> <a name="ManageBerkshelf" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.manageBerkshelf"></a>

```go
func ManageBerkshelf() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ServiceRoleArn`<sup>Required</sup> <a name="ServiceRoleArn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.serviceRoleArn"></a>

```go
func ServiceRoleArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UseCustomCookbooks`<sup>Required</sup> <a name="UseCustomCookbooks" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useCustomCookbooks"></a>

```go
func UseCustomCookbooks() interface{}
```

- *Type:* interface{}

---

##### `UseOpsworksSecurityGroups`<sup>Required</sup> <a name="UseOpsworksSecurityGroups" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useOpsworksSecurityGroups"></a>

```go
func UseOpsworksSecurityGroups() interface{}
```

- *Type:* interface{}

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksStackConfig <a name="OpsworksStackConfig" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksstack"

&opsworksstack.OpsworksStackConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DefaultInstanceProfileArn: *string,
	Name: *string,
	Region: *string,
	ServiceRoleArn: *string,
	AgentVersion: *string,
	BerkshelfVersion: *string,
	Color: *string,
	ConfigurationManagerName: *string,
	ConfigurationManagerVersion: *string,
	CustomCookbooksSource: github.com/cdktf/cdktf-provider-aws-go/aws.opsworksStack.OpsworksStackCustomCookbooksSource,
	CustomJson: *string,
	DefaultAvailabilityZone: *string,
	DefaultOs: *string,
	DefaultRootDeviceType: *string,
	DefaultSshKeyName: *string,
	DefaultSubnetId: *string,
	HostnameTheme: *string,
	Id: *string,
	ManageBerkshelf: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.opsworksStack.OpsworksStackTimeouts,
	UseCustomCookbooks: interface{},
	UseOpsworksSecurityGroups: interface{},
	VpcId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultInstanceProfileArn">DefaultInstanceProfileArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_instance_profile_arn OpsworksStack#default_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#name OpsworksStack#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#region OpsworksStack#region}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.serviceRoleArn">ServiceRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#service_role_arn OpsworksStack#service_role_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.agentVersion">AgentVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#agent_version OpsworksStack#agent_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.berkshelfVersion">BerkshelfVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#berkshelf_version OpsworksStack#berkshelf_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.color">Color</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#color OpsworksStack#color}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.configurationManagerName">ConfigurationManagerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_name OpsworksStack#configuration_manager_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.configurationManagerVersion">ConfigurationManagerVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_version OpsworksStack#configuration_manager_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.customCookbooksSource">CustomCookbooksSource</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a></code> | custom_cookbooks_source block. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.customJson">CustomJson</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#custom_json OpsworksStack#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultAvailabilityZone">DefaultAvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_availability_zone OpsworksStack#default_availability_zone}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultOs">DefaultOs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_os OpsworksStack#default_os}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultRootDeviceType">DefaultRootDeviceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_root_device_type OpsworksStack#default_root_device_type}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultSshKeyName">DefaultSshKeyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_ssh_key_name OpsworksStack#default_ssh_key_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultSubnetId">DefaultSubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_subnet_id OpsworksStack#default_subnet_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.hostnameTheme">HostnameTheme</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#hostname_theme OpsworksStack#hostname_theme}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#id OpsworksStack#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.manageBerkshelf">ManageBerkshelf</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#manage_berkshelf OpsworksStack#manage_berkshelf}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags OpsworksStack#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags_all OpsworksStack#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.useCustomCookbooks">UseCustomCookbooks</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_custom_cookbooks OpsworksStack#use_custom_cookbooks}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.useOpsworksSecurityGroups">UseOpsworksSecurityGroups</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_opsworks_security_groups OpsworksStack#use_opsworks_security_groups}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#vpc_id OpsworksStack#vpc_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultInstanceProfileArn`<sup>Required</sup> <a name="DefaultInstanceProfileArn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultInstanceProfileArn"></a>

```go
DefaultInstanceProfileArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_instance_profile_arn OpsworksStack#default_instance_profile_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#name OpsworksStack#name}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#region OpsworksStack#region}.

---

##### `ServiceRoleArn`<sup>Required</sup> <a name="ServiceRoleArn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.serviceRoleArn"></a>

```go
ServiceRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#service_role_arn OpsworksStack#service_role_arn}.

---

##### `AgentVersion`<sup>Optional</sup> <a name="AgentVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.agentVersion"></a>

```go
AgentVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#agent_version OpsworksStack#agent_version}.

---

##### `BerkshelfVersion`<sup>Optional</sup> <a name="BerkshelfVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.berkshelfVersion"></a>

```go
BerkshelfVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#berkshelf_version OpsworksStack#berkshelf_version}.

---

##### `Color`<sup>Optional</sup> <a name="Color" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.color"></a>

```go
Color *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#color OpsworksStack#color}.

---

##### `ConfigurationManagerName`<sup>Optional</sup> <a name="ConfigurationManagerName" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.configurationManagerName"></a>

```go
ConfigurationManagerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_name OpsworksStack#configuration_manager_name}.

---

##### `ConfigurationManagerVersion`<sup>Optional</sup> <a name="ConfigurationManagerVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.configurationManagerVersion"></a>

```go
ConfigurationManagerVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_version OpsworksStack#configuration_manager_version}.

---

##### `CustomCookbooksSource`<sup>Optional</sup> <a name="CustomCookbooksSource" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.customCookbooksSource"></a>

```go
CustomCookbooksSource OpsworksStackCustomCookbooksSource
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>

custom_cookbooks_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#custom_cookbooks_source OpsworksStack#custom_cookbooks_source}

---

##### `CustomJson`<sup>Optional</sup> <a name="CustomJson" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.customJson"></a>

```go
CustomJson *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#custom_json OpsworksStack#custom_json}.

---

##### `DefaultAvailabilityZone`<sup>Optional</sup> <a name="DefaultAvailabilityZone" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultAvailabilityZone"></a>

```go
DefaultAvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_availability_zone OpsworksStack#default_availability_zone}.

---

##### `DefaultOs`<sup>Optional</sup> <a name="DefaultOs" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultOs"></a>

```go
DefaultOs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_os OpsworksStack#default_os}.

---

##### `DefaultRootDeviceType`<sup>Optional</sup> <a name="DefaultRootDeviceType" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultRootDeviceType"></a>

```go
DefaultRootDeviceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_root_device_type OpsworksStack#default_root_device_type}.

---

##### `DefaultSshKeyName`<sup>Optional</sup> <a name="DefaultSshKeyName" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultSshKeyName"></a>

```go
DefaultSshKeyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_ssh_key_name OpsworksStack#default_ssh_key_name}.

---

##### `DefaultSubnetId`<sup>Optional</sup> <a name="DefaultSubnetId" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultSubnetId"></a>

```go
DefaultSubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_subnet_id OpsworksStack#default_subnet_id}.

---

##### `HostnameTheme`<sup>Optional</sup> <a name="HostnameTheme" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.hostnameTheme"></a>

```go
HostnameTheme *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#hostname_theme OpsworksStack#hostname_theme}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#id OpsworksStack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManageBerkshelf`<sup>Optional</sup> <a name="ManageBerkshelf" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.manageBerkshelf"></a>

```go
ManageBerkshelf interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#manage_berkshelf OpsworksStack#manage_berkshelf}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags OpsworksStack#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags_all OpsworksStack#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.timeouts"></a>

```go
Timeouts OpsworksStackTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#timeouts OpsworksStack#timeouts}

---

##### `UseCustomCookbooks`<sup>Optional</sup> <a name="UseCustomCookbooks" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.useCustomCookbooks"></a>

```go
UseCustomCookbooks interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_custom_cookbooks OpsworksStack#use_custom_cookbooks}.

---

##### `UseOpsworksSecurityGroups`<sup>Optional</sup> <a name="UseOpsworksSecurityGroups" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.useOpsworksSecurityGroups"></a>

```go
UseOpsworksSecurityGroups interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_opsworks_security_groups OpsworksStack#use_opsworks_security_groups}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#vpc_id OpsworksStack#vpc_id}.

---

### OpsworksStackCustomCookbooksSource <a name="OpsworksStackCustomCookbooksSource" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksstack"

&opsworksstack.OpsworksStackCustomCookbooksSource {
	Type: *string,
	Url: *string,
	Password: *string,
	Revision: *string,
	SshKey: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#type OpsworksStack#type}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#url OpsworksStack#url}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#password OpsworksStack#password}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.revision">Revision</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#revision OpsworksStack#revision}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.sshKey">SshKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#ssh_key OpsworksStack#ssh_key}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#username OpsworksStack#username}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#type OpsworksStack#type}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#url OpsworksStack#url}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#password OpsworksStack#password}.

---

##### `Revision`<sup>Optional</sup> <a name="Revision" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.revision"></a>

```go
Revision *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#revision OpsworksStack#revision}.

---

##### `SshKey`<sup>Optional</sup> <a name="SshKey" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.sshKey"></a>

```go
SshKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#ssh_key OpsworksStack#ssh_key}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#username OpsworksStack#username}.

---

### OpsworksStackTimeouts <a name="OpsworksStackTimeouts" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksstack"

&opsworksstack.OpsworksStackTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#create OpsworksStack#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#create OpsworksStack#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksStackCustomCookbooksSourceOutputReference <a name="OpsworksStackCustomCookbooksSourceOutputReference" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksstack"

opsworksstack.NewOpsworksStackCustomCookbooksSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsworksStackCustomCookbooksSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetRevision">ResetRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetSshKey">ResetSshKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetRevision` <a name="ResetRevision" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetRevision"></a>

```go
func ResetRevision()
```

##### `ResetSshKey` <a name="ResetSshKey" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetSshKey"></a>

```go
func ResetSshKey()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.revisionInput">RevisionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.sshKeyInput">SshKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.revision">Revision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.sshKey">SshKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.revisionInput"></a>

```go
func RevisionInput() *string
```

- *Type:* *string

---

##### `SshKeyInput`<sup>Optional</sup> <a name="SshKeyInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.sshKeyInput"></a>

```go
func SshKeyInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.revision"></a>

```go
func Revision() *string
```

- *Type:* *string

---

##### `SshKey`<sup>Required</sup> <a name="SshKey" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.sshKey"></a>

```go
func SshKey() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() OpsworksStackCustomCookbooksSource
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>

---


### OpsworksStackTimeoutsOutputReference <a name="OpsworksStackTimeoutsOutputReference" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworksstack"

opsworksstack.NewOpsworksStackTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsworksStackTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



