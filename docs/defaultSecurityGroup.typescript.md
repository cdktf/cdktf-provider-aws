# `defaultSecurityGroup` Submodule <a name="`defaultSecurityGroup` Submodule" id="@cdktf/provider-aws.defaultSecurityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultSecurityGroup <a name="DefaultSecurityGroup" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_security_group aws_default_security_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer"></a>

```typescript
import { defaultSecurityGroup } from '@cdktf/provider-aws'

new defaultSecurityGroup.DefaultSecurityGroup(scope: Construct, id: string, config?: DefaultSecurityGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig">DefaultSecurityGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig">DefaultSecurityGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.putEgress">putEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.putIngress">putIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetEgress">resetEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetIngress">resetIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetRevokeRulesOnDelete">resetRevokeRulesOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putEgress` <a name="putEgress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.putEgress"></a>

```typescript
public putEgress(value: IResolvable | DefaultSecurityGroupEgress[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.putEgress.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a>[]

---

##### `putIngress` <a name="putIngress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.putIngress"></a>

```typescript
public putIngress(value: IResolvable | DefaultSecurityGroupIngress[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.putIngress.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a>[]

---

##### `resetEgress` <a name="resetEgress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetEgress"></a>

```typescript
public resetEgress(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIngress` <a name="resetIngress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetIngress"></a>

```typescript
public resetIngress(): void
```

##### `resetRevokeRulesOnDelete` <a name="resetRevokeRulesOnDelete" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetRevokeRulesOnDelete"></a>

```typescript
public resetRevokeRulesOnDelete(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetVpcId"></a>

```typescript
public resetVpcId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isConstruct"></a>

```typescript
import { defaultSecurityGroup } from '@cdktf/provider-aws'

defaultSecurityGroup.DefaultSecurityGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isTerraformElement"></a>

```typescript
import { defaultSecurityGroup } from '@cdktf/provider-aws'

defaultSecurityGroup.DefaultSecurityGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isTerraformResource"></a>

```typescript
import { defaultSecurityGroup } from '@cdktf/provider-aws'

defaultSecurityGroup.DefaultSecurityGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.egress">egress</a></code> | <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList">DefaultSecurityGroupEgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList">DefaultSecurityGroupIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.egressInput">egressInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.ingressInput">ingressInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.revokeRulesOnDeleteInput">revokeRulesOnDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.revokeRulesOnDelete">revokeRulesOnDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.egress"></a>

```typescript
public readonly egress: DefaultSecurityGroupEgressList;
```

- *Type:* <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList">DefaultSecurityGroupEgressList</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.ingress"></a>

```typescript
public readonly ingress: DefaultSecurityGroupIngressList;
```

- *Type:* <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList">DefaultSecurityGroupIngressList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `egressInput`<sup>Optional</sup> <a name="egressInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.egressInput"></a>

```typescript
public readonly egressInput: IResolvable | DefaultSecurityGroupEgress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingressInput`<sup>Optional</sup> <a name="ingressInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.ingressInput"></a>

```typescript
public readonly ingressInput: IResolvable | DefaultSecurityGroupIngress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a>[]

---

##### `revokeRulesOnDeleteInput`<sup>Optional</sup> <a name="revokeRulesOnDeleteInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.revokeRulesOnDeleteInput"></a>

```typescript
public readonly revokeRulesOnDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `revokeRulesOnDelete`<sup>Required</sup> <a name="revokeRulesOnDelete" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.revokeRulesOnDelete"></a>

```typescript
public readonly revokeRulesOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultSecurityGroupConfig <a name="DefaultSecurityGroupConfig" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.Initializer"></a>

```typescript
import { defaultSecurityGroup } from '@cdktf/provider-aws'

const defaultSecurityGroupConfig: defaultSecurityGroup.DefaultSecurityGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.egress">egress</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a>[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#egress DefaultSecurityGroup#egress}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#id DefaultSecurityGroup#id}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.ingress">ingress</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a>[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ingress DefaultSecurityGroup#ingress}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.revokeRulesOnDelete">revokeRulesOnDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#revoke_rules_on_delete DefaultSecurityGroup#revoke_rules_on_delete}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#tags DefaultSecurityGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#tags_all DefaultSecurityGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#vpc_id DefaultSecurityGroup#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.egress"></a>

```typescript
public readonly egress: IResolvable | DefaultSecurityGroupEgress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a>[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#egress DefaultSecurityGroup#egress}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#id DefaultSecurityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.ingress"></a>

```typescript
public readonly ingress: IResolvable | DefaultSecurityGroupIngress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a>[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ingress DefaultSecurityGroup#ingress}.

---

##### `revokeRulesOnDelete`<sup>Optional</sup> <a name="revokeRulesOnDelete" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.revokeRulesOnDelete"></a>

```typescript
public readonly revokeRulesOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#revoke_rules_on_delete DefaultSecurityGroup#revoke_rules_on_delete}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#tags DefaultSecurityGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#tags_all DefaultSecurityGroup#tags_all}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#vpc_id DefaultSecurityGroup#vpc_id}.

---

### DefaultSecurityGroupEgress <a name="DefaultSecurityGroupEgress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.Initializer"></a>

```typescript
import { defaultSecurityGroup } from '@cdktf/provider-aws'

const defaultSecurityGroupEgress: defaultSecurityGroup.DefaultSecurityGroupEgress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.cidrBlocks">cidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#cidr_blocks DefaultSecurityGroup#cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#description DefaultSecurityGroup#description}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.fromPort">fromPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#from_port DefaultSecurityGroup#from_port}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.ipv6CidrBlocks">ipv6CidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ipv6_cidr_blocks DefaultSecurityGroup#ipv6_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.prefixListIds">prefixListIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#prefix_list_ids DefaultSecurityGroup#prefix_list_ids}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#protocol DefaultSecurityGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#security_groups DefaultSecurityGroup#security_groups}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.selfAttribute">selfAttribute</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#self DefaultSecurityGroup#self}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.toPort">toPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#to_port DefaultSecurityGroup#to_port}. |

---

##### `cidrBlocks`<sup>Optional</sup> <a name="cidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.cidrBlocks"></a>

```typescript
public readonly cidrBlocks: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#cidr_blocks DefaultSecurityGroup#cidr_blocks}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#description DefaultSecurityGroup#description}.

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#from_port DefaultSecurityGroup#from_port}.

---

##### `ipv6CidrBlocks`<sup>Optional</sup> <a name="ipv6CidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.ipv6CidrBlocks"></a>

```typescript
public readonly ipv6CidrBlocks: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ipv6_cidr_blocks DefaultSecurityGroup#ipv6_cidr_blocks}.

---

##### `prefixListIds`<sup>Optional</sup> <a name="prefixListIds" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.prefixListIds"></a>

```typescript
public readonly prefixListIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#prefix_list_ids DefaultSecurityGroup#prefix_list_ids}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#protocol DefaultSecurityGroup#protocol}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#security_groups DefaultSecurityGroup#security_groups}.

---

##### `selfAttribute`<sup>Optional</sup> <a name="selfAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.selfAttribute"></a>

```typescript
public readonly selfAttribute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#self DefaultSecurityGroup#self}.

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#to_port DefaultSecurityGroup#to_port}.

---

### DefaultSecurityGroupIngress <a name="DefaultSecurityGroupIngress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.Initializer"></a>

```typescript
import { defaultSecurityGroup } from '@cdktf/provider-aws'

const defaultSecurityGroupIngress: defaultSecurityGroup.DefaultSecurityGroupIngress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.cidrBlocks">cidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#cidr_blocks DefaultSecurityGroup#cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#description DefaultSecurityGroup#description}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.fromPort">fromPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#from_port DefaultSecurityGroup#from_port}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.ipv6CidrBlocks">ipv6CidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ipv6_cidr_blocks DefaultSecurityGroup#ipv6_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.prefixListIds">prefixListIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#prefix_list_ids DefaultSecurityGroup#prefix_list_ids}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#protocol DefaultSecurityGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#security_groups DefaultSecurityGroup#security_groups}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.selfAttribute">selfAttribute</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#self DefaultSecurityGroup#self}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.toPort">toPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#to_port DefaultSecurityGroup#to_port}. |

---

##### `cidrBlocks`<sup>Optional</sup> <a name="cidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.cidrBlocks"></a>

```typescript
public readonly cidrBlocks: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#cidr_blocks DefaultSecurityGroup#cidr_blocks}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#description DefaultSecurityGroup#description}.

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#from_port DefaultSecurityGroup#from_port}.

---

##### `ipv6CidrBlocks`<sup>Optional</sup> <a name="ipv6CidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.ipv6CidrBlocks"></a>

```typescript
public readonly ipv6CidrBlocks: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ipv6_cidr_blocks DefaultSecurityGroup#ipv6_cidr_blocks}.

---

##### `prefixListIds`<sup>Optional</sup> <a name="prefixListIds" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.prefixListIds"></a>

```typescript
public readonly prefixListIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#prefix_list_ids DefaultSecurityGroup#prefix_list_ids}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#protocol DefaultSecurityGroup#protocol}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#security_groups DefaultSecurityGroup#security_groups}.

---

##### `selfAttribute`<sup>Optional</sup> <a name="selfAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.selfAttribute"></a>

```typescript
public readonly selfAttribute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#self DefaultSecurityGroup#self}.

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#to_port DefaultSecurityGroup#to_port}.

---

## Classes <a name="Classes" id="Classes"></a>

### DefaultSecurityGroupEgressList <a name="DefaultSecurityGroupEgressList" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer"></a>

```typescript
import { defaultSecurityGroup } from '@cdktf/provider-aws'

new defaultSecurityGroup.DefaultSecurityGroupEgressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.get"></a>

```typescript
public get(index: number): DefaultSecurityGroupEgressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DefaultSecurityGroupEgress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a>[]

---


### DefaultSecurityGroupEgressOutputReference <a name="DefaultSecurityGroupEgressOutputReference" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer"></a>

```typescript
import { defaultSecurityGroup } from '@cdktf/provider-aws'

new defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetCidrBlocks">resetCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetIpv6CidrBlocks">resetIpv6CidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetPrefixListIds">resetPrefixListIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetSelfAttribute">resetSelfAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrBlocks` <a name="resetCidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetCidrBlocks"></a>

```typescript
public resetCidrBlocks(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFromPort` <a name="resetFromPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetFromPort"></a>

```typescript
public resetFromPort(): void
```

##### `resetIpv6CidrBlocks` <a name="resetIpv6CidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetIpv6CidrBlocks"></a>

```typescript
public resetIpv6CidrBlocks(): void
```

##### `resetPrefixListIds` <a name="resetPrefixListIds" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetPrefixListIds"></a>

```typescript
public resetPrefixListIds(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

##### `resetSelfAttribute` <a name="resetSelfAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetSelfAttribute"></a>

```typescript
public resetSelfAttribute(): void
```

##### `resetToPort` <a name="resetToPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetToPort"></a>

```typescript
public resetToPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.cidrBlocksInput">cidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.ipv6CidrBlocksInput">ipv6CidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.prefixListIdsInput">prefixListIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.selfAttributeInput">selfAttributeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.cidrBlocks">cidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.ipv6CidrBlocks">ipv6CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.prefixListIds">prefixListIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.selfAttribute">selfAttribute</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrBlocksInput`<sup>Optional</sup> <a name="cidrBlocksInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.cidrBlocksInput"></a>

```typescript
public readonly cidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `ipv6CidrBlocksInput`<sup>Optional</sup> <a name="ipv6CidrBlocksInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.ipv6CidrBlocksInput"></a>

```typescript
public readonly ipv6CidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `prefixListIdsInput`<sup>Optional</sup> <a name="prefixListIdsInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.prefixListIdsInput"></a>

```typescript
public readonly prefixListIdsInput: string[];
```

- *Type:* string[]

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `selfAttributeInput`<sup>Optional</sup> <a name="selfAttributeInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.selfAttributeInput"></a>

```typescript
public readonly selfAttributeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `cidrBlocks`<sup>Required</sup> <a name="cidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.cidrBlocks"></a>

```typescript
public readonly cidrBlocks: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `ipv6CidrBlocks`<sup>Required</sup> <a name="ipv6CidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.ipv6CidrBlocks"></a>

```typescript
public readonly ipv6CidrBlocks: string[];
```

- *Type:* string[]

---

##### `prefixListIds`<sup>Required</sup> <a name="prefixListIds" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.prefixListIds"></a>

```typescript
public readonly prefixListIds: string[];
```

- *Type:* string[]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `selfAttribute`<sup>Required</sup> <a name="selfAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.selfAttribute"></a>

```typescript
public readonly selfAttribute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DefaultSecurityGroupEgress | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a> | cdktf.IResolvable

---


### DefaultSecurityGroupIngressList <a name="DefaultSecurityGroupIngressList" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer"></a>

```typescript
import { defaultSecurityGroup } from '@cdktf/provider-aws'

new defaultSecurityGroup.DefaultSecurityGroupIngressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.get"></a>

```typescript
public get(index: number): DefaultSecurityGroupIngressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DefaultSecurityGroupIngress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a>[]

---


### DefaultSecurityGroupIngressOutputReference <a name="DefaultSecurityGroupIngressOutputReference" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer"></a>

```typescript
import { defaultSecurityGroup } from '@cdktf/provider-aws'

new defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetCidrBlocks">resetCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetIpv6CidrBlocks">resetIpv6CidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetPrefixListIds">resetPrefixListIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetSelfAttribute">resetSelfAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrBlocks` <a name="resetCidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetCidrBlocks"></a>

```typescript
public resetCidrBlocks(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFromPort` <a name="resetFromPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetFromPort"></a>

```typescript
public resetFromPort(): void
```

##### `resetIpv6CidrBlocks` <a name="resetIpv6CidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetIpv6CidrBlocks"></a>

```typescript
public resetIpv6CidrBlocks(): void
```

##### `resetPrefixListIds` <a name="resetPrefixListIds" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetPrefixListIds"></a>

```typescript
public resetPrefixListIds(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

##### `resetSelfAttribute` <a name="resetSelfAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetSelfAttribute"></a>

```typescript
public resetSelfAttribute(): void
```

##### `resetToPort` <a name="resetToPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetToPort"></a>

```typescript
public resetToPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.cidrBlocksInput">cidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.ipv6CidrBlocksInput">ipv6CidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.prefixListIdsInput">prefixListIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.selfAttributeInput">selfAttributeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.cidrBlocks">cidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.ipv6CidrBlocks">ipv6CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.prefixListIds">prefixListIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.selfAttribute">selfAttribute</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrBlocksInput`<sup>Optional</sup> <a name="cidrBlocksInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.cidrBlocksInput"></a>

```typescript
public readonly cidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `ipv6CidrBlocksInput`<sup>Optional</sup> <a name="ipv6CidrBlocksInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.ipv6CidrBlocksInput"></a>

```typescript
public readonly ipv6CidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `prefixListIdsInput`<sup>Optional</sup> <a name="prefixListIdsInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.prefixListIdsInput"></a>

```typescript
public readonly prefixListIdsInput: string[];
```

- *Type:* string[]

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `selfAttributeInput`<sup>Optional</sup> <a name="selfAttributeInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.selfAttributeInput"></a>

```typescript
public readonly selfAttributeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `cidrBlocks`<sup>Required</sup> <a name="cidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.cidrBlocks"></a>

```typescript
public readonly cidrBlocks: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `ipv6CidrBlocks`<sup>Required</sup> <a name="ipv6CidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.ipv6CidrBlocks"></a>

```typescript
public readonly ipv6CidrBlocks: string[];
```

- *Type:* string[]

---

##### `prefixListIds`<sup>Required</sup> <a name="prefixListIds" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.prefixListIds"></a>

```typescript
public readonly prefixListIds: string[];
```

- *Type:* string[]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `selfAttribute`<sup>Required</sup> <a name="selfAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.selfAttribute"></a>

```typescript
public readonly selfAttribute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DefaultSecurityGroupIngress | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a> | cdktf.IResolvable

---



