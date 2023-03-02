# `defaultVpcDhcpOptions` Submodule <a name="`defaultVpcDhcpOptions` Submodule" id="@cdktf/provider-aws.defaultVpcDhcpOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultVpcDhcpOptions <a name="DefaultVpcDhcpOptions" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options aws_default_vpc_dhcp_options}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/defaultvpcdhcpoptions"

defaultvpcdhcpoptions.NewDefaultVpcDhcpOptions(scope Construct, id *string, config DefaultVpcDhcpOptionsConfig) DefaultVpcDhcpOptions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig">DefaultVpcDhcpOptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig">DefaultVpcDhcpOptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetOwnerId">ResetOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetId"></a>

```go
func ResetId()
```

##### `ResetOwnerId` <a name="ResetOwnerId" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetOwnerId"></a>

```go
func ResetOwnerId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/defaultvpcdhcpoptions"

defaultvpcdhcpoptions.DefaultVpcDhcpOptions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/defaultvpcdhcpoptions"

defaultvpcdhcpoptions.DefaultVpcDhcpOptions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/defaultvpcdhcpoptions"

defaultvpcdhcpoptions.DefaultVpcDhcpOptions_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.domainNameServers">DomainNameServers</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.netbiosNameServers">NetbiosNameServers</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.netbiosNodeType">NetbiosNodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ntpServers">NtpServers</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ownerIdInput">OwnerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `DomainNameServers`<sup>Required</sup> <a name="DomainNameServers" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.domainNameServers"></a>

```go
func DomainNameServers() *string
```

- *Type:* *string

---

##### `NetbiosNameServers`<sup>Required</sup> <a name="NetbiosNameServers" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.netbiosNameServers"></a>

```go
func NetbiosNameServers() *string
```

- *Type:* *string

---

##### `NetbiosNodeType`<sup>Required</sup> <a name="NetbiosNodeType" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.netbiosNodeType"></a>

```go
func NetbiosNodeType() *string
```

- *Type:* *string

---

##### `NtpServers`<sup>Required</sup> <a name="NtpServers" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ntpServers"></a>

```go
func NtpServers() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OwnerIdInput`<sup>Optional</sup> <a name="OwnerIdInput" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ownerIdInput"></a>

```go
func OwnerIdInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultVpcDhcpOptionsConfig <a name="DefaultVpcDhcpOptionsConfig" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/defaultvpcdhcpoptions"

&defaultvpcdhcpoptions.DefaultVpcDhcpOptionsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	OwnerId: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options#id DefaultVpcDhcpOptions#id}. |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.ownerId">OwnerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options#owner_id DefaultVpcDhcpOptions#owner_id}. |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options#tags DefaultVpcDhcpOptions#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options#tags_all DefaultVpcDhcpOptions#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options#id DefaultVpcDhcpOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OwnerId`<sup>Optional</sup> <a name="OwnerId" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.ownerId"></a>

```go
OwnerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options#owner_id DefaultVpcDhcpOptions#owner_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options#tags DefaultVpcDhcpOptions#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.defaultVpcDhcpOptions.DefaultVpcDhcpOptionsConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options#tags_all DefaultVpcDhcpOptions#tags_all}.

---



