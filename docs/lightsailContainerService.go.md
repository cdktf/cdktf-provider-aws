# `lightsailContainerService` Submodule <a name="`lightsailContainerService` Submodule" id="@cdktf/provider-aws.lightsailContainerService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailContainerService <a name="LightsailContainerService" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service aws_lightsail_container_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsailcontainerservice"

lightsailcontainerservice.NewLightsailContainerService(scope Construct, id *string, config LightsailContainerServiceConfig) LightsailContainerService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig">LightsailContainerServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig">LightsailContainerServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPrivateRegistryAccess">PutPrivateRegistryAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPublicDomainNames">PutPublicDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetIsDisabled">ResetIsDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetPrivateRegistryAccess">ResetPrivateRegistryAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetPublicDomainNames">ResetPublicDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutPrivateRegistryAccess` <a name="PutPrivateRegistryAccess" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPrivateRegistryAccess"></a>

```go
func PutPrivateRegistryAccess(value LightsailContainerServicePrivateRegistryAccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPrivateRegistryAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a>

---

##### `PutPublicDomainNames` <a name="PutPublicDomainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPublicDomainNames"></a>

```go
func PutPublicDomainNames(value LightsailContainerServicePublicDomainNames)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPublicDomainNames.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putTimeouts"></a>

```go
func PutTimeouts(value LightsailContainerServiceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetId"></a>

```go
func ResetId()
```

##### `ResetIsDisabled` <a name="ResetIsDisabled" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetIsDisabled"></a>

```go
func ResetIsDisabled()
```

##### `ResetPrivateRegistryAccess` <a name="ResetPrivateRegistryAccess" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetPrivateRegistryAccess"></a>

```go
func ResetPrivateRegistryAccess()
```

##### `ResetPublicDomainNames` <a name="ResetPublicDomainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetPublicDomainNames"></a>

```go
func ResetPublicDomainNames()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsailcontainerservice"

lightsailcontainerservice.LightsailContainerService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsailcontainerservice"

lightsailcontainerservice.LightsailContainerService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsailcontainerservice"

lightsailcontainerservice.LightsailContainerService_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.powerId">PowerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.principalArn">PrincipalArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateDomainName">PrivateDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateRegistryAccess">PrivateRegistryAccess</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference">LightsailContainerServicePrivateRegistryAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.publicDomainNames">PublicDomainNames</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference">LightsailContainerServicePublicDomainNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference">LightsailContainerServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.isDisabledInput">IsDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.powerInput">PowerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateRegistryAccessInput">PrivateRegistryAccessInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.publicDomainNamesInput">PublicDomainNamesInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.scaleInput">ScaleInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.isDisabled">IsDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.power">Power</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.scale">Scale</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `PowerId`<sup>Required</sup> <a name="PowerId" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.powerId"></a>

```go
func PowerId() *string
```

- *Type:* *string

---

##### `PrincipalArn`<sup>Required</sup> <a name="PrincipalArn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.principalArn"></a>

```go
func PrincipalArn() *string
```

- *Type:* *string

---

##### `PrivateDomainName`<sup>Required</sup> <a name="PrivateDomainName" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateDomainName"></a>

```go
func PrivateDomainName() *string
```

- *Type:* *string

---

##### `PrivateRegistryAccess`<sup>Required</sup> <a name="PrivateRegistryAccess" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateRegistryAccess"></a>

```go
func PrivateRegistryAccess() LightsailContainerServicePrivateRegistryAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference">LightsailContainerServicePrivateRegistryAccessOutputReference</a>

---

##### `PublicDomainNames`<sup>Required</sup> <a name="PublicDomainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.publicDomainNames"></a>

```go
func PublicDomainNames() LightsailContainerServicePublicDomainNamesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference">LightsailContainerServicePublicDomainNamesOutputReference</a>

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.timeouts"></a>

```go
func Timeouts() LightsailContainerServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference">LightsailContainerServiceTimeoutsOutputReference</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsDisabledInput`<sup>Optional</sup> <a name="IsDisabledInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.isDisabledInput"></a>

```go
func IsDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PowerInput`<sup>Optional</sup> <a name="PowerInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.powerInput"></a>

```go
func PowerInput() *string
```

- *Type:* *string

---

##### `PrivateRegistryAccessInput`<sup>Optional</sup> <a name="PrivateRegistryAccessInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateRegistryAccessInput"></a>

```go
func PrivateRegistryAccessInput() LightsailContainerServicePrivateRegistryAccess
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a>

---

##### `PublicDomainNamesInput`<sup>Optional</sup> <a name="PublicDomainNamesInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.publicDomainNamesInput"></a>

```go
func PublicDomainNamesInput() LightsailContainerServicePublicDomainNames
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a>

---

##### `ScaleInput`<sup>Optional</sup> <a name="ScaleInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.scaleInput"></a>

```go
func ScaleInput() *f64
```

