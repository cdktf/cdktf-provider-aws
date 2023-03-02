# `route53DomainsRegisteredDomain` Submodule <a name="`route53DomainsRegisteredDomain` Submodule" id="@cdktf/provider-aws.route53DomainsRegisteredDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53DomainsRegisteredDomain <a name="Route53DomainsRegisteredDomain" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain aws_route53domains_registered_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53DomainsRegisteredDomain(Construct Scope, string Id, Route53DomainsRegisteredDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig">Route53DomainsRegisteredDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig">Route53DomainsRegisteredDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact">PutAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putNameServer">PutNameServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact">PutRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact">PutTechContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAdminContact">ResetAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAdminPrivacy">ResetAdminPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAutoRenew">ResetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetNameServer">ResetNameServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetRegistrantContact">ResetRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetRegistrantPrivacy">ResetRegistrantPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTechContact">ResetTechContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTechPrivacy">ResetTechPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTransferLock">ResetTransferLock</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAdminContact` <a name="PutAdminContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact"></a>

```csharp
private void PutAdminContact(Route53DomainsRegisteredDomainAdminContact Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putAdminContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a>

---

##### `PutNameServer` <a name="PutNameServer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putNameServer"></a>

```csharp
private void PutNameServer(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putNameServer.parameter.value"></a>

- *Type:* object

---

##### `PutRegistrantContact` <a name="PutRegistrantContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact"></a>

```csharp
private void PutRegistrantContact(Route53DomainsRegisteredDomainRegistrantContact Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putRegistrantContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a>

---

##### `PutTechContact` <a name="PutTechContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact"></a>

```csharp
private void PutTechContact(Route53DomainsRegisteredDomainTechContact Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTechContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTimeouts"></a>

```csharp
private void PutTimeouts(Route53DomainsRegisteredDomainTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a>

---

##### `ResetAdminContact` <a name="ResetAdminContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAdminContact"></a>

```csharp
private void ResetAdminContact()
```

##### `ResetAdminPrivacy` <a name="ResetAdminPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAdminPrivacy"></a>

```csharp
private void ResetAdminPrivacy()
```

##### `ResetAutoRenew` <a name="ResetAutoRenew" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetAutoRenew"></a>

```csharp
private void ResetAutoRenew()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNameServer` <a name="ResetNameServer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetNameServer"></a>

```csharp
private void ResetNameServer()
```

##### `ResetRegistrantContact` <a name="ResetRegistrantContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetRegistrantContact"></a>

```csharp
private void ResetRegistrantContact()
```

##### `ResetRegistrantPrivacy` <a name="ResetRegistrantPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetRegistrantPrivacy"></a>

```csharp
private void ResetRegistrantPrivacy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTechContact` <a name="ResetTechContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTechContact"></a>

```csharp
private void ResetTechContact()
```

##### `ResetTechPrivacy` <a name="ResetTechPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTechPrivacy"></a>

```csharp
private void ResetTechPrivacy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTransferLock` <a name="ResetTransferLock" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.resetTransferLock"></a>

```csharp
private void ResetTransferLock()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Route53DomainsRegisteredDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Route53DomainsRegisteredDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Route53DomainsRegisteredDomain.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.abuseContactEmail">AbuseContactEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.abuseContactPhone">AbuseContactPhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminContact">AdminContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference">Route53DomainsRegisteredDomainAdminContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.expirationDate">ExpirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.nameServer">NameServer</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList">Route53DomainsRegisteredDomainNameServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantContact">RegistrantContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference">Route53DomainsRegisteredDomainRegistrantContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrarName">RegistrarName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrarUrl">RegistrarUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.reseller">Reseller</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.statusList">StatusList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techContact">TechContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference">Route53DomainsRegisteredDomainTechContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference">Route53DomainsRegisteredDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.updatedDate">UpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.whoisServer">WhoisServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminContactInput">AdminContactInput</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminPrivacyInput">AdminPrivacyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.autoRenewInput">AutoRenewInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.nameServerInput">NameServerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantContactInput">RegistrantContactInput</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantPrivacyInput">RegistrantPrivacyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techContactInput">TechContactInput</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techPrivacyInput">TechPrivacyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.transferLockInput">TransferLockInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminPrivacy">AdminPrivacy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.autoRenew">AutoRenew</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantPrivacy">RegistrantPrivacy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techPrivacy">TechPrivacy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.transferLock">TransferLock</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AbuseContactEmail`<sup>Required</sup> <a name="AbuseContactEmail" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.abuseContactEmail"></a>

```csharp
public string AbuseContactEmail { get; }
```

- *Type:* string

---

##### `AbuseContactPhone`<sup>Required</sup> <a name="AbuseContactPhone" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.abuseContactPhone"></a>

```csharp
public string AbuseContactPhone { get; }
```

- *Type:* string

---

##### `AdminContact`<sup>Required</sup> <a name="AdminContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminContact"></a>

```csharp
public Route53DomainsRegisteredDomainAdminContactOutputReference AdminContact { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference">Route53DomainsRegisteredDomainAdminContactOutputReference</a>

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `ExpirationDate`<sup>Required</sup> <a name="ExpirationDate" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.expirationDate"></a>

```csharp
public string ExpirationDate { get; }
```

- *Type:* string

---

##### `NameServer`<sup>Required</sup> <a name="NameServer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.nameServer"></a>

```csharp
public Route53DomainsRegisteredDomainNameServerList NameServer { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList">Route53DomainsRegisteredDomainNameServerList</a>

---

##### `RegistrantContact`<sup>Required</sup> <a name="RegistrantContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantContact"></a>

```csharp
public Route53DomainsRegisteredDomainRegistrantContactOutputReference RegistrantContact { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference">Route53DomainsRegisteredDomainRegistrantContactOutputReference</a>

---

##### `RegistrarName`<sup>Required</sup> <a name="RegistrarName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrarName"></a>

```csharp
public string RegistrarName { get; }
```

- *Type:* string

---

##### `RegistrarUrl`<sup>Required</sup> <a name="RegistrarUrl" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrarUrl"></a>

```csharp
public string RegistrarUrl { get; }
```

- *Type:* string

---

##### `Reseller`<sup>Required</sup> <a name="Reseller" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.reseller"></a>

```csharp
public string Reseller { get; }
```

- *Type:* string

---

##### `StatusList`<sup>Required</sup> <a name="StatusList" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.statusList"></a>

```csharp
public string[] StatusList { get; }
```

- *Type:* string[]

---

##### `TechContact`<sup>Required</sup> <a name="TechContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techContact"></a>

```csharp
public Route53DomainsRegisteredDomainTechContactOutputReference TechContact { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference">Route53DomainsRegisteredDomainTechContactOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.timeouts"></a>

```csharp
public Route53DomainsRegisteredDomainTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference">Route53DomainsRegisteredDomainTimeoutsOutputReference</a>

---

##### `UpdatedDate`<sup>Required</sup> <a name="UpdatedDate" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.updatedDate"></a>

```csharp
public string UpdatedDate { get; }
```

- *Type:* string

---

##### `WhoisServer`<sup>Required</sup> <a name="WhoisServer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.whoisServer"></a>

```csharp
public string WhoisServer { get; }
```

- *Type:* string

---

##### `AdminContactInput`<sup>Optional</sup> <a name="AdminContactInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminContactInput"></a>

```csharp
public Route53DomainsRegisteredDomainAdminContact AdminContactInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a>

---

##### `AdminPrivacyInput`<sup>Optional</sup> <a name="AdminPrivacyInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminPrivacyInput"></a>

```csharp
public object AdminPrivacyInput { get; }
```

- *Type:* object

---

##### `AutoRenewInput`<sup>Optional</sup> <a name="AutoRenewInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.autoRenewInput"></a>

```csharp
public object AutoRenewInput { get; }
```

- *Type:* object

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameServerInput`<sup>Optional</sup> <a name="NameServerInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.nameServerInput"></a>

```csharp
public object NameServerInput { get; }
```

- *Type:* object

---

##### `RegistrantContactInput`<sup>Optional</sup> <a name="RegistrantContactInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantContactInput"></a>

```csharp
public Route53DomainsRegisteredDomainRegistrantContact RegistrantContactInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a>

---

##### `RegistrantPrivacyInput`<sup>Optional</sup> <a name="RegistrantPrivacyInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantPrivacyInput"></a>

```csharp
public object RegistrantPrivacyInput { get; }
```

- *Type:* object

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TechContactInput`<sup>Optional</sup> <a name="TechContactInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techContactInput"></a>

```csharp
public Route53DomainsRegisteredDomainTechContact TechContactInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a>

---

##### `TechPrivacyInput`<sup>Optional</sup> <a name="TechPrivacyInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techPrivacyInput"></a>

```csharp
public object TechPrivacyInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TransferLockInput`<sup>Optional</sup> <a name="TransferLockInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.transferLockInput"></a>

```csharp
public object TransferLockInput { get; }
```

- *Type:* object

---

##### `AdminPrivacy`<sup>Required</sup> <a name="AdminPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.adminPrivacy"></a>

```csharp
public object AdminPrivacy { get; }
```

- *Type:* object

---

##### `AutoRenew`<sup>Required</sup> <a name="AutoRenew" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.autoRenew"></a>

```csharp
public object AutoRenew { get; }
```

- *Type:* object

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RegistrantPrivacy`<sup>Required</sup> <a name="RegistrantPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.registrantPrivacy"></a>

```csharp
public object RegistrantPrivacy { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TechPrivacy`<sup>Required</sup> <a name="TechPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.techPrivacy"></a>

```csharp
public object TechPrivacy { get; }
```

- *Type:* object

---

##### `TransferLock`<sup>Required</sup> <a name="TransferLock" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.transferLock"></a>

```csharp
public object TransferLock { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53DomainsRegisteredDomainAdminContact <a name="Route53DomainsRegisteredDomainAdminContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53DomainsRegisteredDomainAdminContact {
    string AddressLine1 = null,
    string AddressLine2 = null,
    string City = null,
    string ContactType = null,
    string CountryCode = null,
    string Email = null,
    System.Collections.Generic.IDictionary<string, string> ExtraParams = null,
    string Fax = null,
    string FirstName = null,
    string LastName = null,
    string OrganizationName = null,
    string PhoneNumber = null,
    string State = null,
    string ZipCode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.addressLine1">AddressLine1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.addressLine2">AddressLine2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.city">City</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.contactType">ContactType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.countryCode">CountryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.extraParams">ExtraParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.fax">Fax</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.firstName">FirstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.lastName">LastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.organizationName">OrganizationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.zipCode">ZipCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}. |

---

##### `AddressLine1`<sup>Optional</sup> <a name="AddressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.addressLine1"></a>

```csharp
public string AddressLine1 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}.

---

##### `AddressLine2`<sup>Optional</sup> <a name="AddressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.addressLine2"></a>

```csharp
public string AddressLine2 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}.

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.city"></a>

```csharp
public string City { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}.

---

##### `ContactType`<sup>Optional</sup> <a name="ContactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.contactType"></a>

```csharp
public string ContactType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}.

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.countryCode"></a>

```csharp
public string CountryCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}.

---

##### `ExtraParams`<sup>Optional</sup> <a name="ExtraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.extraParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraParams { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}.

---

##### `Fax`<sup>Optional</sup> <a name="Fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.fax"></a>

```csharp
public string Fax { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}.

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.firstName"></a>

```csharp
public string FirstName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}.

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.lastName"></a>

```csharp
public string LastName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}.

---

##### `OrganizationName`<sup>Optional</sup> <a name="OrganizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.organizationName"></a>

```csharp
public string OrganizationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}.

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}.

