# `shieldProtectionGroup` Submodule <a name="`shieldProtectionGroup` Submodule" id="@cdktf/provider-aws.shieldProtectionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ShieldProtectionGroup <a name="ShieldProtectionGroup" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group aws_shield_protection_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.Initializer"></a>

```typescript
import { shieldProtectionGroup } from '@cdktf/provider-aws'

new shieldProtectionGroup.ShieldProtectionGroup(scope: Construct, id: string, config: ShieldProtectionGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig">ShieldProtectionGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig">ShieldProtectionGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetMembers">resetMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMembers` <a name="resetMembers" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetMembers"></a>

```typescript
public resetMembers(): void
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.isConstruct"></a>

```typescript
import { shieldProtectionGroup } from '@cdktf/provider-aws'

shieldProtectionGroup.ShieldProtectionGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.isTerraformElement"></a>

```typescript
import { shieldProtectionGroup } from '@cdktf/provider-aws'

shieldProtectionGroup.ShieldProtectionGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.isTerraformResource"></a>

```typescript
import { shieldProtectionGroup } from '@cdktf/provider-aws'

shieldProtectionGroup.ShieldProtectionGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.protectionGroupArn">protectionGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.aggregationInput">aggregationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.protectionGroupIdInput">protectionGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.aggregation">aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.protectionGroupId">protectionGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `protectionGroupArn`<sup>Required</sup> <a name="protectionGroupArn" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.protectionGroupArn"></a>

```typescript
public readonly protectionGroupArn: string;
```

- *Type:* string

---

##### `aggregationInput`<sup>Optional</sup> <a name="aggregationInput" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.aggregationInput"></a>

```typescript
public readonly aggregationInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `protectionGroupIdInput`<sup>Optional</sup> <a name="protectionGroupIdInput" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.protectionGroupIdInput"></a>

```typescript
public readonly protectionGroupIdInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `protectionGroupId`<sup>Required</sup> <a name="protectionGroupId" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.protectionGroupId"></a>

```typescript
public readonly protectionGroupId: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ShieldProtectionGroupConfig <a name="ShieldProtectionGroupConfig" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.Initializer"></a>

```typescript
import { shieldProtectionGroup } from '@cdktf/provider-aws'

const shieldProtectionGroupConfig: shieldProtectionGroup.ShieldProtectionGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.aggregation">aggregation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#aggregation ShieldProtectionGroup#aggregation}. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.pattern">pattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#pattern ShieldProtectionGroup#pattern}. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.protectionGroupId">protectionGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#protection_group_id ShieldProtectionGroup#protection_group_id}. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#id ShieldProtectionGroup#id}. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#members ShieldProtectionGroup#members}. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#resource_type ShieldProtectionGroup#resource_type}. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#tags ShieldProtectionGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#tags_all ShieldProtectionGroup#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#aggregation ShieldProtectionGroup#aggregation}.

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#pattern ShieldProtectionGroup#pattern}.

---

##### `protectionGroupId`<sup>Required</sup> <a name="protectionGroupId" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.protectionGroupId"></a>

```typescript
public readonly protectionGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#protection_group_id ShieldProtectionGroup#protection_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#id ShieldProtectionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#members ShieldProtectionGroup#members}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#resource_type ShieldProtectionGroup#resource_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#tags ShieldProtectionGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.shieldProtectionGroup.ShieldProtectionGroupConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group#tags_all ShieldProtectionGroup#tags_all}.

---



