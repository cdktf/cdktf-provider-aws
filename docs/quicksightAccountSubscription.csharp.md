# `aws_quicksight_account_subscription`

Refer to the Terraform Registory for docs: [`aws_quicksight_account_subscription`](https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription).

# `quicksightAccountSubscription` Submodule <a name="`quicksightAccountSubscription` Submodule" id="@cdktf/provider-aws.quicksightAccountSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightAccountSubscription <a name="QuicksightAccountSubscription" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription aws_quicksight_account_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightAccountSubscription(Construct Scope, string Id, QuicksightAccountSubscriptionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig">QuicksightAccountSubscriptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig">QuicksightAccountSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetActiveDirectoryName">ResetActiveDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAdminGroup">ResetAdminGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAuthorGroup">ResetAuthorGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetContactNumber">ResetContactNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetDirectoryId">ResetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetEmailAddress">ResetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetLastName">ResetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetReaderGroup">ResetReaderGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetRealm">ResetRealm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.putTimeouts"></a>

```csharp
private void PutTimeouts(QuicksightAccountSubscriptionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a>

---

##### `ResetActiveDirectoryName` <a name="ResetActiveDirectoryName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetActiveDirectoryName"></a>

```csharp
private void ResetActiveDirectoryName()
```

##### `ResetAdminGroup` <a name="ResetAdminGroup" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAdminGroup"></a>

```csharp
private void ResetAdminGroup()
```

##### `ResetAuthorGroup` <a name="ResetAuthorGroup" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAuthorGroup"></a>

```csharp
private void ResetAuthorGroup()
```

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAwsAccountId"></a>

```csharp
private void ResetAwsAccountId()
```

##### `ResetContactNumber` <a name="ResetContactNumber" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetContactNumber"></a>

```csharp
private void ResetContactNumber()
```

##### `ResetDirectoryId` <a name="ResetDirectoryId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetDirectoryId"></a>

```csharp
private void ResetDirectoryId()
```

##### `ResetEmailAddress` <a name="ResetEmailAddress" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetEmailAddress"></a>

```csharp
private void ResetEmailAddress()
```

##### `ResetFirstName` <a name="ResetFirstName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetFirstName"></a>

```csharp
private void ResetFirstName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLastName` <a name="ResetLastName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetLastName"></a>

```csharp
private void ResetLastName()
```

##### `ResetReaderGroup` <a name="ResetReaderGroup" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetReaderGroup"></a>

```csharp
private void ResetReaderGroup()
```

##### `ResetRealm` <a name="ResetRealm" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetRealm"></a>

```csharp
private void ResetRealm()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

QuicksightAccountSubscription.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

QuicksightAccountSubscription.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