---

##### `ZipCode`<sup>Optional</sup> <a name="ZipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact.property.zipCode"></a>

```csharp
public string ZipCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}.

---

### Route53DomainsRegisteredDomainConfig <a name="Route53DomainsRegisteredDomainConfig" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53DomainsRegisteredDomainConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DomainName,
    Route53DomainsRegisteredDomainAdminContact AdminContact = null,
    object AdminPrivacy = null,
    object AutoRenew = null,
    string Id = null,
    object NameServer = null,
    Route53DomainsRegisteredDomainRegistrantContact RegistrantContact = null,
    object RegistrantPrivacy = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    Route53DomainsRegisteredDomainTechContact TechContact = null,
    object TechPrivacy = null,
    Route53DomainsRegisteredDomainTimeouts Timeouts = null,
    object TransferLock = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#domain_name Route53DomainsRegisteredDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.adminContact">AdminContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a></code> | admin_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.adminPrivacy">AdminPrivacy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#admin_privacy Route53DomainsRegisteredDomain#admin_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.autoRenew">AutoRenew</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#auto_renew Route53DomainsRegisteredDomain#auto_renew}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#id Route53DomainsRegisteredDomain#id}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.nameServer">NameServer</a></code> | <code>object</code> | name_server block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.registrantContact">RegistrantContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a></code> | registrant_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.registrantPrivacy">RegistrantPrivacy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#registrant_privacy Route53DomainsRegisteredDomain#registrant_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags Route53DomainsRegisteredDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags_all Route53DomainsRegisteredDomain#tags_all}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.techContact">TechContact</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a></code> | tech_contact block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.techPrivacy">TechPrivacy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tech_privacy Route53DomainsRegisteredDomain#tech_privacy}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.transferLock">TransferLock</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#transfer_lock Route53DomainsRegisteredDomain#transfer_lock}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#domain_name Route53DomainsRegisteredDomain#domain_name}.

---

##### `AdminContact`<sup>Optional</sup> <a name="AdminContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.adminContact"></a>

```csharp
public Route53DomainsRegisteredDomainAdminContact AdminContact { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a>

admin_contact block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#admin_contact Route53DomainsRegisteredDomain#admin_contact}

---

##### `AdminPrivacy`<sup>Optional</sup> <a name="AdminPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.adminPrivacy"></a>

```csharp
public object AdminPrivacy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#admin_privacy Route53DomainsRegisteredDomain#admin_privacy}.

---

##### `AutoRenew`<sup>Optional</sup> <a name="AutoRenew" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.autoRenew"></a>

```csharp
public object AutoRenew { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#auto_renew Route53DomainsRegisteredDomain#auto_renew}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#id Route53DomainsRegisteredDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NameServer`<sup>Optional</sup> <a name="NameServer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.nameServer"></a>

```csharp
public object NameServer { get; set; }
```

- *Type:* object

name_server block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#name_server Route53DomainsRegisteredDomain#name_server}

---

##### `RegistrantContact`<sup>Optional</sup> <a name="RegistrantContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.registrantContact"></a>

```csharp
public Route53DomainsRegisteredDomainRegistrantContact RegistrantContact { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a>

registrant_contact block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#registrant_contact Route53DomainsRegisteredDomain#registrant_contact}

---

##### `RegistrantPrivacy`<sup>Optional</sup> <a name="RegistrantPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.registrantPrivacy"></a>

```csharp
public object RegistrantPrivacy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#registrant_privacy Route53DomainsRegisteredDomain#registrant_privacy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags Route53DomainsRegisteredDomain#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tags_all Route53DomainsRegisteredDomain#tags_all}.

---

##### `TechContact`<sup>Optional</sup> <a name="TechContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.techContact"></a>

```csharp
public Route53DomainsRegisteredDomainTechContact TechContact { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a>

tech_contact block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tech_contact Route53DomainsRegisteredDomain#tech_contact}

---

##### `TechPrivacy`<sup>Optional</sup> <a name="TechPrivacy" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.techPrivacy"></a>

```csharp
public object TechPrivacy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#tech_privacy Route53DomainsRegisteredDomain#tech_privacy}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.timeouts"></a>

```csharp
public Route53DomainsRegisteredDomainTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts">Route53DomainsRegisteredDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#timeouts Route53DomainsRegisteredDomain#timeouts}

---

##### `TransferLock`<sup>Optional</sup> <a name="TransferLock" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainConfig.property.transferLock"></a>

```csharp
public object TransferLock { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#transfer_lock Route53DomainsRegisteredDomain#transfer_lock}.

---

### Route53DomainsRegisteredDomainNameServer <a name="Route53DomainsRegisteredDomainNameServer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53DomainsRegisteredDomainNameServer {
    string Name,
    string[] GlueIps = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#name Route53DomainsRegisteredDomain#name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer.property.glueIps">GlueIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#glue_ips Route53DomainsRegisteredDomain#glue_ips}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#name Route53DomainsRegisteredDomain#name}.

---

##### `GlueIps`<sup>Optional</sup> <a name="GlueIps" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServer.property.glueIps"></a>

```csharp
public string[] GlueIps { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#glue_ips Route53DomainsRegisteredDomain#glue_ips}.

---

### Route53DomainsRegisteredDomainRegistrantContact <a name="Route53DomainsRegisteredDomainRegistrantContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53DomainsRegisteredDomainRegistrantContact {
    string AddressLine1 = null,
    string AddressLine2 = null,
    string City = null,
    string ContactType = null,
    string CountryCode = null,
    string Email = null,
    System.Collections.Generic.IDictionary<string, string> ExtraParams = null,
    string Fax = null,
    string FirstName = null,
    string LastName = null,
    string OrganizationName = null,
    string PhoneNumber = null,
    string State = null,
    string ZipCode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.addressLine1">AddressLine1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.addressLine2">AddressLine2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.city">City</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.contactType">ContactType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.countryCode">CountryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.extraParams">ExtraParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.fax">Fax</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.firstName">FirstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.lastName">LastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.organizationName">OrganizationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.zipCode">ZipCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}. |

---

##### `AddressLine1`<sup>Optional</sup> <a name="AddressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.addressLine1"></a>

```csharp
public string AddressLine1 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}.

---

##### `AddressLine2`<sup>Optional</sup> <a name="AddressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.addressLine2"></a>

```csharp
public string AddressLine2 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}.

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.city"></a>

```csharp
public string City { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}.

---

##### `ContactType`<sup>Optional</sup> <a name="ContactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.contactType"></a>

```csharp
public string ContactType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}.

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.countryCode"></a>

```csharp
public string CountryCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}.

---

##### `ExtraParams`<sup>Optional</sup> <a name="ExtraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.extraParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraParams { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}.

---

##### `Fax`<sup>Optional</sup> <a name="Fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.fax"></a>

```csharp
public string Fax { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}.

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.firstName"></a>

```csharp
public string FirstName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}.

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.lastName"></a>