- *Type:* *f64

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsDisabled`<sup>Required</sup> <a name="IsDisabled" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.isDisabled"></a>

```go
func IsDisabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Power`<sup>Required</sup> <a name="Power" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.power"></a>

```go
func Power() *string
```

- *Type:* *string

---

##### `Scale`<sup>Required</sup> <a name="Scale" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.scale"></a>

```go
func Scale() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailContainerServiceConfig <a name="LightsailContainerServiceConfig" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsailcontainerservice"

&lightsailcontainerservice.LightsailContainerServiceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Power: *string,
	Scale: *f64,
	Id: *string,
	IsDisabled: interface{},
	PrivateRegistryAccess: github.com/cdktf/cdktf-provider-aws-go/aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess,
	PublicDomainNames: github.com/cdktf/cdktf-provider-aws-go/aws.lightsailContainerService.LightsailContainerServicePublicDomainNames,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.lightsailContainerService.LightsailContainerServiceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#name LightsailContainerService#name}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.power">Power</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#power LightsailContainerService#power}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.scale">Scale</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#scale LightsailContainerService#scale}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#id LightsailContainerService#id}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.isDisabled">IsDisabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#is_disabled LightsailContainerService#is_disabled}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.privateRegistryAccess">PrivateRegistryAccess</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a></code> | private_registry_access block. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.publicDomainNames">PublicDomainNames</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a></code> | public_domain_names block. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags LightsailContainerService#tags}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags_all LightsailContainerService#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#name LightsailContainerService#name}.

---

##### `Power`<sup>Required</sup> <a name="Power" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.power"></a>

```go
Power *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#power LightsailContainerService#power}.

---

##### `Scale`<sup>Required</sup> <a name="Scale" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.scale"></a>

```go
Scale *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#scale LightsailContainerService#scale}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#id LightsailContainerService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsDisabled`<sup>Optional</sup> <a name="IsDisabled" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.isDisabled"></a>

```go
IsDisabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#is_disabled LightsailContainerService#is_disabled}.

---

##### `PrivateRegistryAccess`<sup>Optional</sup> <a name="PrivateRegistryAccess" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.privateRegistryAccess"></a>

```go
PrivateRegistryAccess LightsailContainerServicePrivateRegistryAccess
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a>

private_registry_access block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#private_registry_access LightsailContainerService#private_registry_access}

---

##### `PublicDomainNames`<sup>Optional</sup> <a name="PublicDomainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.publicDomainNames"></a>

```go
PublicDomainNames LightsailContainerServicePublicDomainNames
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a>

public_domain_names block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#public_domain_names LightsailContainerService#public_domain_names}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags LightsailContainerService#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags_all LightsailContainerService#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.timeouts"></a>

```go
Timeouts LightsailContainerServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#timeouts LightsailContainerService#timeouts}

---

### LightsailContainerServicePrivateRegistryAccess <a name="LightsailContainerServicePrivateRegistryAccess" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsailcontainerservice"

