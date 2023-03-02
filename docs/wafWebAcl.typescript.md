# `wafWebAcl` Submodule <a name="`wafWebAcl` Submodule" id="@cdktf/provider-aws.wafWebAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafWebAcl <a name="WafWebAcl" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl aws_waf_web_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer"></a>

```typescript
import { wafWebAcl } from '@cdktf/provider-aws'

new wafWebAcl.WafWebAcl(scope: Construct, id: string, config: WafWebAclConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig">WafWebAclConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig">WafWebAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.putDefaultAction">putDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.putLoggingConfiguration">putLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.resetLoggingConfiguration">resetLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDefaultAction` <a name="putDefaultAction" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.putDefaultAction"></a>

```typescript
public putDefaultAction(value: WafWebAclDefaultAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.putDefaultAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultAction">WafWebAclDefaultAction</a>

---

##### `putLoggingConfiguration` <a name="putLoggingConfiguration" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.putLoggingConfiguration"></a>

```typescript
public putLoggingConfiguration(value: WafWebAclLoggingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.putLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration">WafWebAclLoggingConfiguration</a>

---

##### `putRules` <a name="putRules" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.putRules"></a>

```typescript
public putRules(value: IResolvable | WafWebAclRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules">WafWebAclRules</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLoggingConfiguration` <a name="resetLoggingConfiguration" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.resetLoggingConfiguration"></a>

```typescript
public resetLoggingConfiguration(): void
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.resetRules"></a>

```typescript
public resetRules(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.isConstruct"></a>

```typescript
import { wafWebAcl } from '@cdktf/provider-aws'

wafWebAcl.WafWebAcl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.isTerraformElement"></a>

```typescript
import { wafWebAcl } from '@cdktf/provider-aws'

wafWebAcl.WafWebAcl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.isTerraformResource"></a>

```typescript
import { wafWebAcl } from '@cdktf/provider-aws'

wafWebAcl.WafWebAcl.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.defaultAction">defaultAction</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference">WafWebAclDefaultActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference">WafWebAclLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList">WafWebAclRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.defaultActionInput">defaultActionInput</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultAction">WafWebAclDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.loggingConfigurationInput">loggingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration">WafWebAclLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules">WafWebAclRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.defaultAction"></a>

```typescript
public readonly defaultAction: WafWebAclDefaultActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference">WafWebAclDefaultActionOutputReference</a>

---

##### `loggingConfiguration`<sup>Required</sup> <a name="loggingConfiguration" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: WafWebAclLoggingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference">WafWebAclLoggingConfigurationOutputReference</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.rules"></a>

```typescript
public readonly rules: WafWebAclRulesList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList">WafWebAclRulesList</a>

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.defaultActionInput"></a>

```typescript
public readonly defaultActionInput: WafWebAclDefaultAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultAction">WafWebAclDefaultAction</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loggingConfigurationInput`<sup>Optional</sup> <a name="loggingConfigurationInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.loggingConfigurationInput"></a>

```typescript
public readonly loggingConfigurationInput: WafWebAclLoggingConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration">WafWebAclLoggingConfiguration</a>

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | WafWebAclRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules">WafWebAclRules</a>[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafWebAcl.WafWebAcl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafWebAclConfig <a name="WafWebAclConfig" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.Initializer"></a>

```typescript
import { wafWebAcl } from '@cdktf/provider-aws'

const wafWebAclConfig: wafWebAcl.WafWebAclConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.defaultAction">defaultAction</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultAction">WafWebAclDefaultAction</a></code> | default_action block. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#metric_name WafWebAcl#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#name WafWebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#id WafWebAcl#id}. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration">WafWebAclLoggingConfiguration</a></code> | logging_configuration block. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules">WafWebAclRules</a>[]</code> | rules block. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#tags WafWebAcl#tags}. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#tags_all WafWebAcl#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.defaultAction"></a>

```typescript
public readonly defaultAction: WafWebAclDefaultAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultAction">WafWebAclDefaultAction</a>

default_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#default_action WafWebAcl#default_action}

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#metric_name WafWebAcl#metric_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#name WafWebAcl#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#id WafWebAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: WafWebAclLoggingConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration">WafWebAclLoggingConfiguration</a>

logging_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#logging_configuration WafWebAcl#logging_configuration}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | WafWebAclRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules">WafWebAclRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#rules WafWebAcl#rules}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#tags WafWebAcl#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.wafWebAcl.WafWebAclConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#tags_all WafWebAcl#tags_all}.

---

### WafWebAclDefaultAction <a name="WafWebAclDefaultAction" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultAction.Initializer"></a>

```typescript
import { wafWebAcl } from '@cdktf/provider-aws'

const wafWebAclDefaultAction: wafWebAcl.WafWebAclDefaultAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultAction.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#type WafWebAcl#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultAction.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#type WafWebAcl#type}.

---

### WafWebAclLoggingConfiguration <a name="WafWebAclLoggingConfiguration" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration.Initializer"></a>

```typescript
import { wafWebAcl } from '@cdktf/provider-aws'

const wafWebAclLoggingConfiguration: wafWebAcl.WafWebAclLoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration.property.logDestination">logDestination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#log_destination WafWebAcl#log_destination}. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration.property.redactedFields">redactedFields</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFields">WafWebAclLoggingConfigurationRedactedFields</a></code> | redacted_fields block. |

---

##### `logDestination`<sup>Required</sup> <a name="logDestination" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration.property.logDestination"></a>

```typescript
public readonly logDestination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#log_destination WafWebAcl#log_destination}.

---

##### `redactedFields`<sup>Optional</sup> <a name="redactedFields" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration.property.redactedFields"></a>

```typescript
public readonly redactedFields: WafWebAclLoggingConfigurationRedactedFields;
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFields">WafWebAclLoggingConfigurationRedactedFields</a>

redacted_fields block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#redacted_fields WafWebAcl#redacted_fields}

---

### WafWebAclLoggingConfigurationRedactedFields <a name="WafWebAclLoggingConfigurationRedactedFields" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFields.Initializer"></a>

```typescript
import { wafWebAcl } from '@cdktf/provider-aws'

const wafWebAclLoggingConfigurationRedactedFields: wafWebAcl.WafWebAclLoggingConfigurationRedactedFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFields.property.fieldToMatch">fieldToMatch</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>[]</code> | field_to_match block. |

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFields.property.fieldToMatch"></a>

```typescript
public readonly fieldToMatch: IResolvable | WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>[]

field_to_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#field_to_match WafWebAcl#field_to_match}

---

### WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch <a name="WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch.Initializer"></a>

```typescript
import { wafWebAcl } from '@cdktf/provider-aws'

const wafWebAclLoggingConfigurationRedactedFieldsFieldToMatch: wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#type WafWebAcl#type}. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch.property.data">data</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#data WafWebAcl#data}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#type WafWebAcl#type}.

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#data WafWebAcl#data}.

---

### WafWebAclRules <a name="WafWebAclRules" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRules.Initializer"></a>

```typescript
import { wafWebAcl } from '@cdktf/provider-aws'

const wafWebAclRules: wafWebAcl.WafWebAclRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#priority WafWebAcl#priority}. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules.property.ruleId">ruleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#rule_id WafWebAcl#rule_id}. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesAction">WafWebAclRulesAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules.property.overrideAction">overrideAction</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideAction">WafWebAclRulesOverrideAction</a></code> | override_action block. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#type WafWebAcl#type}. |

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRules.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#priority WafWebAcl#priority}.

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRules.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#rule_id WafWebAcl#rule_id}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRules.property.action"></a>

```typescript
public readonly action: WafWebAclRulesAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesAction">WafWebAclRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#action WafWebAcl#action}

---

##### `overrideAction`<sup>Optional</sup> <a name="overrideAction" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRules.property.overrideAction"></a>

```typescript
public readonly overrideAction: WafWebAclRulesOverrideAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideAction">WafWebAclRulesOverrideAction</a>

override_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#override_action WafWebAcl#override_action}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRules.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#type WafWebAcl#type}.

---

### WafWebAclRulesAction <a name="WafWebAclRulesAction" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesAction.Initializer"></a>

```typescript
import { wafWebAcl } from '@cdktf/provider-aws'

const wafWebAclRulesAction: wafWebAcl.WafWebAclRulesAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesAction.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#type WafWebAcl#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesAction.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#type WafWebAcl#type}.

---

### WafWebAclRulesOverrideAction <a name="WafWebAclRulesOverrideAction" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideAction.Initializer"></a>

```typescript
import { wafWebAcl } from '@cdktf/provider-aws'

const wafWebAclRulesOverrideAction: wafWebAcl.WafWebAclRulesOverrideAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideAction.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#type WafWebAcl#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideAction.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl#type WafWebAcl#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafWebAclDefaultActionOutputReference <a name="WafWebAclDefaultActionOutputReference" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.Initializer"></a>

```typescript
import { wafWebAcl } from '@cdktf/provider-aws'

new wafWebAcl.WafWebAclDefaultActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultAction">WafWebAclDefaultAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafWebAclDefaultAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclDefaultAction">WafWebAclDefaultAction</a>

---


### WafWebAclLoggingConfigurationOutputReference <a name="WafWebAclLoggingConfigurationOutputReference" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.Initializer"></a>

```typescript
import { wafWebAcl } from '@cdktf/provider-aws'

new wafWebAcl.WafWebAclLoggingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.putRedactedFields">putRedactedFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.resetRedactedFields">resetRedactedFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRedactedFields` <a name="putRedactedFields" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.putRedactedFields"></a>

```typescript
public putRedactedFields(value: WafWebAclLoggingConfigurationRedactedFields): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.putRedactedFields.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFields">WafWebAclLoggingConfigurationRedactedFields</a>

---

##### `resetRedactedFields` <a name="resetRedactedFields" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.resetRedactedFields"></a>

```typescript
public resetRedactedFields(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.redactedFields">redactedFields</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference">WafWebAclLoggingConfigurationRedactedFieldsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.logDestinationInput">logDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.redactedFieldsInput">redactedFieldsInput</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFields">WafWebAclLoggingConfigurationRedactedFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.logDestination">logDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration">WafWebAclLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `redactedFields`<sup>Required</sup> <a name="redactedFields" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.redactedFields"></a>

```typescript
public readonly redactedFields: WafWebAclLoggingConfigurationRedactedFieldsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference">WafWebAclLoggingConfigurationRedactedFieldsOutputReference</a>

---

##### `logDestinationInput`<sup>Optional</sup> <a name="logDestinationInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.logDestinationInput"></a>

```typescript
public readonly logDestinationInput: string;
```

- *Type:* string

---

##### `redactedFieldsInput`<sup>Optional</sup> <a name="redactedFieldsInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.redactedFieldsInput"></a>

```typescript
public readonly redactedFieldsInput: WafWebAclLoggingConfigurationRedactedFields;
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFields">WafWebAclLoggingConfigurationRedactedFields</a>

---

##### `logDestination`<sup>Required</sup> <a name="logDestination" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.logDestination"></a>

```typescript
public readonly logDestination: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafWebAclLoggingConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfiguration">WafWebAclLoggingConfiguration</a>

---


### WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList <a name="WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer"></a>

```typescript
import { wafWebAcl } from '@cdktf/provider-aws'

new wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.get"></a>

```typescript
public get(index: number): WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>[]

---


### WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference <a name="WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer"></a>

```typescript
import { wafWebAcl } from '@cdktf/provider-aws'

new wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.resetData">resetData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetData` <a name="resetData" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.resetData"></a>

```typescript
public resetData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a> | cdktf.IResolvable

---


### WafWebAclLoggingConfigurationRedactedFieldsOutputReference <a name="WafWebAclLoggingConfigurationRedactedFieldsOutputReference" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.Initializer"></a>

```typescript
import { wafWebAcl } from '@cdktf/provider-aws'

new wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.putFieldToMatch">putFieldToMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldToMatch` <a name="putFieldToMatch" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.putFieldToMatch"></a>

```typescript
public putFieldToMatch(value: IResolvable | WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.putFieldToMatch.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.property.fieldToMatch">fieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList">WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.property.fieldToMatchInput">fieldToMatchInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFields">WafWebAclLoggingConfigurationRedactedFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.property.fieldToMatch"></a>

```typescript
public readonly fieldToMatch: WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList">WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList</a>

---

##### `fieldToMatchInput`<sup>Optional</sup> <a name="fieldToMatchInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.property.fieldToMatchInput"></a>

```typescript
public readonly fieldToMatchInput: IResolvable | WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafWebAclLoggingConfigurationRedactedFields;
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclLoggingConfigurationRedactedFields">WafWebAclLoggingConfigurationRedactedFields</a>

---


### WafWebAclRulesActionOutputReference <a name="WafWebAclRulesActionOutputReference" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.Initializer"></a>

```typescript
import { wafWebAcl } from '@cdktf/provider-aws'

new wafWebAcl.WafWebAclRulesActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesAction">WafWebAclRulesAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafWebAclRulesAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesAction">WafWebAclRulesAction</a>

---


### WafWebAclRulesList <a name="WafWebAclRulesList" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.Initializer"></a>

```typescript
import { wafWebAcl } from '@cdktf/provider-aws'

new wafWebAcl.WafWebAclRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.get"></a>

```typescript
public get(index: number): WafWebAclRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules">WafWebAclRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafWebAclRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules">WafWebAclRules</a>[]

---


### WafWebAclRulesOutputReference <a name="WafWebAclRulesOutputReference" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.Initializer"></a>

```typescript
import { wafWebAcl } from '@cdktf/provider-aws'

new wafWebAcl.WafWebAclRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.putOverrideAction">putOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.resetOverrideAction">resetOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.putAction"></a>

```typescript
public putAction(value: WafWebAclRulesAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesAction">WafWebAclRulesAction</a>

---

##### `putOverrideAction` <a name="putOverrideAction" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.putOverrideAction"></a>

```typescript
public putOverrideAction(value: WafWebAclRulesOverrideAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.putOverrideAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideAction">WafWebAclRulesOverrideAction</a>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetOverrideAction` <a name="resetOverrideAction" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.resetOverrideAction"></a>

```typescript
public resetOverrideAction(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference">WafWebAclRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.overrideAction">overrideAction</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference">WafWebAclRulesOverrideActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesAction">WafWebAclRulesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.overrideActionInput">overrideActionInput</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideAction">WafWebAclRulesOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.ruleIdInput">ruleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules">WafWebAclRules</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.action"></a>

```typescript
public readonly action: WafWebAclRulesActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesActionOutputReference">WafWebAclRulesActionOutputReference</a>

---

##### `overrideAction`<sup>Required</sup> <a name="overrideAction" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.overrideAction"></a>

```typescript
public readonly overrideAction: WafWebAclRulesOverrideActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference">WafWebAclRulesOverrideActionOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: WafWebAclRulesAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesAction">WafWebAclRulesAction</a>

---

##### `overrideActionInput`<sup>Optional</sup> <a name="overrideActionInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.overrideActionInput"></a>

```typescript
public readonly overrideActionInput: WafWebAclRulesOverrideAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideAction">WafWebAclRulesOverrideAction</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.ruleIdInput"></a>

```typescript
public readonly ruleIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafWebAclRules | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRules">WafWebAclRules</a> | cdktf.IResolvable

---


### WafWebAclRulesOverrideActionOutputReference <a name="WafWebAclRulesOverrideActionOutputReference" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.Initializer"></a>

```typescript
import { wafWebAcl } from '@cdktf/provider-aws'

new wafWebAcl.WafWebAclRulesOverrideActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideAction">WafWebAclRulesOverrideAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafWebAclRulesOverrideAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafWebAcl.WafWebAclRulesOverrideAction">WafWebAclRulesOverrideAction</a>

---