QuicksightAccountSubscription.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountSubscriptionStatus">AccountSubscriptionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference">QuicksightAccountSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountNameInput">AccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.activeDirectoryNameInput">ActiveDirectoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.adminGroupInput">AdminGroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authenticationMethodInput">AuthenticationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authorGroupInput">AuthorGroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.contactNumberInput">ContactNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.directoryIdInput">DirectoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.editionInput">EditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.emailAddressInput">EmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.firstNameInput">FirstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lastNameInput">LastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.notificationEmailInput">NotificationEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.readerGroupInput">ReaderGroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.realmInput">RealmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountName">AccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.activeDirectoryName">ActiveDirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.adminGroup">AdminGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authenticationMethod">AuthenticationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authorGroup">AuthorGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.contactNumber">ContactNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.edition">Edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.notificationEmail">NotificationEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.readerGroup">ReaderGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.realm">Realm</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccountSubscriptionStatus`<sup>Required</sup> <a name="AccountSubscriptionStatus" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountSubscriptionStatus"></a>

```csharp
public string AccountSubscriptionStatus { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.timeouts"></a>

```csharp
public QuicksightAccountSubscriptionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference">QuicksightAccountSubscriptionTimeoutsOutputReference</a>

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountNameInput"></a>

```csharp
public string AccountNameInput { get; }
```

- *Type:* string

---

##### `ActiveDirectoryNameInput`<sup>Optional</sup> <a name="ActiveDirectoryNameInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.activeDirectoryNameInput"></a>

```csharp
public string ActiveDirectoryNameInput { get; }
```

- *Type:* string

---

##### `AdminGroupInput`<sup>Optional</sup> <a name="AdminGroupInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.adminGroupInput"></a>

```csharp
public string[] AdminGroupInput { get; }
```

- *Type:* string[]

---

##### `AuthenticationMethodInput`<sup>Optional</sup> <a name="AuthenticationMethodInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authenticationMethodInput"></a>

```csharp
public string AuthenticationMethodInput { get; }
```

- *Type:* string

---

##### `AuthorGroupInput`<sup>Optional</sup> <a name="AuthorGroupInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authorGroupInput"></a>

```csharp
public string[] AuthorGroupInput { get; }
```

- *Type:* string[]

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.awsAccountIdInput"></a>

```csharp
public string AwsAccountIdInput { get; }
```

- *Type:* string

---

##### `ContactNumberInput`<sup>Optional</sup> <a name="ContactNumberInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.contactNumberInput"></a>

```csharp
public string ContactNumberInput { get; }
```

- *Type:* string

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.directoryIdInput"></a>

```csharp
public string DirectoryIdInput { get; }
```

- *Type:* string

---

##### `EditionInput`<sup>Optional</sup> <a name="EditionInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.editionInput"></a>

```csharp
public string EditionInput { get; }
```

- *Type:* string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.emailAddressInput"></a>

```csharp
public string EmailAddressInput { get; }
```

- *Type:* string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.firstNameInput"></a>

```csharp
public string FirstNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lastNameInput"></a>

```csharp
public string LastNameInput { get; }
```

- *Type:* string

---

##### `NotificationEmailInput`<sup>Optional</sup> <a name="NotificationEmailInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.notificationEmailInput"></a>

```csharp
public string NotificationEmailInput { get; }
```

- *Type:* string

---

##### `ReaderGroupInput`<sup>Optional</sup> <a name="ReaderGroupInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.readerGroupInput"></a>

```csharp
public string[] ReaderGroupInput { get; }
```

- *Type:* string[]

---

##### `RealmInput`<sup>Optional</sup> <a name="RealmInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.realmInput"></a>

```csharp
public string RealmInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountName"></a>

```csharp
public string AccountName { get; }
```

- *Type:* string

---

##### `ActiveDirectoryName`<sup>Required</sup> <a name="ActiveDirectoryName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.activeDirectoryName"></a>

```csharp
public string ActiveDirectoryName { get; }
```

- *Type:* string

---

##### `AdminGroup`<sup>Required</sup> <a name="AdminGroup" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.adminGroup"></a>

```csharp
public string[] AdminGroup { get; }
```

- *Type:* string[]

---

##### `AuthenticationMethod`<sup>Required</sup> <a name="AuthenticationMethod" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authenticationMethod"></a>

```csharp
public string AuthenticationMethod { get; }
```

- *Type:* string

---

##### `AuthorGroup`<sup>Required</sup> <a name="AuthorGroup" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authorGroup"></a>

```csharp
public string[] AuthorGroup { get; }
```

- *Type:* string[]

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `ContactNumber`<sup>Required</sup> <a name="ContactNumber" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.contactNumber"></a>

```csharp
public string ContactNumber { get; }
```

- *Type:* string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.edition"></a>

```csharp
public string Edition { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `NotificationEmail`<sup>Required</sup> <a name="NotificationEmail" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.notificationEmail"></a>

```csharp
public string NotificationEmail { get; }
```

- *Type:* string

---

##### `ReaderGroup`<sup>Required</sup> <a name="ReaderGroup" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.readerGroup"></a>

```csharp
public string[] ReaderGroup { get; }
```

- *Type:* string[]

---

##### `Realm`<sup>Required</sup> <a name="Realm" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.realm"></a>

```csharp
public string Realm { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightAccountSubscriptionConfig <a name="QuicksightAccountSubscriptionConfig" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightAccountSubscriptionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountName,
    string AuthenticationMethod,
    string Edition,
    string NotificationEmail,
    string ActiveDirectoryName = null,
    string[] AdminGroup = null,
    string[] AuthorGroup = null,
    string AwsAccountId = null,
    string ContactNumber = null,
    string DirectoryId = null,
    string EmailAddress = null,
    string FirstName = null,
    string Id = null,
    string LastName = null,
    string[] ReaderGroup = null,
    string Realm = null,
    QuicksightAccountSubscriptionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.accountName">AccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#account_name QuicksightAccountSubscription#account_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.authenticationMethod">AuthenticationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#authentication_method QuicksightAccountSubscription#authentication_method}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.edition">Edition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#edition QuicksightAccountSubscription#edition}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.notificationEmail">NotificationEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#notification_email QuicksightAccountSubscription#notification_email}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.activeDirectoryName">ActiveDirectoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#active_directory_name QuicksightAccountSubscription#active_directory_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.adminGroup">AdminGroup</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#admin_group QuicksightAccountSubscription#admin_group}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.authorGroup">AuthorGroup</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#author_group QuicksightAccountSubscription#author_group}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#aws_account_id QuicksightAccountSubscription#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.contactNumber">ContactNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#contact_number QuicksightAccountSubscription#contact_number}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.directoryId">DirectoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#directory_id QuicksightAccountSubscription#directory_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.emailAddress">EmailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#email_address QuicksightAccountSubscription#email_address}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.firstName">FirstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#first_name QuicksightAccountSubscription#first_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#id QuicksightAccountSubscription#id}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.lastName">LastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#last_name QuicksightAccountSubscription#last_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.readerGroup">ReaderGroup</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#reader_group QuicksightAccountSubscription#reader_group}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.realm">Realm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#realm QuicksightAccountSubscription#realm}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.accountName"></a>

```csharp
public string AccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#account_name QuicksightAccountSubscription#account_name}.

---

##### `AuthenticationMethod`<sup>Required</sup> <a name="AuthenticationMethod" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.authenticationMethod"></a>

```csharp
public string AuthenticationMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#authentication_method QuicksightAccountSubscription#authentication_method}.

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.edition"></a>

```csharp
public string Edition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#edition QuicksightAccountSubscription#edition}.

---

##### `NotificationEmail`<sup>Required</sup> <a name="NotificationEmail" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.notificationEmail"></a>

```csharp
public string NotificationEmail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#notification_email QuicksightAccountSubscription#notification_email}.

---

##### `ActiveDirectoryName`<sup>Optional</sup> <a name="ActiveDirectoryName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.activeDirectoryName"></a>

```csharp
public string ActiveDirectoryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#active_directory_name QuicksightAccountSubscription#active_directory_name}.

---

##### `AdminGroup`<sup>Optional</sup> <a name="AdminGroup" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.adminGroup"></a>

```csharp
public string[] AdminGroup { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#admin_group QuicksightAccountSubscription#admin_group}.

---

##### `AuthorGroup`<sup>Optional</sup> <a name="AuthorGroup" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.authorGroup"></a>

```csharp
public string[] AuthorGroup { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#author_group QuicksightAccountSubscription#author_group}.

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#aws_account_id QuicksightAccountSubscription#aws_account_id}.

---

##### `ContactNumber`<sup>Optional</sup> <a name="ContactNumber" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.contactNumber"></a>

```csharp
public string ContactNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#contact_number QuicksightAccountSubscription#contact_number}.

---

##### `DirectoryId`<sup>Optional</sup> <a name="DirectoryId" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.directoryId"></a>

```csharp
public string DirectoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#directory_id QuicksightAccountSubscription#directory_id}.

---

##### `EmailAddress`<sup>Optional</sup> <a name="EmailAddress" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.emailAddress"></a>

```csharp
public string EmailAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#email_address QuicksightAccountSubscription#email_address}.

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.firstName"></a>

```csharp
public string FirstName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#first_name QuicksightAccountSubscription#first_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#id QuicksightAccountSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.lastName"></a>

```csharp
public string LastName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#last_name QuicksightAccountSubscription#last_name}.

---

##### `ReaderGroup`<sup>Optional</sup> <a name="ReaderGroup" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.readerGroup"></a>

```csharp
public string[] ReaderGroup { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#reader_group QuicksightAccountSubscription#reader_group}.

---

##### `Realm`<sup>Optional</sup> <a name="Realm" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.realm"></a>

```csharp
public string Realm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#realm QuicksightAccountSubscription#realm}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.timeouts"></a>

```csharp
public QuicksightAccountSubscriptionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#timeouts QuicksightAccountSubscription#timeouts}

---

### QuicksightAccountSubscriptionTimeouts <a name="QuicksightAccountSubscriptionTimeouts" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightAccountSubscriptionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#create QuicksightAccountSubscription#create}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#delete QuicksightAccountSubscription#delete}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#read QuicksightAccountSubscription#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#create QuicksightAccountSubscription#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#delete QuicksightAccountSubscription#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/resources/quicksight_account_subscription#read QuicksightAccountSubscription#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightAccountSubscriptionTimeoutsOutputReference <a name="QuicksightAccountSubscriptionTimeoutsOutputReference" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightAccountSubscriptionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



