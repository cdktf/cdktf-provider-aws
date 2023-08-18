# `aws_transfer_connector`

Refer to the Terraform Registory for docs: [`aws_transfer_connector`](https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector).

# `transferConnector` Submodule <a name="`transferConnector` Submodule" id="@cdktf/provider-aws.transferConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferConnector <a name="TransferConnector" id="@cdktf/provider-aws.transferConnector.TransferConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector aws_transfer_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferConnector(Construct Scope, string Id, TransferConnectorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig">TransferConnectorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.transferConnector.TransferConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig">TransferConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.putAs2Config">PutAs2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetLoggingRole">ResetLoggingRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferConnector.TransferConnector.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.transferConnector.TransferConnector.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.transferConnector.TransferConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferConnector.TransferConnector.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.transferConnector.TransferConnector.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.transferConnector.TransferConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.transferConnector.TransferConnector.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.transferConnector.TransferConnector.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAs2Config` <a name="PutAs2Config" id="@cdktf/provider-aws.transferConnector.TransferConnector.putAs2Config"></a>

```csharp
private void PutAs2Config(TransferConnectorAs2Config Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferConnector.TransferConnector.putAs2Config.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLoggingRole` <a name="ResetLoggingRole" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetLoggingRole"></a>

