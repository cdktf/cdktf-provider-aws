# `xraySamplingRule` Submodule <a name="`xraySamplingRule` Submodule" id="@cdktf/provider-aws.xraySamplingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### XraySamplingRule <a name="XraySamplingRule" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule aws_xray_sampling_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new XraySamplingRule(Construct Scope, string Id, XraySamplingRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig">XraySamplingRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig">XraySamplingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetRuleName">ResetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRuleName` <a name="ResetRuleName" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetRuleName"></a>

```csharp
private void ResetRuleName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

XraySamplingRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

XraySamplingRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

XraySamplingRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.attributesInput">AttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.fixedRateInput">FixedRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.httpMethodInput">HttpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.reservoirSizeInput">ReservoirSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.resourceArnInput">ResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.ruleNameInput">RuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.serviceTypeInput">ServiceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.urlPathInput">UrlPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.versionInput">VersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.attributes">Attributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.fixedRate">FixedRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.httpMethod">HttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.reservoirSize">ReservoirSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.serviceType">ServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.urlPath">UrlPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.version">Version</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.attributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FixedRateInput`<sup>Optional</sup> <a name="FixedRateInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.fixedRateInput"></a>

```csharp
public double FixedRateInput { get; }
```

- *Type:* double

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.httpMethodInput"></a>

```csharp
public string HttpMethodInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ReservoirSizeInput`<sup>Optional</sup> <a name="ReservoirSizeInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.reservoirSizeInput"></a>

```csharp
public double ReservoirSizeInput { get; }
```

- *Type:* double

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.resourceArnInput"></a>

```csharp
public string ResourceArnInput { get; }
```

- *Type:* string

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.ruleNameInput"></a>

```csharp
public string RuleNameInput { get; }
```

- *Type:* string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `ServiceTypeInput`<sup>Optional</sup> <a name="ServiceTypeInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.serviceTypeInput"></a>

```csharp
public string ServiceTypeInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UrlPathInput`<sup>Optional</sup> <a name="UrlPathInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.urlPathInput"></a>

```csharp
public string UrlPathInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.versionInput"></a>

```csharp
public double VersionInput { get; }
```

- *Type:* double

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.attributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Attributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FixedRate`<sup>Required</sup> <a name="FixedRate" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.fixedRate"></a>

```csharp
public double FixedRate { get; }
```

- *Type:* double

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.httpMethod"></a>

```csharp
public string HttpMethod { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ReservoirSize`<sup>Required</sup> <a name="ReservoirSize" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.reservoirSize"></a>

```csharp
public double ReservoirSize { get; }
```

- *Type:* double

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.serviceType"></a>

```csharp
public string ServiceType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UrlPath`<sup>Required</sup> <a name="UrlPath" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.urlPath"></a>

```csharp
public string UrlPath { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### XraySamplingRuleConfig <a name="XraySamplingRuleConfig" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new XraySamplingRuleConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double FixedRate,
    string Host,
    string HttpMethod,
    double Priority,
    double ReservoirSize,
    string ResourceArn,
    string ServiceName,
    string ServiceType,
    string UrlPath,
    double Version,
    System.Collections.Generic.IDictionary<string, string> Attributes = null,
    string Id = null,
    string RuleName = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.fixedRate">FixedRate</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#fixed_rate XraySamplingRule#fixed_rate}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.host">Host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#host XraySamplingRule#host}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.httpMethod">HttpMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#http_method XraySamplingRule#http_method}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#priority XraySamplingRule#priority}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.reservoirSize">ReservoirSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#reservoir_size XraySamplingRule#reservoir_size}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.resourceArn">ResourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#resource_arn XraySamplingRule#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.serviceName">ServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#service_name XraySamplingRule#service_name}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.serviceType">ServiceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#service_type XraySamplingRule#service_type}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.urlPath">UrlPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#url_path XraySamplingRule#url_path}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.version">Version</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#version XraySamplingRule#version}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.attributes">Attributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#attributes XraySamplingRule#attributes}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#id XraySamplingRule#id}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.ruleName">RuleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#rule_name XraySamplingRule#rule_name}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#tags XraySamplingRule#tags}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#tags_all XraySamplingRule#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FixedRate`<sup>Required</sup> <a name="FixedRate" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.fixedRate"></a>

```csharp
public double FixedRate { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#fixed_rate XraySamplingRule#fixed_rate}.

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#host XraySamplingRule#host}.

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.httpMethod"></a>

```csharp
public string HttpMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#http_method XraySamplingRule#http_method}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#priority XraySamplingRule#priority}.

---

##### `ReservoirSize`<sup>Required</sup> <a name="ReservoirSize" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.reservoirSize"></a>

```csharp
public double ReservoirSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#reservoir_size XraySamplingRule#reservoir_size}.

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.resourceArn"></a>

```csharp
public string ResourceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#resource_arn XraySamplingRule#resource_arn}.

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#service_name XraySamplingRule#service_name}.

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.serviceType"></a>

```csharp
public string ServiceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#service_type XraySamplingRule#service_type}.

---

##### `UrlPath`<sup>Required</sup> <a name="UrlPath" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.urlPath"></a>

```csharp
public string UrlPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#url_path XraySamplingRule#url_path}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.version"></a>

```csharp
public double Version { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#version XraySamplingRule#version}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.attributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Attributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#attributes XraySamplingRule#attributes}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#id XraySamplingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RuleName`<sup>Optional</sup> <a name="RuleName" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.ruleName"></a>

```csharp
public string RuleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#rule_name XraySamplingRule#rule_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#tags XraySamplingRule#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#tags_all XraySamplingRule#tags_all}.

---