```csharp
public string LastName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}.

---

##### `OrganizationName`<sup>Optional</sup> <a name="OrganizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.organizationName"></a>

```csharp
public string OrganizationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}.

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}.

---

##### `ZipCode`<sup>Optional</sup> <a name="ZipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact.property.zipCode"></a>

```csharp
public string ZipCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}.

---

### Route53DomainsRegisteredDomainTechContact <a name="Route53DomainsRegisteredDomainTechContact" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53DomainsRegisteredDomainTechContact {
    string AddressLine1 = null,
    string AddressLine2 = null,
    string City = null,
    string ContactType = null,
    string CountryCode = null,
    string Email = null,
    System.Collections.Generic.IDictionary<string, string> ExtraParams = null,
    string Fax = null,
    string FirstName = null,
    string LastName = null,
    string OrganizationName = null,
    string PhoneNumber = null,
    string State = null,
    string ZipCode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.addressLine1">AddressLine1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.addressLine2">AddressLine2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.city">City</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.contactType">ContactType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.countryCode">CountryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.extraParams">ExtraParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.fax">Fax</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.firstName">FirstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.lastName">LastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.organizationName">OrganizationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.zipCode">ZipCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}. |

---

##### `AddressLine1`<sup>Optional</sup> <a name="AddressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.addressLine1"></a>

```csharp
public string AddressLine1 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_1 Route53DomainsRegisteredDomain#address_line_1}.

