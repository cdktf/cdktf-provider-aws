# `medialiveInputSecurityGroup` Submodule <a name="`medialiveInputSecurityGroup` Submodule" id="@cdktf/provider-aws.medialiveInputSecurityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveInputSecurityGroup <a name="MedialiveInputSecurityGroup" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group aws_medialive_input_security_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer"></a>

```typescript
import { medialiveInputSecurityGroup } from '@cdktf/provider-aws'

new medialiveInputSecurityGroup.MedialiveInputSecurityGroup(scope: Construct, id: string, config: MedialiveInputSecurityGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig">MedialiveInputSecurityGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig">MedialiveInputSecurityGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.putWhitelistRules">putWhitelistRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: MedialiveInputSecurityGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts">MedialiveInputSecurityGroupTimeouts</a>

---

##### `putWhitelistRules` <a name="putWhitelistRules" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.putWhitelistRules"></a>

```typescript
public putWhitelistRules(value: IResolvable | MedialiveInputSecurityGroupWhitelistRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.putWhitelistRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isConstruct"></a>

```typescript
import { medialiveInputSecurityGroup } from '@cdktf/provider-aws'

medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformElement"></a>

```typescript
import { medialiveInputSecurityGroup } from '@cdktf/provider-aws'

medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformResource"></a>

```typescript
import { medialiveInputSecurityGroup } from '@cdktf/provider-aws'

medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.inputs">inputs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference">MedialiveInputSecurityGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.whitelistRules">whitelistRules</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList">MedialiveInputSecurityGroupWhitelistRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts">MedialiveInputSecurityGroupTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.whitelistRulesInput">whitelistRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.inputs"></a>

```typescript
public readonly inputs: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.timeouts"></a>

```typescript
public readonly timeouts: MedialiveInputSecurityGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference">MedialiveInputSecurityGroupTimeoutsOutputReference</a>

---

##### `whitelistRules`<sup>Required</sup> <a name="whitelistRules" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.whitelistRules"></a>

```typescript
public readonly whitelistRules: MedialiveInputSecurityGroupWhitelistRulesList;
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList">MedialiveInputSecurityGroupWhitelistRulesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: MedialiveInputSecurityGroupTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts">MedialiveInputSecurityGroupTimeouts</a> | cdktf.IResolvable

---

##### `whitelistRulesInput`<sup>Optional</sup> <a name="whitelistRulesInput" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.whitelistRulesInput"></a>

```typescript
public readonly whitelistRulesInput: IResolvable | MedialiveInputSecurityGroupWhitelistRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveInputSecurityGroupConfig <a name="MedialiveInputSecurityGroupConfig" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.Initializer"></a>

```typescript
import { medialiveInputSecurityGroup } from '@cdktf/provider-aws'

const medialiveInputSecurityGroupConfig: medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.whitelistRules">whitelistRules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>[]</code> | whitelist_rules block. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#id MedialiveInputSecurityGroup#id}. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#tags MedialiveInputSecurityGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#tags_all MedialiveInputSecurityGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts">MedialiveInputSecurityGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `whitelistRules`<sup>Required</sup> <a name="whitelistRules" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.whitelistRules"></a>

```typescript
public readonly whitelistRules: IResolvable | MedialiveInputSecurityGroupWhitelistRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>[]

whitelist_rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#whitelist_rules MedialiveInputSecurityGroup#whitelist_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#id MedialiveInputSecurityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#tags MedialiveInputSecurityGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#tags_all MedialiveInputSecurityGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MedialiveInputSecurityGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts">MedialiveInputSecurityGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#timeouts MedialiveInputSecurityGroup#timeouts}

---

### MedialiveInputSecurityGroupTimeouts <a name="MedialiveInputSecurityGroupTimeouts" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts.Initializer"></a>

```typescript
import { medialiveInputSecurityGroup } from '@cdktf/provider-aws'

const medialiveInputSecurityGroupTimeouts: medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#create MedialiveInputSecurityGroup#create}. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#delete MedialiveInputSecurityGroup#delete}. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#update MedialiveInputSecurityGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#create MedialiveInputSecurityGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#delete MedialiveInputSecurityGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#update MedialiveInputSecurityGroup#update}.

---

### MedialiveInputSecurityGroupWhitelistRules <a name="MedialiveInputSecurityGroupWhitelistRules" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules.Initializer"></a>

```typescript
import { medialiveInputSecurityGroup } from '@cdktf/provider-aws'

const medialiveInputSecurityGroupWhitelistRules: medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules.property.cidr">cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#cidr MedialiveInputSecurityGroup#cidr}. |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#cidr MedialiveInputSecurityGroup#cidr}.

---

## Classes <a name="Classes" id="Classes"></a>

### MedialiveInputSecurityGroupTimeoutsOutputReference <a name="MedialiveInputSecurityGroupTimeoutsOutputReference" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { medialiveInputSecurityGroup } from '@cdktf/provider-aws'

new medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts">MedialiveInputSecurityGroupTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MedialiveInputSecurityGroupTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts">MedialiveInputSecurityGroupTimeouts</a> | cdktf.IResolvable

---


### MedialiveInputSecurityGroupWhitelistRulesList <a name="MedialiveInputSecurityGroupWhitelistRulesList" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer"></a>

```typescript
import { medialiveInputSecurityGroup } from '@cdktf/provider-aws'

new medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.get"></a>

```typescript
public get(index: number): MedialiveInputSecurityGroupWhitelistRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MedialiveInputSecurityGroupWhitelistRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>[]

---


### MedialiveInputSecurityGroupWhitelistRulesOutputReference <a name="MedialiveInputSecurityGroupWhitelistRulesOutputReference" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer"></a>

```typescript
import { medialiveInputSecurityGroup } from '@cdktf/provider-aws'

new medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MedialiveInputSecurityGroupWhitelistRules | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a> | cdktf.IResolvable

---



