# `wafRuleGroup` Submodule <a name="`wafRuleGroup` Submodule" id="@cdktf/provider-aws.wafRuleGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafRuleGroup <a name="WafRuleGroup" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group aws_waf_rule_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.Initializer"></a>

```typescript
import { wafRuleGroup } from '@cdktf/provider-aws'

new wafRuleGroup.WafRuleGroup(scope: Construct, id: string, config: WafRuleGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig">WafRuleGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig">WafRuleGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.putActivatedRule">putActivatedRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.resetActivatedRule">resetActivatedRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putActivatedRule` <a name="putActivatedRule" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.putActivatedRule"></a>

```typescript
public putActivatedRule(value: IResolvable | WafRuleGroupActivatedRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.putActivatedRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRule">WafRuleGroupActivatedRule</a>[]

---

##### `resetActivatedRule` <a name="resetActivatedRule" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.resetActivatedRule"></a>

```typescript
public resetActivatedRule(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.isConstruct"></a>

```typescript
import { wafRuleGroup } from '@cdktf/provider-aws'

wafRuleGroup.WafRuleGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.isTerraformElement"></a>

```typescript
import { wafRuleGroup } from '@cdktf/provider-aws'

wafRuleGroup.WafRuleGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.isTerraformResource"></a>

```typescript
import { wafRuleGroup } from '@cdktf/provider-aws'

wafRuleGroup.WafRuleGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.activatedRule">activatedRule</a></code> | <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleList">WafRuleGroupActivatedRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.activatedRuleInput">activatedRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRule">WafRuleGroupActivatedRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `activatedRule`<sup>Required</sup> <a name="activatedRule" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.activatedRule"></a>

```typescript
public readonly activatedRule: WafRuleGroupActivatedRuleList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleList">WafRuleGroupActivatedRuleList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `activatedRuleInput`<sup>Optional</sup> <a name="activatedRuleInput" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.activatedRuleInput"></a>

```typescript
public readonly activatedRuleInput: IResolvable | WafRuleGroupActivatedRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRule">WafRuleGroupActivatedRule</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafRuleGroupActivatedRule <a name="WafRuleGroupActivatedRule" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRule.Initializer"></a>

```typescript
import { wafRuleGroup } from '@cdktf/provider-aws'

const wafRuleGroupActivatedRule: wafRuleGroup.WafRuleGroupActivatedRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRule.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleAction">WafRuleGroupActivatedRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRule.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group#priority WafRuleGroup#priority}. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRule.property.ruleId">ruleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group#rule_id WafRuleGroup#rule_id}. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRule.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group#type WafRuleGroup#type}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRule.property.action"></a>

```typescript
public readonly action: WafRuleGroupActivatedRuleAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleAction">WafRuleGroupActivatedRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group#action WafRuleGroup#action}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group#priority WafRuleGroup#priority}.

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRule.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group#rule_id WafRuleGroup#rule_id}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group#type WafRuleGroup#type}.

---

### WafRuleGroupActivatedRuleAction <a name="WafRuleGroupActivatedRuleAction" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleAction.Initializer"></a>

```typescript
import { wafRuleGroup } from '@cdktf/provider-aws'

const wafRuleGroupActivatedRuleAction: wafRuleGroup.WafRuleGroupActivatedRuleAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleAction.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group#type WafRuleGroup#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleAction.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group#type WafRuleGroup#type}.

---

### WafRuleGroupConfig <a name="WafRuleGroupConfig" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig.Initializer"></a>

```typescript
import { wafRuleGroup } from '@cdktf/provider-aws'

const wafRuleGroupConfig: wafRuleGroup.WafRuleGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group#metric_name WafRuleGroup#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group#name WafRuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig.property.activatedRule">activatedRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRule">WafRuleGroupActivatedRule</a>[]</code> | activated_rule block. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group#id WafRuleGroup#id}. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group#tags WafRuleGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group#tags_all WafRuleGroup#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group#metric_name WafRuleGroup#metric_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group#name WafRuleGroup#name}.

---

##### `activatedRule`<sup>Optional</sup> <a name="activatedRule" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig.property.activatedRule"></a>

```typescript
public readonly activatedRule: IResolvable | WafRuleGroupActivatedRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRule">WafRuleGroupActivatedRule</a>[]

activated_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group#activated_rule WafRuleGroup#activated_rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group#id WafRuleGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group#tags WafRuleGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group#tags_all WafRuleGroup#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafRuleGroupActivatedRuleActionOutputReference <a name="WafRuleGroupActivatedRuleActionOutputReference" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.Initializer"></a>

```typescript
import { wafRuleGroup } from '@cdktf/provider-aws'

new wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleAction">WafRuleGroupActivatedRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafRuleGroupActivatedRuleAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleAction">WafRuleGroupActivatedRuleAction</a>

---


### WafRuleGroupActivatedRuleList <a name="WafRuleGroupActivatedRuleList" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleList.Initializer"></a>

```typescript
import { wafRuleGroup } from '@cdktf/provider-aws'

new wafRuleGroup.WafRuleGroupActivatedRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleList.get"></a>

```typescript
public get(index: number): WafRuleGroupActivatedRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRule">WafRuleGroupActivatedRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafRuleGroupActivatedRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRule">WafRuleGroupActivatedRule</a>[]

---


### WafRuleGroupActivatedRuleOutputReference <a name="WafRuleGroupActivatedRuleOutputReference" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.Initializer"></a>

```typescript
import { wafRuleGroup } from '@cdktf/provider-aws'

new wafRuleGroup.WafRuleGroupActivatedRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.putAction"></a>

```typescript
public putAction(value: WafRuleGroupActivatedRuleAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleAction">WafRuleGroupActivatedRuleAction</a>

---

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference">WafRuleGroupActivatedRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleAction">WafRuleGroupActivatedRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.property.ruleIdInput">ruleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRule">WafRuleGroupActivatedRule</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.property.action"></a>

```typescript
public readonly action: WafRuleGroupActivatedRuleActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleActionOutputReference">WafRuleGroupActivatedRuleActionOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: WafRuleGroupActivatedRuleAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleAction">WafRuleGroupActivatedRuleAction</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.property.ruleIdInput"></a>

```typescript
public readonly ruleIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafRuleGroupActivatedRule | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.wafRuleGroup.WafRuleGroupActivatedRule">WafRuleGroupActivatedRule</a> | cdktf.IResolvable

---