---

##### `AddressLine2`<sup>Optional</sup> <a name="AddressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.addressLine2"></a>

```csharp
public string AddressLine2 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#address_line_2 Route53DomainsRegisteredDomain#address_line_2}.

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.city"></a>

```csharp
public string City { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#city Route53DomainsRegisteredDomain#city}.

---

##### `ContactType`<sup>Optional</sup> <a name="ContactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.contactType"></a>

```csharp
public string ContactType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#contact_type Route53DomainsRegisteredDomain#contact_type}.

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.countryCode"></a>

```csharp
public string CountryCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#country_code Route53DomainsRegisteredDomain#country_code}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#email Route53DomainsRegisteredDomain#email}.

---

##### `ExtraParams`<sup>Optional</sup> <a name="ExtraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.extraParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraParams { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#extra_params Route53DomainsRegisteredDomain#extra_params}.

---

##### `Fax`<sup>Optional</sup> <a name="Fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.fax"></a>

```csharp
public string Fax { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#fax Route53DomainsRegisteredDomain#fax}.

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.firstName"></a>

```csharp
public string FirstName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#first_name Route53DomainsRegisteredDomain#first_name}.

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.lastName"></a>

```csharp
public string LastName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#last_name Route53DomainsRegisteredDomain#last_name}.

---

##### `OrganizationName`<sup>Optional</sup> <a name="OrganizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.organizationName"></a>

```csharp
public string OrganizationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#organization_name Route53DomainsRegisteredDomain#organization_name}.

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#phone_number Route53DomainsRegisteredDomain#phone_number}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#state Route53DomainsRegisteredDomain#state}.

---

##### `ZipCode`<sup>Optional</sup> <a name="ZipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact.property.zipCode"></a>

```csharp
public string ZipCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#zip_code Route53DomainsRegisteredDomain#zip_code}.

---

### Route53DomainsRegisteredDomainTimeouts <a name="Route53DomainsRegisteredDomainTimeouts" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53DomainsRegisteredDomainTimeouts {
    string Create = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#create Route53DomainsRegisteredDomain#create}. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#update Route53DomainsRegisteredDomain#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#create Route53DomainsRegisteredDomain#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53domains_registered_domain#update Route53DomainsRegisteredDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53DomainsRegisteredDomainAdminContactOutputReference <a name="Route53DomainsRegisteredDomainAdminContactOutputReference" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53DomainsRegisteredDomainAdminContactOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetAddressLine1">ResetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetAddressLine2">ResetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetContactType">ResetContactType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetExtraParams">ResetExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetFax">ResetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetLastName">ResetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetOrganizationName">ResetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetZipCode">ResetZipCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressLine1` <a name="ResetAddressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetAddressLine1"></a>

```csharp
private void ResetAddressLine1()
```

##### `ResetAddressLine2` <a name="ResetAddressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetAddressLine2"></a>

```csharp
private void ResetAddressLine2()
```

##### `ResetCity` <a name="ResetCity" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetCity"></a>

```csharp
private void ResetCity()
```

##### `ResetContactType` <a name="ResetContactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetContactType"></a>

```csharp
private void ResetContactType()
```

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetCountryCode"></a>

```csharp
private void ResetCountryCode()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetExtraParams` <a name="ResetExtraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetExtraParams"></a>

```csharp
private void ResetExtraParams()
```

##### `ResetFax` <a name="ResetFax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetFax"></a>

```csharp
private void ResetFax()
```

##### `ResetFirstName` <a name="ResetFirstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetFirstName"></a>

```csharp
private void ResetFirstName()
```

##### `ResetLastName` <a name="ResetLastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetLastName"></a>

```csharp
private void ResetLastName()
```

##### `ResetOrganizationName` <a name="ResetOrganizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetOrganizationName"></a>

```csharp
private void ResetOrganizationName()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetPhoneNumber"></a>

```csharp
private void ResetPhoneNumber()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetZipCode` <a name="ResetZipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.resetZipCode"></a>

```csharp
private void ResetZipCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine1Input">AddressLine1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine2Input">AddressLine2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.cityInput">CityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.contactTypeInput">ContactTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.extraParamsInput">ExtraParamsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.faxInput">FaxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.organizationNameInput">OrganizationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.zipCodeInput">ZipCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine1">AddressLine1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine2">AddressLine2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.contactType">ContactType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.countryCode">CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.extraParams">ExtraParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.fax">Fax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.organizationName">OrganizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.zipCode">ZipCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressLine1Input`<sup>Optional</sup> <a name="AddressLine1Input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine1Input"></a>

```csharp
public string AddressLine1Input { get; }
```

- *Type:* string

---

##### `AddressLine2Input`<sup>Optional</sup> <a name="AddressLine2Input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine2Input"></a>

```csharp
public string AddressLine2Input { get; }
```

- *Type:* string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.cityInput"></a>

```csharp
public string CityInput { get; }
```

- *Type:* string

---

##### `ContactTypeInput`<sup>Optional</sup> <a name="ContactTypeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.contactTypeInput"></a>

```csharp
public string ContactTypeInput { get; }
```

- *Type:* string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.countryCodeInput"></a>

```csharp
public string CountryCodeInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `ExtraParamsInput`<sup>Optional</sup> <a name="ExtraParamsInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.extraParamsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraParamsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FaxInput`<sup>Optional</sup> <a name="FaxInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.faxInput"></a>

```csharp
public string FaxInput { get; }
```

- *Type:* string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.firstNameInput"></a>

```csharp
public string FirstNameInput { get; }
```

- *Type:* string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.lastNameInput"></a>

```csharp
public string LastNameInput { get; }
```

- *Type:* string

---

##### `OrganizationNameInput`<sup>Optional</sup> <a name="OrganizationNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.organizationNameInput"></a>

```csharp
public string OrganizationNameInput { get; }
```

- *Type:* string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.phoneNumberInput"></a>

```csharp
public string PhoneNumberInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `ZipCodeInput`<sup>Optional</sup> <a name="ZipCodeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.zipCodeInput"></a>

```csharp
public string ZipCodeInput { get; }
```

- *Type:* string

---

##### `AddressLine1`<sup>Required</sup> <a name="AddressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine1"></a>

```csharp
public string AddressLine1 { get; }
```

- *Type:* string

---

##### `AddressLine2`<sup>Required</sup> <a name="AddressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.addressLine2"></a>

```csharp
public string AddressLine2 { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `ContactType`<sup>Required</sup> <a name="ContactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.contactType"></a>

```csharp
public string ContactType { get; }
```

- *Type:* string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.countryCode"></a>

```csharp
public string CountryCode { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `ExtraParams`<sup>Required</sup> <a name="ExtraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.extraParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraParams { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Fax`<sup>Required</sup> <a name="Fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.fax"></a>

```csharp
public string Fax { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.organizationName"></a>

```csharp
public string OrganizationName { get; }
```

- *Type:* string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `ZipCode`<sup>Required</sup> <a name="ZipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.zipCode"></a>

```csharp
public string ZipCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContactOutputReference.property.internalValue"></a>

```csharp
public Route53DomainsRegisteredDomainAdminContact InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainAdminContact">Route53DomainsRegisteredDomainAdminContact</a>

---


### Route53DomainsRegisteredDomainNameServerList <a name="Route53DomainsRegisteredDomainNameServerList" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53DomainsRegisteredDomainNameServerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.get"></a>

```csharp
private Route53DomainsRegisteredDomainNameServerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Route53DomainsRegisteredDomainNameServerOutputReference <a name="Route53DomainsRegisteredDomainNameServerOutputReference" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53DomainsRegisteredDomainNameServerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.resetGlueIps">ResetGlueIps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGlueIps` <a name="ResetGlueIps" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.resetGlueIps"></a>

```csharp
private void ResetGlueIps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.glueIpsInput">GlueIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.glueIps">GlueIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GlueIpsInput`<sup>Optional</sup> <a name="GlueIpsInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.glueIpsInput"></a>

```csharp
public string[] GlueIpsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `GlueIps`<sup>Required</sup> <a name="GlueIps" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.glueIps"></a>

```csharp
public string[] GlueIps { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainNameServerOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### Route53DomainsRegisteredDomainRegistrantContactOutputReference <a name="Route53DomainsRegisteredDomainRegistrantContactOutputReference" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53DomainsRegisteredDomainRegistrantContactOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetAddressLine1">ResetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetAddressLine2">ResetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetContactType">ResetContactType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetExtraParams">ResetExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetFax">ResetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetLastName">ResetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetOrganizationName">ResetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetZipCode">ResetZipCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressLine1` <a name="ResetAddressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetAddressLine1"></a>

```csharp
private void ResetAddressLine1()
```

##### `ResetAddressLine2` <a name="ResetAddressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetAddressLine2"></a>

```csharp
private void ResetAddressLine2()
```

##### `ResetCity` <a name="ResetCity" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetCity"></a>

```csharp
private void ResetCity()
```

##### `ResetContactType` <a name="ResetContactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetContactType"></a>

```csharp
private void ResetContactType()
```

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetCountryCode"></a>

```csharp
private void ResetCountryCode()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetExtraParams` <a name="ResetExtraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetExtraParams"></a>

```csharp
private void ResetExtraParams()
```

##### `ResetFax` <a name="ResetFax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetFax"></a>

```csharp
private void ResetFax()
```

##### `ResetFirstName` <a name="ResetFirstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetFirstName"></a>

```csharp
private void ResetFirstName()
```

##### `ResetLastName` <a name="ResetLastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetLastName"></a>

```csharp
private void ResetLastName()
```

##### `ResetOrganizationName` <a name="ResetOrganizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetOrganizationName"></a>

```csharp
private void ResetOrganizationName()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetPhoneNumber"></a>

```csharp
private void ResetPhoneNumber()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetZipCode` <a name="ResetZipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.resetZipCode"></a>

```csharp
private void ResetZipCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine1Input">AddressLine1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine2Input">AddressLine2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.cityInput">CityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.contactTypeInput">ContactTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.extraParamsInput">ExtraParamsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.faxInput">FaxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.organizationNameInput">OrganizationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.zipCodeInput">ZipCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine1">AddressLine1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine2">AddressLine2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.contactType">ContactType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.countryCode">CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.extraParams">ExtraParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.fax">Fax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.organizationName">OrganizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.zipCode">ZipCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressLine1Input`<sup>Optional</sup> <a name="AddressLine1Input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine1Input"></a>

```csharp
public string AddressLine1Input { get; }
```

- *Type:* string

---

##### `AddressLine2Input`<sup>Optional</sup> <a name="AddressLine2Input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine2Input"></a>

```csharp
public string AddressLine2Input { get; }
```

- *Type:* string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.cityInput"></a>

```csharp
public string CityInput { get; }
```

- *Type:* string

---

##### `ContactTypeInput`<sup>Optional</sup> <a name="ContactTypeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.contactTypeInput"></a>

```csharp
public string ContactTypeInput { get; }
```

- *Type:* string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.countryCodeInput"></a>

```csharp
public string CountryCodeInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `ExtraParamsInput`<sup>Optional</sup> <a name="ExtraParamsInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.extraParamsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraParamsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FaxInput`<sup>Optional</sup> <a name="FaxInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.faxInput"></a>

```csharp
public string FaxInput { get; }
```

- *Type:* string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.firstNameInput"></a>

```csharp
public string FirstNameInput { get; }
```

- *Type:* string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.lastNameInput"></a>

```csharp
public string LastNameInput { get; }
```

- *Type:* string

---

##### `OrganizationNameInput`<sup>Optional</sup> <a name="OrganizationNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.organizationNameInput"></a>

```csharp
public string OrganizationNameInput { get; }
```

- *Type:* string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.phoneNumberInput"></a>

```csharp
public string PhoneNumberInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `ZipCodeInput`<sup>Optional</sup> <a name="ZipCodeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.zipCodeInput"></a>

```csharp
public string ZipCodeInput { get; }
```

- *Type:* string

---

##### `AddressLine1`<sup>Required</sup> <a name="AddressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine1"></a>

```csharp
public string AddressLine1 { get; }
```

- *Type:* string

---

##### `AddressLine2`<sup>Required</sup> <a name="AddressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.addressLine2"></a>

```csharp
public string AddressLine2 { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `ContactType`<sup>Required</sup> <a name="ContactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.contactType"></a>

```csharp
public string ContactType { get; }
```

- *Type:* string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.countryCode"></a>

```csharp
public string CountryCode { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `ExtraParams`<sup>Required</sup> <a name="ExtraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.extraParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraParams { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Fax`<sup>Required</sup> <a name="Fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.fax"></a>

```csharp
public string Fax { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.organizationName"></a>

```csharp
public string OrganizationName { get; }
```

- *Type:* string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `ZipCode`<sup>Required</sup> <a name="ZipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.zipCode"></a>

```csharp
public string ZipCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContactOutputReference.property.internalValue"></a>

```csharp
public Route53DomainsRegisteredDomainRegistrantContact InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainRegistrantContact">Route53DomainsRegisteredDomainRegistrantContact</a>

---


### Route53DomainsRegisteredDomainTechContactOutputReference <a name="Route53DomainsRegisteredDomainTechContactOutputReference" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53DomainsRegisteredDomainTechContactOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetAddressLine1">ResetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetAddressLine2">ResetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetContactType">ResetContactType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetExtraParams">ResetExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetFax">ResetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetLastName">ResetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetOrganizationName">ResetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetZipCode">ResetZipCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressLine1` <a name="ResetAddressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetAddressLine1"></a>

```csharp
private void ResetAddressLine1()
```

##### `ResetAddressLine2` <a name="ResetAddressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetAddressLine2"></a>

```csharp
private void ResetAddressLine2()
```

##### `ResetCity` <a name="ResetCity" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetCity"></a>

```csharp
private void ResetCity()
```

##### `ResetContactType` <a name="ResetContactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetContactType"></a>

```csharp
private void ResetContactType()
```

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetCountryCode"></a>

```csharp
private void ResetCountryCode()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetExtraParams` <a name="ResetExtraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetExtraParams"></a>

```csharp
private void ResetExtraParams()
```

##### `ResetFax` <a name="ResetFax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetFax"></a>

```csharp
private void ResetFax()
```

##### `ResetFirstName` <a name="ResetFirstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetFirstName"></a>

```csharp
private void ResetFirstName()
```

##### `ResetLastName` <a name="ResetLastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetLastName"></a>

```csharp
private void ResetLastName()
```

##### `ResetOrganizationName` <a name="ResetOrganizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetOrganizationName"></a>

```csharp
private void ResetOrganizationName()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetPhoneNumber"></a>

```csharp
private void ResetPhoneNumber()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetZipCode` <a name="ResetZipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.resetZipCode"></a>

```csharp
private void ResetZipCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine1Input">AddressLine1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine2Input">AddressLine2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.cityInput">CityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.contactTypeInput">ContactTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.extraParamsInput">ExtraParamsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.faxInput">FaxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.organizationNameInput">OrganizationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.zipCodeInput">ZipCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine1">AddressLine1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine2">AddressLine2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.contactType">ContactType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.countryCode">CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.extraParams">ExtraParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.fax">Fax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.organizationName">OrganizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.zipCode">ZipCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressLine1Input`<sup>Optional</sup> <a name="AddressLine1Input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine1Input"></a>

```csharp
public string AddressLine1Input { get; }
```

- *Type:* string

---

##### `AddressLine2Input`<sup>Optional</sup> <a name="AddressLine2Input" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine2Input"></a>

```csharp
public string AddressLine2Input { get; }
```

- *Type:* string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.cityInput"></a>

```csharp
public string CityInput { get; }
```

- *Type:* string

---

##### `ContactTypeInput`<sup>Optional</sup> <a name="ContactTypeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.contactTypeInput"></a>

```csharp
public string ContactTypeInput { get; }
```

- *Type:* string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.countryCodeInput"></a>

```csharp
public string CountryCodeInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `ExtraParamsInput`<sup>Optional</sup> <a name="ExtraParamsInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.extraParamsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraParamsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FaxInput`<sup>Optional</sup> <a name="FaxInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.faxInput"></a>

```csharp
public string FaxInput { get; }
```

- *Type:* string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.firstNameInput"></a>

```csharp
public string FirstNameInput { get; }
```

- *Type:* string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.lastNameInput"></a>

```csharp
public string LastNameInput { get; }
```

- *Type:* string

---

##### `OrganizationNameInput`<sup>Optional</sup> <a name="OrganizationNameInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.organizationNameInput"></a>

```csharp
public string OrganizationNameInput { get; }
```

- *Type:* string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.phoneNumberInput"></a>

```csharp
public string PhoneNumberInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `ZipCodeInput`<sup>Optional</sup> <a name="ZipCodeInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.zipCodeInput"></a>

```csharp
public string ZipCodeInput { get; }
```

- *Type:* string

---

##### `AddressLine1`<sup>Required</sup> <a name="AddressLine1" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine1"></a>

```csharp
public string AddressLine1 { get; }
```

- *Type:* string

---

##### `AddressLine2`<sup>Required</sup> <a name="AddressLine2" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.addressLine2"></a>

```csharp
public string AddressLine2 { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `ContactType`<sup>Required</sup> <a name="ContactType" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.contactType"></a>

```csharp
public string ContactType { get; }
```

- *Type:* string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.countryCode"></a>

```csharp
public string CountryCode { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `ExtraParams`<sup>Required</sup> <a name="ExtraParams" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.extraParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraParams { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Fax`<sup>Required</sup> <a name="Fax" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.fax"></a>

```csharp
public string Fax { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.organizationName"></a>

```csharp
public string OrganizationName { get; }
```

- *Type:* string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `ZipCode`<sup>Required</sup> <a name="ZipCode" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.zipCode"></a>

```csharp
public string ZipCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContactOutputReference.property.internalValue"></a>

```csharp
public Route53DomainsRegisteredDomainTechContact InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTechContact">Route53DomainsRegisteredDomainTechContact</a>

---


### Route53DomainsRegisteredDomainTimeoutsOutputReference <a name="Route53DomainsRegisteredDomainTimeoutsOutputReference" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53DomainsRegisteredDomainTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.route53DomainsRegisteredDomain.Route53DomainsRegisteredDomainTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