```csharp
private void ResetLoggingRole()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.transferConnector.TransferConnector.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.transferConnector.TransferConnector.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TransferConnector.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.transferConnector.TransferConnector.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.transferConnector.TransferConnector.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TransferConnector.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.transferConnector.TransferConnector.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.transferConnector.TransferConnector.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TransferConnector.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.transferConnector.TransferConnector.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.as2Config">As2Config</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference">TransferConnectorAs2ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.connectorId">ConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.accessRoleInput">AccessRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.as2ConfigInput">As2ConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.loggingRoleInput">LoggingRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.accessRole">AccessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.loggingRole">LoggingRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.url">Url</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `As2Config`<sup>Required</sup> <a name="As2Config" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.as2Config"></a>

```csharp
public TransferConnectorAs2ConfigOutputReference As2Config { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference">TransferConnectorAs2ConfigOutputReference</a>

---

##### `ConnectorId`<sup>Required</sup> <a name="ConnectorId" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.connectorId"></a>

```csharp
public string ConnectorId { get; }
```

- *Type:* string

---

##### `AccessRoleInput`<sup>Optional</sup> <a name="AccessRoleInput" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.accessRoleInput"></a>

```csharp
public string AccessRoleInput { get; }
```

- *Type:* string

---

##### `As2ConfigInput`<sup>Optional</sup> <a name="As2ConfigInput" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.as2ConfigInput"></a>

```csharp
public TransferConnectorAs2Config As2ConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoggingRoleInput`<sup>Optional</sup> <a name="LoggingRoleInput" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.loggingRoleInput"></a>

```csharp
public string LoggingRoleInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `AccessRole`<sup>Required</sup> <a name="AccessRole" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.accessRole"></a>

```csharp
public string AccessRole { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoggingRole`<sup>Required</sup> <a name="LoggingRole" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.loggingRole"></a>

```csharp
public string LoggingRole { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnector.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.transferConnector.TransferConnector.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransferConnectorAs2Config <a name="TransferConnectorAs2Config" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferConnectorAs2Config {
    string Compression,
    string EncryptionAlgorithm,
    string LocalProfileId,
    string MdnResponse,
    string PartnerProfileId,
    string SigningAlgorithm,
    string MdnSigningAlgorithm = null,
    string MessageSubject = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.compression">Compression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#compression TransferConnector#compression}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#encryption_algorithm TransferConnector#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.localProfileId">LocalProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#local_profile_id TransferConnector#local_profile_id}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.mdnResponse">MdnResponse</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#mdn_response TransferConnector#mdn_response}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.partnerProfileId">PartnerProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#partner_profile_id TransferConnector#partner_profile_id}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.signingAlgorithm">SigningAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#signing_algorithm TransferConnector#signing_algorithm}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.mdnSigningAlgorithm">MdnSigningAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#mdn_signing_algorithm TransferConnector#mdn_signing_algorithm}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.messageSubject">MessageSubject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#message_subject TransferConnector#message_subject}. |

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.compression"></a>

```csharp
public string Compression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#compression TransferConnector#compression}.

---

##### `EncryptionAlgorithm`<sup>Required</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.encryptionAlgorithm"></a>

```csharp
public string EncryptionAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#encryption_algorithm TransferConnector#encryption_algorithm}.

---

##### `LocalProfileId`<sup>Required</sup> <a name="LocalProfileId" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.localProfileId"></a>

```csharp
public string LocalProfileId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#local_profile_id TransferConnector#local_profile_id}.

---

##### `MdnResponse`<sup>Required</sup> <a name="MdnResponse" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.mdnResponse"></a>

```csharp
public string MdnResponse { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#mdn_response TransferConnector#mdn_response}.

---

##### `PartnerProfileId`<sup>Required</sup> <a name="PartnerProfileId" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.partnerProfileId"></a>

```csharp
public string PartnerProfileId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#partner_profile_id TransferConnector#partner_profile_id}.

---

##### `SigningAlgorithm`<sup>Required</sup> <a name="SigningAlgorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.signingAlgorithm"></a>

```csharp
public string SigningAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#signing_algorithm TransferConnector#signing_algorithm}.

---

##### `MdnSigningAlgorithm`<sup>Optional</sup> <a name="MdnSigningAlgorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.mdnSigningAlgorithm"></a>

```csharp
public string MdnSigningAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#mdn_signing_algorithm TransferConnector#mdn_signing_algorithm}.

---

##### `MessageSubject`<sup>Optional</sup> <a name="MessageSubject" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config.property.messageSubject"></a>

```csharp
public string MessageSubject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#message_subject TransferConnector#message_subject}.

---

### TransferConnectorConfig <a name="TransferConnectorConfig" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferConnectorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccessRole,
    TransferConnectorAs2Config As2Config,
    string Url,
    string Id = null,
    string LoggingRole = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.accessRole">AccessRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#access_role TransferConnector#access_role}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.as2Config">As2Config</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | as2_config block. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#url TransferConnector#url}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#id TransferConnector#id}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.loggingRole">LoggingRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#logging_role TransferConnector#logging_role}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#tags TransferConnector#tags}. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#tags_all TransferConnector#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccessRole`<sup>Required</sup> <a name="AccessRole" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.accessRole"></a>

```csharp
public string AccessRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#access_role TransferConnector#access_role}.

---

##### `As2Config`<sup>Required</sup> <a name="As2Config" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.as2Config"></a>

```csharp
public TransferConnectorAs2Config As2Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

as2_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#as2_config TransferConnector#as2_config}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#url TransferConnector#url}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#id TransferConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoggingRole`<sup>Optional</sup> <a name="LoggingRole" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.loggingRole"></a>

```csharp
public string LoggingRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#logging_role TransferConnector#logging_role}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#tags TransferConnector#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.transferConnector.TransferConnectorConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.0/docs/resources/transfer_connector#tags_all TransferConnector#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### TransferConnectorAs2ConfigOutputReference <a name="TransferConnectorAs2ConfigOutputReference" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferConnectorAs2ConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMdnSigningAlgorithm">ResetMdnSigningAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMessageSubject">ResetMessageSubject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMdnSigningAlgorithm` <a name="ResetMdnSigningAlgorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMdnSigningAlgorithm"></a>

```csharp
private void ResetMdnSigningAlgorithm()
```

##### `ResetMessageSubject` <a name="ResetMessageSubject" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMessageSubject"></a>

```csharp
private void ResetMessageSubject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compressionInput">CompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithmInput">EncryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileIdInput">LocalProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponseInput">MdnResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithmInput">MdnSigningAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubjectInput">MessageSubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileIdInput">PartnerProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithmInput">SigningAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compression">Compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileId">LocalProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponse">MdnResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithm">MdnSigningAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubject">MessageSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileId">PartnerProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithm">SigningAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compressionInput"></a>

```csharp
public string CompressionInput { get; }
```

- *Type:* string

---

##### `EncryptionAlgorithmInput`<sup>Optional</sup> <a name="EncryptionAlgorithmInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithmInput"></a>

```csharp
public string EncryptionAlgorithmInput { get; }
```

- *Type:* string

---

##### `LocalProfileIdInput`<sup>Optional</sup> <a name="LocalProfileIdInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileIdInput"></a>

```csharp
public string LocalProfileIdInput { get; }
```

- *Type:* string

---

##### `MdnResponseInput`<sup>Optional</sup> <a name="MdnResponseInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponseInput"></a>

```csharp
public string MdnResponseInput { get; }
```

- *Type:* string

---

##### `MdnSigningAlgorithmInput`<sup>Optional</sup> <a name="MdnSigningAlgorithmInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithmInput"></a>

```csharp
public string MdnSigningAlgorithmInput { get; }
```

- *Type:* string

---

##### `MessageSubjectInput`<sup>Optional</sup> <a name="MessageSubjectInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubjectInput"></a>

```csharp
public string MessageSubjectInput { get; }
```

- *Type:* string

---

##### `PartnerProfileIdInput`<sup>Optional</sup> <a name="PartnerProfileIdInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileIdInput"></a>

```csharp
public string PartnerProfileIdInput { get; }
```

- *Type:* string

---

##### `SigningAlgorithmInput`<sup>Optional</sup> <a name="SigningAlgorithmInput" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithmInput"></a>

```csharp
public string SigningAlgorithmInput { get; }
```

- *Type:* string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compression"></a>

```csharp
public string Compression { get; }
```

- *Type:* string

---

##### `EncryptionAlgorithm`<sup>Required</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithm"></a>

```csharp
public string EncryptionAlgorithm { get; }
```

- *Type:* string

---

##### `LocalProfileId`<sup>Required</sup> <a name="LocalProfileId" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileId"></a>

```csharp
public string LocalProfileId { get; }
```

- *Type:* string

---

##### `MdnResponse`<sup>Required</sup> <a name="MdnResponse" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponse"></a>

```csharp
public string MdnResponse { get; }
```

- *Type:* string

---

##### `MdnSigningAlgorithm`<sup>Required</sup> <a name="MdnSigningAlgorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithm"></a>

```csharp
public string MdnSigningAlgorithm { get; }
```

- *Type:* string

---

##### `MessageSubject`<sup>Required</sup> <a name="MessageSubject" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubject"></a>

```csharp
public string MessageSubject { get; }
```

- *Type:* string

---

##### `PartnerProfileId`<sup>Required</sup> <a name="PartnerProfileId" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileId"></a>

```csharp
public string PartnerProfileId { get; }
```

- *Type:* string

---

##### `SigningAlgorithm`<sup>Required</sup> <a name="SigningAlgorithm" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithm"></a>

```csharp
public string SigningAlgorithm { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferConnector.TransferConnectorAs2ConfigOutputReference.property.internalValue"></a>

```csharp
public TransferConnectorAs2Config InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

---



