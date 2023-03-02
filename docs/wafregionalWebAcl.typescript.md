# `wafregionalWebAcl` Submodule <a name="`wafregionalWebAcl` Submodule" id="@cdktf/provider-aws.wafregionalWebAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafregionalWebAcl <a name="WafregionalWebAcl" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl aws_wafregional_web_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer"></a>

```typescript
import { wafregionalWebAcl } from '@cdktf/provider-aws'

new wafregionalWebAcl.WafregionalWebAcl(scope: Construct, id: string, config: WafregionalWebAclConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig">WafregionalWebAclConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig">WafregionalWebAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.putDefaultAction">putDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.putLoggingConfiguration">putLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.resetLoggingConfiguration">resetLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.resetRule">resetRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDefaultAction` <a name="putDefaultAction" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.putDefaultAction"></a>

```typescript
public putDefaultAction(value: WafregionalWebAclDefaultAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.putDefaultAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultAction">WafregionalWebAclDefaultAction</a>

---

##### `putLoggingConfiguration` <a name="putLoggingConfiguration" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.putLoggingConfiguration"></a>

```typescript
public putLoggingConfiguration(value: WafregionalWebAclLoggingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.putLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfiguration">WafregionalWebAclLoggingConfiguration</a>

---

##### `putRule` <a name="putRule" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.putRule"></a>

```typescript
public putRule(value: IResolvable | WafregionalWebAclRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule">WafregionalWebAclRule</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLoggingConfiguration` <a name="resetLoggingConfiguration" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.resetLoggingConfiguration"></a>

```typescript
public resetLoggingConfiguration(): void
```

##### `resetRule` <a name="resetRule" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.resetRule"></a>

```typescript
public resetRule(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.isConstruct"></a>

```typescript
import { wafregionalWebAcl } from '@cdktf/provider-aws'

wafregionalWebAcl.WafregionalWebAcl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.isTerraformElement"></a>

```typescript
import { wafregionalWebAcl } from '@cdktf/provider-aws'

wafregionalWebAcl.WafregionalWebAcl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.isTerraformResource"></a>

```typescript
import { wafregionalWebAcl } from '@cdktf/provider-aws'

wafregionalWebAcl.WafregionalWebAcl.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.defaultAction">defaultAction</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference">WafregionalWebAclDefaultActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference">WafregionalWebAclLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList">WafregionalWebAclRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.defaultActionInput">defaultActionInput</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultAction">WafregionalWebAclDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.loggingConfigurationInput">loggingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfiguration">WafregionalWebAclLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule">WafregionalWebAclRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.defaultAction"></a>

```typescript
public readonly defaultAction: WafregionalWebAclDefaultActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference">WafregionalWebAclDefaultActionOutputReference</a>

---

##### `loggingConfiguration`<sup>Required</sup> <a name="loggingConfiguration" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: WafregionalWebAclLoggingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference">WafregionalWebAclLoggingConfigurationOutputReference</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.rule"></a>

```typescript
public readonly rule: WafregionalWebAclRuleList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList">WafregionalWebAclRuleList</a>

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.defaultActionInput"></a>

```typescript
public readonly defaultActionInput: WafregionalWebAclDefaultAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultAction">WafregionalWebAclDefaultAction</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loggingConfigurationInput`<sup>Optional</sup> <a name="loggingConfigurationInput" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.loggingConfigurationInput"></a>

```typescript
public readonly loggingConfigurationInput: WafregionalWebAclLoggingConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfiguration">WafregionalWebAclLoggingConfiguration</a>

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | WafregionalWebAclRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule">WafregionalWebAclRule</a>[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafregionalWebAclConfig <a name="WafregionalWebAclConfig" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.Initializer"></a>

```typescript
import { wafregionalWebAcl } from '@cdktf/provider-aws'

const wafregionalWebAclConfig: wafregionalWebAcl.WafregionalWebAclConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.defaultAction">defaultAction</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultAction">WafregionalWebAclDefaultAction</a></code> | default_action block. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#metric_name WafregionalWebAcl#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#name WafregionalWebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#id WafregionalWebAcl#id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfiguration">WafregionalWebAclLoggingConfiguration</a></code> | logging_configuration block. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule">WafregionalWebAclRule</a>[]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#tags WafregionalWebAcl#tags}. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#tags_all WafregionalWebAcl#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.defaultAction"></a>

```typescript
public readonly defaultAction: WafregionalWebAclDefaultAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultAction">WafregionalWebAclDefaultAction</a>

default_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#default_action WafregionalWebAcl#default_action}

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#metric_name WafregionalWebAcl#metric_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#name WafregionalWebAcl#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#id WafregionalWebAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: WafregionalWebAclLoggingConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfiguration">WafregionalWebAclLoggingConfiguration</a>

logging_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#logging_configuration WafregionalWebAcl#logging_configuration}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.rule"></a>

```typescript
public readonly rule: IResolvable | WafregionalWebAclRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule">WafregionalWebAclRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#rule WafregionalWebAcl#rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#tags WafregionalWebAcl#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#tags_all WafregionalWebAcl#tags_all}.

---

### WafregionalWebAclDefaultAction <a name="WafregionalWebAclDefaultAction" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultAction.Initializer"></a>

```typescript
import { wafregionalWebAcl } from '@cdktf/provider-aws'

const wafregionalWebAclDefaultAction: wafregionalWebAcl.WafregionalWebAclDefaultAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultAction.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#type WafregionalWebAcl#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultAction.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#type WafregionalWebAcl#type}.

---

### WafregionalWebAclLoggingConfiguration <a name="WafregionalWebAclLoggingConfiguration" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfiguration.Initializer"></a>

```typescript
import { wafregionalWebAcl } from '@cdktf/provider-aws'

const wafregionalWebAclLoggingConfiguration: wafregionalWebAcl.WafregionalWebAclLoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfiguration.property.logDestination">logDestination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#log_destination WafregionalWebAcl#log_destination}. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfiguration.property.redactedFields">redactedFields</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFields">WafregionalWebAclLoggingConfigurationRedactedFields</a></code> | redacted_fields block. |

---

##### `logDestination`<sup>Required</sup> <a name="logDestination" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfiguration.property.logDestination"></a>

```typescript
public readonly logDestination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#log_destination WafregionalWebAcl#log_destination}.

---

##### `redactedFields`<sup>Optional</sup> <a name="redactedFields" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfiguration.property.redactedFields"></a>

```typescript
public readonly redactedFields: WafregionalWebAclLoggingConfigurationRedactedFields;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFields">WafregionalWebAclLoggingConfigurationRedactedFields</a>

redacted_fields block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#redacted_fields WafregionalWebAcl#redacted_fields}

---

### WafregionalWebAclLoggingConfigurationRedactedFields <a name="WafregionalWebAclLoggingConfigurationRedactedFields" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFields.Initializer"></a>

```typescript
import { wafregionalWebAcl } from '@cdktf/provider-aws'

const wafregionalWebAclLoggingConfigurationRedactedFields: wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFields.property.fieldToMatch">fieldToMatch</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>[]</code> | field_to_match block. |

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFields.property.fieldToMatch"></a>

```typescript
public readonly fieldToMatch: IResolvable | WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>[]

field_to_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#field_to_match WafregionalWebAcl#field_to_match}

---

### WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch <a name="WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch.Initializer"></a>

```typescript
import { wafregionalWebAcl } from '@cdktf/provider-aws'

const wafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch: wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#type WafregionalWebAcl#type}. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch.property.data">data</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#data WafregionalWebAcl#data}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#type WafregionalWebAcl#type}.

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#data WafregionalWebAcl#data}.

---

### WafregionalWebAclRule <a name="WafregionalWebAclRule" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule.Initializer"></a>

```typescript
import { wafregionalWebAcl } from '@cdktf/provider-aws'

const wafregionalWebAclRule: wafregionalWebAcl.WafregionalWebAclRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#priority WafregionalWebAcl#priority}. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule.property.ruleId">ruleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#rule_id WafregionalWebAcl#rule_id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleAction">WafregionalWebAclRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule.property.overrideAction">overrideAction</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideAction">WafregionalWebAclRuleOverrideAction</a></code> | override_action block. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#type WafregionalWebAcl#type}. |

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#priority WafregionalWebAcl#priority}.

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#rule_id WafregionalWebAcl#rule_id}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule.property.action"></a>

```typescript
public readonly action: WafregionalWebAclRuleAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleAction">WafregionalWebAclRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#action WafregionalWebAcl#action}

---

##### `overrideAction`<sup>Optional</sup> <a name="overrideAction" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule.property.overrideAction"></a>

```typescript
public readonly overrideAction: WafregionalWebAclRuleOverrideAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideAction">WafregionalWebAclRuleOverrideAction</a>

override_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#override_action WafregionalWebAcl#override_action}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#type WafregionalWebAcl#type}.

---

### WafregionalWebAclRuleAction <a name="WafregionalWebAclRuleAction" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleAction.Initializer"></a>

```typescript
import { wafregionalWebAcl } from '@cdktf/provider-aws'

const wafregionalWebAclRuleAction: wafregionalWebAcl.WafregionalWebAclRuleAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleAction.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#type WafregionalWebAcl#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleAction.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#type WafregionalWebAcl#type}.

---

### WafregionalWebAclRuleOverrideAction <a name="WafregionalWebAclRuleOverrideAction" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideAction.Initializer"></a>

```typescript
import { wafregionalWebAcl } from '@cdktf/provider-aws'

const wafregionalWebAclRuleOverrideAction: wafregionalWebAcl.WafregionalWebAclRuleOverrideAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideAction.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#type WafregionalWebAcl#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideAction.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#type WafregionalWebAcl#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafregionalWebAclDefaultActionOutputReference <a name="WafregionalWebAclDefaultActionOutputReference" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.Initializer"></a>

```typescript
import { wafregionalWebAcl } from '@cdktf/provider-aws'

new wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultAction">WafregionalWebAclDefaultAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafregionalWebAclDefaultAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultAction">WafregionalWebAclDefaultAction</a>

---


### WafregionalWebAclLoggingConfigurationOutputReference <a name="WafregionalWebAclLoggingConfigurationOutputReference" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.Initializer"></a>

```typescript
import { wafregionalWebAcl } from '@cdktf/provider-aws'

new wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.putRedactedFields">putRedactedFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.resetRedactedFields">resetRedactedFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRedactedFields` <a name="putRedactedFields" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.putRedactedFields"></a>

```typescript
public putRedactedFields(value: WafregionalWebAclLoggingConfigurationRedactedFields): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.putRedactedFields.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFields">WafregionalWebAclLoggingConfigurationRedactedFields</a>

---

##### `resetRedactedFields` <a name="resetRedactedFields" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.resetRedactedFields"></a>

```typescript
public resetRedactedFields(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.redactedFields">redactedFields</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference">WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.logDestinationInput">logDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.redactedFieldsInput">redactedFieldsInput</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFields">WafregionalWebAclLoggingConfigurationRedactedFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.logDestination">logDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfiguration">WafregionalWebAclLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `redactedFields`<sup>Required</sup> <a name="redactedFields" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.redactedFields"></a>

```typescript
public readonly redactedFields: WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference">WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference</a>

---

##### `logDestinationInput`<sup>Optional</sup> <a name="logDestinationInput" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.logDestinationInput"></a>

```typescript
public readonly logDestinationInput: string;
```

- *Type:* string

---

##### `redactedFieldsInput`<sup>Optional</sup> <a name="redactedFieldsInput" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.redactedFieldsInput"></a>

```typescript
public readonly redactedFieldsInput: WafregionalWebAclLoggingConfigurationRedactedFields;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFields">WafregionalWebAclLoggingConfigurationRedactedFields</a>

---

##### `logDestination`<sup>Required</sup> <a name="logDestination" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.logDestination"></a>

```typescript
public readonly logDestination: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafregionalWebAclLoggingConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfiguration">WafregionalWebAclLoggingConfiguration</a>

---


### WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList <a name="WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer"></a>

```typescript
import { wafregionalWebAcl } from '@cdktf/provider-aws'

new wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.get"></a>

```typescript
public get(index: number): WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>[]

---


### WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference <a name="WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer"></a>

```typescript
import { wafregionalWebAcl } from '@cdktf/provider-aws'

new wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.resetData">resetData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetData` <a name="resetData" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.resetData"></a>

```typescript
public resetData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a> | cdktf.IResolvable

---


### WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference <a name="WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.Initializer"></a>

```typescript
import { wafregionalWebAcl } from '@cdktf/provider-aws'

new wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.putFieldToMatch">putFieldToMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldToMatch` <a name="putFieldToMatch" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.putFieldToMatch"></a>

```typescript
public putFieldToMatch(value: IResolvable | WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.putFieldToMatch.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.property.fieldToMatch">fieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList">WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.property.fieldToMatchInput">fieldToMatchInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFields">WafregionalWebAclLoggingConfigurationRedactedFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.property.fieldToMatch"></a>

```typescript
public readonly fieldToMatch: WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList">WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList</a>

---

##### `fieldToMatchInput`<sup>Optional</sup> <a name="fieldToMatchInput" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.property.fieldToMatchInput"></a>

```typescript
public readonly fieldToMatchInput: IResolvable | WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafregionalWebAclLoggingConfigurationRedactedFields;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFields">WafregionalWebAclLoggingConfigurationRedactedFields</a>

---


### WafregionalWebAclRuleActionOutputReference <a name="WafregionalWebAclRuleActionOutputReference" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.Initializer"></a>

```typescript
import { wafregionalWebAcl } from '@cdktf/provider-aws'

new wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleAction">WafregionalWebAclRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafregionalWebAclRuleAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleAction">WafregionalWebAclRuleAction</a>

---


### WafregionalWebAclRuleList <a name="WafregionalWebAclRuleList" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.Initializer"></a>

```typescript
import { wafregionalWebAcl } from '@cdktf/provider-aws'

new wafregionalWebAcl.WafregionalWebAclRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.get"></a>

```typescript
public get(index: number): WafregionalWebAclRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule">WafregionalWebAclRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafregionalWebAclRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule">WafregionalWebAclRule</a>[]

---


### WafregionalWebAclRuleOutputReference <a name="WafregionalWebAclRuleOutputReference" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.Initializer"></a>

```typescript
import { wafregionalWebAcl } from '@cdktf/provider-aws'

new wafregionalWebAcl.WafregionalWebAclRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.putOverrideAction">putOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.resetOverrideAction">resetOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.putAction"></a>

```typescript
public putAction(value: WafregionalWebAclRuleAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleAction">WafregionalWebAclRuleAction</a>

---

##### `putOverrideAction` <a name="putOverrideAction" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.putOverrideAction"></a>

```typescript
public putOverrideAction(value: WafregionalWebAclRuleOverrideAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.putOverrideAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideAction">WafregionalWebAclRuleOverrideAction</a>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetOverrideAction` <a name="resetOverrideAction" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.resetOverrideAction"></a>

```typescript
public resetOverrideAction(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference">WafregionalWebAclRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.overrideAction">overrideAction</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference">WafregionalWebAclRuleOverrideActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleAction">WafregionalWebAclRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.overrideActionInput">overrideActionInput</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideAction">WafregionalWebAclRuleOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.ruleIdInput">ruleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule">WafregionalWebAclRule</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.action"></a>

```typescript
public readonly action: WafregionalWebAclRuleActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference">WafregionalWebAclRuleActionOutputReference</a>

---

##### `overrideAction`<sup>Required</sup> <a name="overrideAction" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.overrideAction"></a>

```typescript
public readonly overrideAction: WafregionalWebAclRuleOverrideActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference">WafregionalWebAclRuleOverrideActionOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: WafregionalWebAclRuleAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleAction">WafregionalWebAclRuleAction</a>

---

##### `overrideActionInput`<sup>Optional</sup> <a name="overrideActionInput" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.overrideActionInput"></a>

```typescript
public readonly overrideActionInput: WafregionalWebAclRuleOverrideAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideAction">WafregionalWebAclRuleOverrideAction</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.ruleIdInput"></a>

```typescript
public readonly ruleIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafregionalWebAclRule | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule">WafregionalWebAclRule</a> | cdktf.IResolvable

---


### WafregionalWebAclRuleOverrideActionOutputReference <a name="WafregionalWebAclRuleOverrideActionOutputReference" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.Initializer"></a>

```typescript
import { wafregionalWebAcl } from '@cdktf/provider-aws'

new wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideAction">WafregionalWebAclRuleOverrideAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafregionalWebAclRuleOverrideAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideAction">WafregionalWebAclRuleOverrideAction</a>

---



