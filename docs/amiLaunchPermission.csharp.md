# `amiLaunchPermission` Submodule <a name="`amiLaunchPermission` Submodule" id="@cdktf/provider-aws.amiLaunchPermission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmiLaunchPermission <a name="AmiLaunchPermission" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission aws_ami_launch_permission}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AmiLaunchPermission(Construct Scope, string Id, AmiLaunchPermissionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig">AmiLaunchPermissionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig">AmiLaunchPermissionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetOrganizationalUnitArn">ResetOrganizationalUnitArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetOrganizationArn">ResetOrganizationArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetGroup"></a>

```csharp
private void ResetGroup()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOrganizationalUnitArn` <a name="ResetOrganizationalUnitArn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetOrganizationalUnitArn"></a>

```csharp
private void ResetOrganizationalUnitArn()
```

##### `ResetOrganizationArn` <a name="ResetOrganizationArn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.resetOrganizationArn"></a>

```csharp
private void ResetOrganizationArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AmiLaunchPermission.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AmiLaunchPermission.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AmiLaunchPermission.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.groupInput">GroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.imageIdInput">ImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationalUnitArnInput">OrganizationalUnitArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationArnInput">OrganizationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.group">Group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationalUnitArn">OrganizationalUnitArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationArn">OrganizationArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.groupInput"></a>

```csharp
public string GroupInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.imageIdInput"></a>

```csharp
public string ImageIdInput { get; }
```

- *Type:* string

---

##### `OrganizationalUnitArnInput`<sup>Optional</sup> <a name="OrganizationalUnitArnInput" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationalUnitArnInput"></a>

```csharp
public string OrganizationalUnitArnInput { get; }
```

- *Type:* string

---

##### `OrganizationArnInput`<sup>Optional</sup> <a name="OrganizationArnInput" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationArnInput"></a>

```csharp
public string OrganizationArnInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.group"></a>

```csharp
public string Group { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

##### `OrganizationalUnitArn`<sup>Required</sup> <a name="OrganizationalUnitArn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationalUnitArn"></a>

```csharp
public string OrganizationalUnitArn { get; }
```

- *Type:* string

---

##### `OrganizationArn`<sup>Required</sup> <a name="OrganizationArn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.organizationArn"></a>

```csharp
public string OrganizationArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermission.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AmiLaunchPermissionConfig <a name="AmiLaunchPermissionConfig" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AmiLaunchPermissionConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ImageId,
    string AccountId = null,
    string Group = null,
    string Id = null,
    string OrganizationalUnitArn = null,
    string OrganizationArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.imageId">ImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#image_id AmiLaunchPermission#image_id}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#account_id AmiLaunchPermission#account_id}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.group">Group</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#group AmiLaunchPermission#group}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#id AmiLaunchPermission#id}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.organizationalUnitArn">OrganizationalUnitArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#organizational_unit_arn AmiLaunchPermission#organizational_unit_arn}. |
| <code><a href="#@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.organizationArn">OrganizationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#organization_arn AmiLaunchPermission#organization_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.imageId"></a>

```csharp
public string ImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#image_id AmiLaunchPermission#image_id}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#account_id AmiLaunchPermission#account_id}.

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.group"></a>

```csharp
public string Group { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#group AmiLaunchPermission#group}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#id AmiLaunchPermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OrganizationalUnitArn`<sup>Optional</sup> <a name="OrganizationalUnitArn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.organizationalUnitArn"></a>

```csharp
public string OrganizationalUnitArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#organizational_unit_arn AmiLaunchPermission#organizational_unit_arn}.

---

##### `OrganizationArn`<sup>Optional</sup> <a name="OrganizationArn" id="@cdktf/provider-aws.amiLaunchPermission.AmiLaunchPermissionConfig.property.organizationArn"></a>

```csharp
public string OrganizationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_launch_permission#organization_arn AmiLaunchPermission#organization_arn}.

---