&lightsailcontainerservice.LightsailContainerServicePrivateRegistryAccess {
	EcrImagePullerRole: github.com/cdktf/cdktf-provider-aws-go/aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess.property.ecrImagePullerRole">EcrImagePullerRole</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a></code> | ecr_image_puller_role block. |

---

##### `EcrImagePullerRole`<sup>Optional</sup> <a name="EcrImagePullerRole" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess.property.ecrImagePullerRole"></a>

```go
EcrImagePullerRole LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a>

ecr_image_puller_role block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#ecr_image_puller_role LightsailContainerService#ecr_image_puller_role}

---

### LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole <a name="LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsailcontainerservice"

&lightsailcontainerservice.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole {
	IsActive: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole.property.isActive">IsActive</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#is_active LightsailContainerService#is_active}. |

---

##### `IsActive`<sup>Optional</sup> <a name="IsActive" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole.property.isActive"></a>

```go
IsActive interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#is_active LightsailContainerService#is_active}.

---

### LightsailContainerServicePublicDomainNames <a name="LightsailContainerServicePublicDomainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsailcontainerservice"

&lightsailcontainerservice.LightsailContainerServicePublicDomainNames {
	Certificate: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames.property.certificate">Certificate</a></code> | <code>interface{}</code> | certificate block. |

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames.property.certificate"></a>

```go
Certificate interface{}
```

- *Type:* interface{}

certificate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#certificate LightsailContainerService#certificate}

---

### LightsailContainerServicePublicDomainNamesCertificate <a name="LightsailContainerServicePublicDomainNamesCertificate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsailcontainerservice"

&lightsailcontainerservice.LightsailContainerServicePublicDomainNamesCertificate {
	CertificateName: *string,
	DomainNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate.property.certificateName">CertificateName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#certificate_name LightsailContainerService#certificate_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate.property.domainNames">DomainNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#domain_names LightsailContainerService#domain_names}. |

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate.property.certificateName"></a>

```go
CertificateName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#certificate_name LightsailContainerService#certificate_name}.

---

##### `DomainNames`<sup>Required</sup> <a name="DomainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate.property.domainNames"></a>

```go
DomainNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#domain_names LightsailContainerService#domain_names}.

---

### LightsailContainerServiceTimeouts <a name="LightsailContainerServiceTimeouts" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsailcontainerservice"

&lightsailcontainerservice.LightsailContainerServiceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#create LightsailContainerService#create}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#delete LightsailContainerService#delete}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#update LightsailContainerService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#create LightsailContainerService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#delete LightsailContainerService#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#update LightsailContainerService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference <a name="LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsailcontainerservice"

lightsailcontainerservice.NewLightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.resetIsActive">ResetIsActive</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsActive` <a name="ResetIsActive" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.resetIsActive"></a>

```go
func ResetIsActive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.principalArn">PrincipalArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActiveInput">IsActiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActive">IsActive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalArn`<sup>Required</sup> <a name="PrincipalArn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.principalArn"></a>

```go
func PrincipalArn() *string
```

- *Type:* *string

---

##### `IsActiveInput`<sup>Optional</sup> <a name="IsActiveInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActiveInput"></a>

```go
func IsActiveInput() interface{}
```

- *Type:* interface{}

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActive"></a>

```go
func IsActive() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.internalValue"></a>

```go
func InternalValue() LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a>

---


### LightsailContainerServicePrivateRegistryAccessOutputReference <a name="LightsailContainerServicePrivateRegistryAccessOutputReference" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsailcontainerservice"

lightsailcontainerservice.NewLightsailContainerServicePrivateRegistryAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LightsailContainerServicePrivateRegistryAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.putEcrImagePullerRole">PutEcrImagePullerRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.resetEcrImagePullerRole">ResetEcrImagePullerRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEcrImagePullerRole` <a name="PutEcrImagePullerRole" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.putEcrImagePullerRole"></a>

```go
func PutEcrImagePullerRole(value LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.putEcrImagePullerRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a>

---

##### `ResetEcrImagePullerRole` <a name="ResetEcrImagePullerRole" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.resetEcrImagePullerRole"></a>

```go
func ResetEcrImagePullerRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.ecrImagePullerRole">EcrImagePullerRole</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.ecrImagePullerRoleInput">EcrImagePullerRoleInput</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EcrImagePullerRole`<sup>Required</sup> <a name="EcrImagePullerRole" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.ecrImagePullerRole"></a>

```go
func EcrImagePullerRole() LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference</a>

---

##### `EcrImagePullerRoleInput`<sup>Optional</sup> <a name="EcrImagePullerRoleInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.ecrImagePullerRoleInput"></a>

```go
func EcrImagePullerRoleInput() LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() LightsailContainerServicePrivateRegistryAccess
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a>

---


### LightsailContainerServicePublicDomainNamesCertificateList <a name="LightsailContainerServicePublicDomainNamesCertificateList" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsailcontainerservice"

lightsailcontainerservice.NewLightsailContainerServicePublicDomainNamesCertificateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LightsailContainerServicePublicDomainNamesCertificateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.get"></a>

```go
func Get(index *f64) LightsailContainerServicePublicDomainNamesCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailContainerServicePublicDomainNamesCertificateOutputReference <a name="LightsailContainerServicePublicDomainNamesCertificateOutputReference" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsailcontainerservice"

lightsailcontainerservice.NewLightsailContainerServicePublicDomainNamesCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LightsailContainerServicePublicDomainNamesCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.certificateNameInput">CertificateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.domainNamesInput">DomainNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.certificateName">CertificateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.domainNames">DomainNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateNameInput`<sup>Optional</sup> <a name="CertificateNameInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.certificateNameInput"></a>

```go
func CertificateNameInput() *string
```

- *Type:* *string

---

##### `DomainNamesInput`<sup>Optional</sup> <a name="DomainNamesInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.domainNamesInput"></a>

```go
func DomainNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.certificateName"></a>

```go
func CertificateName() *string
```

- *Type:* *string

---

##### `DomainNames`<sup>Required</sup> <a name="DomainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.domainNames"></a>

```go
func DomainNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailContainerServicePublicDomainNamesOutputReference <a name="LightsailContainerServicePublicDomainNamesOutputReference" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsailcontainerservice"

lightsailcontainerservice.NewLightsailContainerServicePublicDomainNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LightsailContainerServicePublicDomainNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.putCertificate">PutCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertificate` <a name="PutCertificate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.putCertificate"></a>

```go
func PutCertificate(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.putCertificate.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList">LightsailContainerServicePublicDomainNamesCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.certificateInput">CertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.certificate"></a>

```go
func Certificate() LightsailContainerServicePublicDomainNamesCertificateList
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList">LightsailContainerServicePublicDomainNamesCertificateList</a>

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.certificateInput"></a>

```go
func CertificateInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() LightsailContainerServicePublicDomainNames
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a>

---


### LightsailContainerServiceTimeoutsOutputReference <a name="LightsailContainerServiceTimeoutsOutputReference" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lightsailcontainerservice"

lightsailcontainerservice.NewLightsailContainerServiceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LightsailContainerServiceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



