# `wafregionalRuleGroup` Submodule <a name="`wafregionalRuleGroup` Submodule" id="@cdktf/provider-aws.wafregionalRuleGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafregionalRuleGroup <a name="WafregionalRuleGroup" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group aws_wafregional_rule_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer"></a>

```typescript
import { wafregionalRuleGroup } from '@cdktf/provider-aws'

new wafregionalRuleGroup.WafregionalRuleGroup(scope: Construct, id: string, config: WafregionalRuleGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig">WafregionalRuleGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig">WafregionalRuleGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.putActivatedRule">putActivatedRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetActivatedRule">resetActivatedRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putActivatedRule` <a name="putActivatedRule" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.putActivatedRule"></a>

```typescript
public putActivatedRule(value: IResolvable | WafregionalRuleGroupActivatedRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.putActivatedRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule">WafregionalRuleGroupActivatedRule</a>[]

---

##### `resetActivatedRule` <a name="resetActivatedRule" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetActivatedRule"></a>

```typescript
public resetActivatedRule(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.isConstruct"></a>

```typescript
import { wafregionalRuleGroup } from '@cdktf/provider-aws'

wafregionalRuleGroup.WafregionalRuleGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.isTerraformElement"></a>

```typescript
import { wafregionalRuleGroup } from '@cdktf/provider-aws'

wafregionalRuleGroup.WafregionalRuleGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.isTerraformResource"></a>

```typescript
import { wafregionalRuleGroup } from '@cdktf/provider-aws'

wafregionalRuleGroup.WafregionalRuleGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.activatedRule">activatedRule</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList">WafregionalRuleGroupActivatedRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.activatedRuleInput">activatedRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule">WafregionalRuleGroupActivatedRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `activatedRule`<sup>Required</sup> <a name="activatedRule" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.activatedRule"></a>

```typescript
public readonly activatedRule: WafregionalRuleGroupActivatedRuleList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList">WafregionalRuleGroupActivatedRuleList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `activatedRuleInput`<sup>Optional</sup> <a name="activatedRuleInput" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.activatedRuleInput"></a>

```typescript
public readonly activatedRuleInput: IResolvable | WafregionalRuleGroupActivatedRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule">WafregionalRuleGroupActivatedRule</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafregionalRuleGroupActivatedRule <a name="WafregionalRuleGroupActivatedRule" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule.Initializer"></a>

```typescript
import { wafregionalRuleGroup } from '@cdktf/provider-aws'

const wafregionalRuleGroupActivatedRule: wafregionalRuleGroup.WafregionalRuleGroupActivatedRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction">WafregionalRuleGroupActivatedRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#priority WafregionalRuleGroup#priority}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule.property.ruleId">ruleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#rule_id WafregionalRuleGroup#rule_id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#type WafregionalRuleGroup#type}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule.property.action"></a>

```typescript
public readonly action: WafregionalRuleGroupActivatedRuleAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction">WafregionalRuleGroupActivatedRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#action WafregionalRuleGroup#action}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#priority WafregionalRuleGroup#priority}.

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#rule_id WafregionalRuleGroup#rule_id}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#type WafregionalRuleGroup#type}.

---

### WafregionalRuleGroupActivatedRuleAction <a name="WafregionalRuleGroupActivatedRuleAction" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction.Initializer"></a>

```typescript
import { wafregionalRuleGroup } from '@cdktf/provider-aws'

const wafregionalRuleGroupActivatedRuleAction: wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#type WafregionalRuleGroup#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#type WafregionalRuleGroup#type}.

---

### WafregionalRuleGroupConfig <a name="WafregionalRuleGroupConfig" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.Initializer"></a>

```typescript
import { wafregionalRuleGroup } from '@cdktf/provider-aws'

const wafregionalRuleGroupConfig: wafregionalRuleGroup.WafregionalRuleGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#metric_name WafregionalRuleGroup#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#name WafregionalRuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.activatedRule">activatedRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule">WafregionalRuleGroupActivatedRule</a>[]</code> | activated_rule block. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#id WafregionalRuleGroup#id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#tags WafregionalRuleGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#tags_all WafregionalRuleGroup#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#metric_name WafregionalRuleGroup#metric_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#name WafregionalRuleGroup#name}.

---

##### `activatedRule`<sup>Optional</sup> <a name="activatedRule" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.activatedRule"></a>

```typescript
public readonly activatedRule: IResolvable | WafregionalRuleGroupActivatedRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule">WafregionalRuleGroupActivatedRule</a>[]

activated_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#activated_rule WafregionalRuleGroup#activated_rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#id WafregionalRuleGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#tags WafregionalRuleGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group#tags_all WafregionalRuleGroup#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafregionalRuleGroupActivatedRuleActionOutputReference <a name="WafregionalRuleGroupActivatedRuleActionOutputReference" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.Initializer"></a>

```typescript
import { wafregionalRuleGroup } from '@cdktf/provider-aws'

new wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction">WafregionalRuleGroupActivatedRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafregionalRuleGroupActivatedRuleAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction">WafregionalRuleGroupActivatedRuleAction</a>

---


### WafregionalRuleGroupActivatedRuleList <a name="WafregionalRuleGroupActivatedRuleList" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.Initializer"></a>

```typescript
import { wafregionalRuleGroup } from '@cdktf/provider-aws'

new wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.get"></a>

```typescript
public get(index: number): WafregionalRuleGroupActivatedRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule">WafregionalRuleGroupActivatedRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafregionalRuleGroupActivatedRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule">WafregionalRuleGroupActivatedRule</a>[]

---


### WafregionalRuleGroupActivatedRuleOutputReference <a name="WafregionalRuleGroupActivatedRuleOutputReference" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.Initializer"></a>

```typescript
import { wafregionalRuleGroup } from '@cdktf/provider-aws'

new wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.putAction"></a>

```typescript
public putAction(value: WafregionalRuleGroupActivatedRuleAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction">WafregionalRuleGroupActivatedRuleAction</a>

---

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference">WafregionalRuleGroupActivatedRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction">WafregionalRuleGroupActivatedRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.ruleIdInput">ruleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule">WafregionalRuleGroupActivatedRule</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.action"></a>

```typescript
public readonly action: WafregionalRuleGroupActivatedRuleActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleActionOutputReference">WafregionalRuleGroupActivatedRuleActionOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: WafregionalRuleGroupActivatedRuleAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleAction">WafregionalRuleGroupActivatedRuleAction</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.ruleIdInput"></a>

```typescript
public readonly ruleIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafregionalRuleGroupActivatedRule | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRuleGroup.WafregionalRuleGroupActivatedRule">WafregionalRuleGroupActivatedRule</a> | cdktf.IResolvable

---



