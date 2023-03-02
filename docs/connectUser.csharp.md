# `connectUser` Submodule <a name="`connectUser` Submodule" id="@cdktf/provider-aws.connectUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectUser <a name="ConnectUser" id="@cdktf/provider-aws.connectUser.ConnectUser"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_user aws_connect_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectUser(Construct Scope, string Id, ConnectUserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig">ConnectUserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig">ConnectUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.putIdentityInfo">PutIdentityInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.putPhoneConfig">PutPhoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.resetDirectoryUserId">ResetDirectoryUserId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.resetHierarchyGroupId">ResetHierarchyGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.resetIdentityInfo">ResetIdentityInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUser.ConnectUser.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.connectUser.ConnectUser.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.connectUser.ConnectUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.connectUser.ConnectUser.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.connectUser.ConnectUser.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.connectUser.ConnectUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.connectUser.ConnectUser.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.connectUser.ConnectUser.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.connectUser.ConnectUser.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutIdentityInfo` <a name="PutIdentityInfo" id="@cdktf/provider-aws.connectUser.ConnectUser.putIdentityInfo"></a>

```csharp
private void PutIdentityInfo(ConnectUserIdentityInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.connectUser.ConnectUser.putIdentityInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

---

##### `PutPhoneConfig` <a name="PutPhoneConfig" id="@cdktf/provider-aws.connectUser.ConnectUser.putPhoneConfig"></a>

```csharp
private void PutPhoneConfig(ConnectUserPhoneConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.connectUser.ConnectUser.putPhoneConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

---

##### `ResetDirectoryUserId` <a name="ResetDirectoryUserId" id="@cdktf/provider-aws.connectUser.ConnectUser.resetDirectoryUserId"></a>

```csharp
private void ResetDirectoryUserId()
```

##### `ResetHierarchyGroupId` <a name="ResetHierarchyGroupId" id="@cdktf/provider-aws.connectUser.ConnectUser.resetHierarchyGroupId"></a>

```csharp
private void ResetHierarchyGroupId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.connectUser.ConnectUser.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityInfo` <a name="ResetIdentityInfo" id="@cdktf/provider-aws.connectUser.ConnectUser.resetIdentityInfo"></a>

```csharp
private void ResetIdentityInfo()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-aws.connectUser.ConnectUser.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.connectUser.ConnectUser.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.connectUser.ConnectUser.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.connectUser.ConnectUser.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConnectUser.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.connectUser.ConnectUser.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.connectUser.ConnectUser.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConnectUser.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.connectUser.ConnectUser.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.connectUser.ConnectUser.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConnectUser.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.connectUser.ConnectUser.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.identityInfo">IdentityInfo</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference">ConnectUserIdentityInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.phoneConfig">PhoneConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference">ConnectUserPhoneConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.directoryUserIdInput">DirectoryUserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.hierarchyGroupIdInput">HierarchyGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.identityInfoInput">IdentityInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.phoneConfigInput">PhoneConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.routingProfileIdInput">RoutingProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.securityProfileIdsInput">SecurityProfileIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.directoryUserId">DirectoryUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.hierarchyGroupId">HierarchyGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.routingProfileId">RoutingProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.securityProfileIds">SecurityProfileIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.connectUser.ConnectUser.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.connectUser.ConnectUser.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUser.ConnectUser.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.connectUser.ConnectUser.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.connectUser.ConnectUser.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.connectUser.ConnectUser.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.connectUser.ConnectUser.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.connectUser.ConnectUser.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.connectUser.ConnectUser.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.connectUser.ConnectUser.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.connectUser.ConnectUser.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.connectUser.ConnectUser.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.connectUser.ConnectUser.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.connectUser.ConnectUser.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.connectUser.ConnectUser.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `IdentityInfo`<sup>Required</sup> <a name="IdentityInfo" id="@cdktf/provider-aws.connectUser.ConnectUser.property.identityInfo"></a>

```csharp
public ConnectUserIdentityInfoOutputReference IdentityInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference">ConnectUserIdentityInfoOutputReference</a>

---

##### `PhoneConfig`<sup>Required</sup> <a name="PhoneConfig" id="@cdktf/provider-aws.connectUser.ConnectUser.property.phoneConfig"></a>

```csharp
public ConnectUserPhoneConfigOutputReference PhoneConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference">ConnectUserPhoneConfigOutputReference</a>

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-aws.connectUser.ConnectUser.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `DirectoryUserIdInput`<sup>Optional</sup> <a name="DirectoryUserIdInput" id="@cdktf/provider-aws.connectUser.ConnectUser.property.directoryUserIdInput"></a>

```csharp
public string DirectoryUserIdInput { get; }
```

- *Type:* string

---

##### `HierarchyGroupIdInput`<sup>Optional</sup> <a name="HierarchyGroupIdInput" id="@cdktf/provider-aws.connectUser.ConnectUser.property.hierarchyGroupIdInput"></a>

```csharp
public string HierarchyGroupIdInput { get; }
```

- *Type:* string

---

##### `IdentityInfoInput`<sup>Optional</sup> <a name="IdentityInfoInput" id="@cdktf/provider-aws.connectUser.ConnectUser.property.identityInfoInput"></a>

```csharp
public ConnectUserIdentityInfo IdentityInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.connectUser.ConnectUser.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-aws.connectUser.ConnectUser.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.connectUser.ConnectUser.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-aws.connectUser.ConnectUser.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PhoneConfigInput`<sup>Optional</sup> <a name="PhoneConfigInput" id="@cdktf/provider-aws.connectUser.ConnectUser.property.phoneConfigInput"></a>

```csharp
public ConnectUserPhoneConfig PhoneConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

---

##### `RoutingProfileIdInput`<sup>Optional</sup> <a name="RoutingProfileIdInput" id="@cdktf/provider-aws.connectUser.ConnectUser.property.routingProfileIdInput"></a>

```csharp
public string RoutingProfileIdInput { get; }
```

- *Type:* string

---

##### `SecurityProfileIdsInput`<sup>Optional</sup> <a name="SecurityProfileIdsInput" id="@cdktf/provider-aws.connectUser.ConnectUser.property.securityProfileIdsInput"></a>

```csharp
public string[] SecurityProfileIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.connectUser.ConnectUser.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.connectUser.ConnectUser.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DirectoryUserId`<sup>Required</sup> <a name="DirectoryUserId" id="@cdktf/provider-aws.connectUser.ConnectUser.property.directoryUserId"></a>

```csharp
public string DirectoryUserId { get; }
```

- *Type:* string

---

##### `HierarchyGroupId`<sup>Required</sup> <a name="HierarchyGroupId" id="@cdktf/provider-aws.connectUser.ConnectUser.property.hierarchyGroupId"></a>

```csharp
public string HierarchyGroupId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.connectUser.ConnectUser.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.connectUser.ConnectUser.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectUser.ConnectUser.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.connectUser.ConnectUser.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `RoutingProfileId`<sup>Required</sup> <a name="RoutingProfileId" id="@cdktf/provider-aws.connectUser.ConnectUser.property.routingProfileId"></a>

```csharp
public string RoutingProfileId { get; }
```

- *Type:* string

---

##### `SecurityProfileIds`<sup>Required</sup> <a name="SecurityProfileIds" id="@cdktf/provider-aws.connectUser.ConnectUser.property.securityProfileIds"></a>

```csharp
public string[] SecurityProfileIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.connectUser.ConnectUser.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.connectUser.ConnectUser.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.connectUser.ConnectUser.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectUserConfig <a name="ConnectUserConfig" id="@cdktf/provider-aws.connectUser.ConnectUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectUserConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InstanceId,
    string Name,
    ConnectUserPhoneConfig PhoneConfig,
    string RoutingProfileId,
    string[] SecurityProfileIds,
    string DirectoryUserId = null,
    string HierarchyGroupId = null,
    string Id = null,
    ConnectUserIdentityInfo IdentityInfo = null,
    string Password = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#instance_id ConnectUser#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#name ConnectUser#name}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.phoneConfig">PhoneConfig</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a></code> | phone_config block. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.routingProfileId">RoutingProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#routing_profile_id ConnectUser#routing_profile_id}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.securityProfileIds">SecurityProfileIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#security_profile_ids ConnectUser#security_profile_ids}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.directoryUserId">DirectoryUserId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#directory_user_id ConnectUser#directory_user_id}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.hierarchyGroupId">HierarchyGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#hierarchy_group_id ConnectUser#hierarchy_group_id}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#id ConnectUser#id}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.identityInfo">IdentityInfo</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a></code> | identity_info block. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#password ConnectUser#password}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#tags ConnectUser#tags}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#tags_all ConnectUser#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#instance_id ConnectUser#instance_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#name ConnectUser#name}.

---

##### `PhoneConfig`<sup>Required</sup> <a name="PhoneConfig" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.phoneConfig"></a>

```csharp
public ConnectUserPhoneConfig PhoneConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

phone_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#phone_config ConnectUser#phone_config}

---

##### `RoutingProfileId`<sup>Required</sup> <a name="RoutingProfileId" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.routingProfileId"></a>

```csharp
public string RoutingProfileId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#routing_profile_id ConnectUser#routing_profile_id}.

---

##### `SecurityProfileIds`<sup>Required</sup> <a name="SecurityProfileIds" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.securityProfileIds"></a>

```csharp
public string[] SecurityProfileIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#security_profile_ids ConnectUser#security_profile_ids}.

---

##### `DirectoryUserId`<sup>Optional</sup> <a name="DirectoryUserId" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.directoryUserId"></a>

```csharp
public string DirectoryUserId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#directory_user_id ConnectUser#directory_user_id}.

---

##### `HierarchyGroupId`<sup>Optional</sup> <a name="HierarchyGroupId" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.hierarchyGroupId"></a>

```csharp
public string HierarchyGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#hierarchy_group_id ConnectUser#hierarchy_group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#id ConnectUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityInfo`<sup>Optional</sup> <a name="IdentityInfo" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.identityInfo"></a>

```csharp
public ConnectUserIdentityInfo IdentityInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

identity_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#identity_info ConnectUser#identity_info}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#password ConnectUser#password}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#tags ConnectUser#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#tags_all ConnectUser#tags_all}.

---

### ConnectUserIdentityInfo <a name="ConnectUserIdentityInfo" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectUserIdentityInfo {
    string Email = null,
    string FirstName = null,
    string LastName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#email ConnectUser#email}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo.property.firstName">FirstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#first_name ConnectUser#first_name}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo.property.lastName">LastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#last_name ConnectUser#last_name}. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#email ConnectUser#email}.

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo.property.firstName"></a>

```csharp
public string FirstName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#first_name ConnectUser#first_name}.

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo.property.lastName"></a>

```csharp
public string LastName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#last_name ConnectUser#last_name}.

---

### ConnectUserPhoneConfig <a name="ConnectUserPhoneConfig" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectUserPhoneConfig {
    string PhoneType,
    double AfterContactWorkTimeLimit = null,
    object AutoAccept = null,
    string DeskPhoneNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig.property.phoneType">PhoneType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#phone_type ConnectUser#phone_type}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig.property.afterContactWorkTimeLimit">AfterContactWorkTimeLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#after_contact_work_time_limit ConnectUser#after_contact_work_time_limit}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig.property.autoAccept">AutoAccept</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#auto_accept ConnectUser#auto_accept}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig.property.deskPhoneNumber">DeskPhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#desk_phone_number ConnectUser#desk_phone_number}. |

---

##### `PhoneType`<sup>Required</sup> <a name="PhoneType" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig.property.phoneType"></a>

```csharp
public string PhoneType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#phone_type ConnectUser#phone_type}.

---

##### `AfterContactWorkTimeLimit`<sup>Optional</sup> <a name="AfterContactWorkTimeLimit" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig.property.afterContactWorkTimeLimit"></a>

```csharp
public double AfterContactWorkTimeLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#after_contact_work_time_limit ConnectUser#after_contact_work_time_limit}.

---

##### `AutoAccept`<sup>Optional</sup> <a name="AutoAccept" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig.property.autoAccept"></a>

```csharp
public object AutoAccept { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#auto_accept ConnectUser#auto_accept}.

---

##### `DeskPhoneNumber`<sup>Optional</sup> <a name="DeskPhoneNumber" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig.property.deskPhoneNumber"></a>

```csharp
public string DeskPhoneNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#desk_phone_number ConnectUser#desk_phone_number}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectUserIdentityInfoOutputReference <a name="ConnectUserIdentityInfoOutputReference" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectUserIdentityInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.resetLastName">ResetLastName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetFirstName` <a name="ResetFirstName" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.resetFirstName"></a>

```csharp
private void ResetFirstName()
```

##### `ResetLastName` <a name="ResetLastName" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.resetLastName"></a>

```csharp
private void ResetLastName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.firstNameInput"></a>

```csharp
public string FirstNameInput { get; }
```

- *Type:* string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.lastNameInput"></a>

```csharp
public string LastNameInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.internalValue"></a>

```csharp
public ConnectUserIdentityInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

---


### ConnectUserPhoneConfigOutputReference <a name="ConnectUserPhoneConfigOutputReference" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConnectUserPhoneConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.resetAfterContactWorkTimeLimit">ResetAfterContactWorkTimeLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.resetAutoAccept">ResetAutoAccept</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.resetDeskPhoneNumber">ResetDeskPhoneNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAfterContactWorkTimeLimit` <a name="ResetAfterContactWorkTimeLimit" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.resetAfterContactWorkTimeLimit"></a>

```csharp
private void ResetAfterContactWorkTimeLimit()
```

##### `ResetAutoAccept` <a name="ResetAutoAccept" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.resetAutoAccept"></a>

```csharp
private void ResetAutoAccept()
```

##### `ResetDeskPhoneNumber` <a name="ResetDeskPhoneNumber" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.resetDeskPhoneNumber"></a>

```csharp
private void ResetDeskPhoneNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimitInput">AfterContactWorkTimeLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAcceptInput">AutoAcceptInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumberInput">DeskPhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneTypeInput">PhoneTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimit">AfterContactWorkTimeLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAccept">AutoAccept</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumber">DeskPhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneType">PhoneType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AfterContactWorkTimeLimitInput`<sup>Optional</sup> <a name="AfterContactWorkTimeLimitInput" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimitInput"></a>

```csharp
public double AfterContactWorkTimeLimitInput { get; }
```

- *Type:* double

---

##### `AutoAcceptInput`<sup>Optional</sup> <a name="AutoAcceptInput" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAcceptInput"></a>

```csharp
public object AutoAcceptInput { get; }
```

- *Type:* object

---

##### `DeskPhoneNumberInput`<sup>Optional</sup> <a name="DeskPhoneNumberInput" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumberInput"></a>

```csharp
public string DeskPhoneNumberInput { get; }
```

- *Type:* string

---

##### `PhoneTypeInput`<sup>Optional</sup> <a name="PhoneTypeInput" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneTypeInput"></a>

```csharp
public string PhoneTypeInput { get; }
```

- *Type:* string

---

##### `AfterContactWorkTimeLimit`<sup>Required</sup> <a name="AfterContactWorkTimeLimit" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimit"></a>

```csharp
public double AfterContactWorkTimeLimit { get; }
```

- *Type:* double

---

##### `AutoAccept`<sup>Required</sup> <a name="AutoAccept" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAccept"></a>

```csharp
public object AutoAccept { get; }
```

- *Type:* object

---

##### `DeskPhoneNumber`<sup>Required</sup> <a name="DeskPhoneNumber" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumber"></a>

```csharp
public string DeskPhoneNumber { get; }
```

- *Type:* string

---

##### `PhoneType`<sup>Required</sup> <a name="PhoneType" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneType"></a>

```csharp
public string PhoneType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.internalValue"></a>

```csharp
public ConnectUserPhoneConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

---



